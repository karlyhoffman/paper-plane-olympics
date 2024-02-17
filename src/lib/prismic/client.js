import * as prismic from "@prismicio/client";

const { PRISMIC_API_URL, PRISMIC_ACCESS_TOKEN: accessToken } = import.meta.env;

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
