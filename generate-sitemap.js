import fs from "fs";

const baseUrl = "https://senseifood.com";

const pages = [
  "/"
];

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

fs.writeFileSync("./public/sitemap.xml", xml);

console.log("Sitemap generated.");