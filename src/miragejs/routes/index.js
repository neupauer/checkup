/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

export default function routes() {
  this.namespace = "api";

  this.passthrough((request) => {
    if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
  });

  this.resource("reports");
  this.resource("maps");
}
