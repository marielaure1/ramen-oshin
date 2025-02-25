import { NextResponse } from "next/server";
import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const img = searchParams.get("img"); 
    const format = searchParams.get("format") || "webp";

    if (!img) return NextResponse.json({ error: "No image provided" }, { status: 400 });

    const imagePath = path.join(process.cwd(), "src", "assets", "img", img);

    if (!fs.existsSync(imagePath)) {
        return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    try {
        const buffer = await sharp(imagePath)
            .resize(1500)
            .toFormat(format)
            .toBuffer();

        return new NextResponse(buffer, {
            headers: {
                "Content-Type": `image/${format}`,
                "Cache-Control": "max-age=31536000, immutable"
            }
        });
    } catch (error) {
        return NextResponse.json({ error: "Processing error" }, { status: 500 });
    }
}
