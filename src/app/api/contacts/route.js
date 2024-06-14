import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export async function GET(request) {
    try {
        const url = new URL(request.url);
        const { env } = getRequestContext();
        const DB = env.DB;

        const id = url.searchParams.get('id');
        const page = parseInt(url.searchParams.get('page')) || 1;
        const pageSize = parseInt(url.searchParams.get('pageSize')) || 10;
        let query, results;

        if (id) {
            query = `SELECT * FROM connections WHERE id = ?`;
            results = await DB.prepare(query).bind(id).first();
        } else {
            const offset = (page - 1) * pageSize;
            query = `SELECT * FROM connections LIMIT ? OFFSET ?`;
            results = await DB.prepare(query).bind(pageSize, offset).all();
        }


        return NextResponse.json(results.results);
    } catch (error) {
        console.error('Error fetching data:', error);
        return new NextResponse(`Error: ${error.message}`, { 
            status: 500, 
            headers: { 'Access-Control-Allow-Origin': '*' } 
        });
    }
}
