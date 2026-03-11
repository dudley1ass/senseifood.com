import fs from "fs";
import path from "path";

const baseUrl = "https://senseifood.com";

const pages = ["/"];

const publicDir = path.resolve("./public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach((page) => {
  xml += `
  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`;
});

xml += `
</urlset>`;

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, xml, "utf8");

console.log(`Sitemap generated at: ${sitemapPath}`);