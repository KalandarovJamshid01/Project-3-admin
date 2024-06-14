import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';
export async function DELETE(request) {
    try {
        const url = new URL(request.url);
      const id = url.searchParams.get('id');
      const { env } = getRequestContext();
      const DB = env.DB;
        console.log(id);
      const get_query = `SELECT * FROM connections WHERE id = ?`;
      const result = await DB.prepare(get_query).bind(id).first();
  
      const imgQuery=`DELETE FROM images WHERE id = ?`
      await DB.prepare(imgQuery).bind(result.img_id).run();
      const query = `DELETE FROM connections WHERE id = ?`;
      await DB.prepare(query).bind(id).run();
  
      return NextResponse.json('Record deleted successfully!', { status: 200 });
    } catch (error) {
      console.error('Error deleting record:', error);
      return NextResponse.json((`Error: ${error.message}`, { status: 500 }));
    }
  }