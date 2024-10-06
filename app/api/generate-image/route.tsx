import { NextRequest, NextResponse } from "next/server";
//replicate is not free so this part is incomplete
export async function POST(req:NextRequest){
    return NextResponse.json({"Data":"Hi"})
}