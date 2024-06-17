import { NextResponse } from "next/server";
import CryptoJS from 'crypto-js';
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export async function POST(req) {
  let title, context; // Declare title and context variables outside the try/catch block

  try {
    const formData = await req.formData();
    const file = formData.get('file');
    context = formData.get("context"); // Assign context to the outer variable
    title = formData.get("title"); // Assign title to the outer variable
    const CLOUDINARY_API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
    const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    formData.delete("title");
    formData.delete("context");

    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${file.name}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;

    const signature = CryptoJS.SHA1(paramsToSign).toString();
    formData.append('file', file);
    formData.append('public_id', file.name);
    formData.append('signature', signature);
    formData.append('api_key', CLOUDINARY_API_KEY);
    formData.append('timestamp', timestamp);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    const { DB } = getRequestContext().env;
    const createdAt = new Date().toISOString();
    const insertQuery = `
      INSERT INTO images (img_url, title, context, file_name, width, height, format, folder, bytes, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await DB.prepare(insertQuery)
      .bind(result.url, title, context, result.original_filename, result.width, result.height, result.format, "my_website_images", result.bytes, createdAt)
      .run();

    const new_data = await DB.prepare("SELECT * FROM images ORDER BY created_at DESC Limit 1").bind().first();

    console.log(new_data);
    return NextResponse.json({ success: true, data: new_data, result });
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json({ message: error.message }, { status: 500, headers: { "Content-Type": "application/json" }});
  }
}
