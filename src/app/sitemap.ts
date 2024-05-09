import { MetadataRoute } from "next";
import fs from "fs";

export const revalidate = 40;

export default function sitemap(): MetadataRoute.Sitemap {
    // Read test.json and return it as a sitemap.
    const json = fs.readFileSync("./src/app/test.json", "utf-8");
    const data = JSON.parse(json);

    return data;
}