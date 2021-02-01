// https://leerob.io/blog/nextjs-sitemap-robots

const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  console.log("Generating static sitemap.xml");

  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby(["src/pages/**/*{.js,.mdx}", "!src/pages/_*.js", "!src/pages/api"]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace("src", "").replace("pages", "").replace(".jsx", "").replace(".js", "").replace(".mdx", "");
                const route = path === "/index" ? "" : path;

                return `
                        <url>
                            <loc>${`${process.env.NEXT_PUBLIC_URL}${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();
