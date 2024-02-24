import * as prismic from "@prismicio/client";

const { PRISMIC_API_URL, PRISMIC_ACCESS_TOKEN: accessToken } = import.meta.env;

/*
 * Configuring the route array below is optional, however, when routes are define 
 * Prismic will return the generated url in the fetch response.
 * 
 * For example, if you have a document with the type "plane" and the uid "plane-jane",
 * the fetch response will include the url field with the value "/planes/plane-jane".
 * 
 * If you don't define routes, the url field will not be included in the fetch response.
 */
const routes = [
  {
    type: "homepage",
    path: "/",
  },
  {
    type: "plane",
    path: "/planes/:uid",
  },
  {
    type: "custom_template",
    path: "/:uid",
  },
];

export const client = prismic.createClient(PRISMIC_API_URL, {
  accessToken,
  routes,
});

// client.enableAutoPreviews();
