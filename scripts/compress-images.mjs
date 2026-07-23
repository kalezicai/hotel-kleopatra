import { readFile, writeFile } from "fs/promises";
import { join, extname } from "path";
import sharp from "sharp";

const dirs = [
  "public/images",
  "public/images/rooms/Comfort Double Room with Sea View",
  "public/images/rooms/Comfort Triple Room with Sea View",
  "public/images/rooms/Comfort Quadruple Room with Sea View",
  "public/images/rooms/Comfort Two-Bedroom Apartment with Balcony",
  "public/images/rooms/Standard Double Room with Balcony, Sea and Pool View",
  "public/images/rooms/Comfort Three-Bedroom Apartment with Balcony and Sea View",
  "public/images/rooms/Standard Triple Room with Balcony, Sea and Pool View",
  "public/images/rooms/Luxury Apartment",
  "public/images/rooms/Comfort Double Room with Balcony and Pool View",
  "public/images/rooms/Standard Double Room with Balcony",
  "public/images/rooms/Comfort Two-Bedroom Apartment",
  "public/images/rooms/Standard Two-Bedroom Apartment",
  "public/images/rooms/Standard Apartment",
  "public/images/rooms/Double Room",
  "public/images/rooms/Deluxe Double Room",
  "public/images/rooms/Deluxe Quadruple Room",
  "public/images/rooms/Deluxe Apartment",
  "public/images/rooms/Standard Apartment with Pool View",
  "public/images/rooms/Superior Queen Room with Two Queen Beds",
  "public/images/rooms/Superior Twin Room",
  "public/images/rooms/Superior Quadruple Room",
  "public/images/rooms/Superior Queen Room",
  "public/images/rooms/Superior Double Room",
  "public/images/rooms/General",
];

let saved = 0;
let total = 0;

for (const dir of dirs) {
  try {
    const files = await readdir(dir);
    for (const file of files) {
      if (!/\.jpe?g$/i.test(file)) continue;
      const fp = join(dir, file);
      const buf = await readFile(fp);
      const origSize = buf.length;
      const compressed = await sharp(buf).jpeg({ quality: 80, mozjpeg: true, progressive: true }).toBuffer();
      if (compressed.length < origSize) {
        await writeFile(fp, compressed);
        const pct = ((1 - compressed.length / origSize) * 100).toFixed(1);
        console.log(`${(origSize/1024).toFixed(0)}K → ${(compressed.length/1024).toFixed(0)}K (${pct}%)  ${dir}\\${file}`);
        saved += origSize - compressed.length;
      }
      total++;
    }
  } catch { /* skip missing dirs */ }
}

console.log(`\nCompressed ${total} images. Saved ${(saved/1024).toFixed(0)} KB total.`);

async function readdir(dir) {
  const { readdir } = await import("fs/promises");
  return readdir(dir);
}
