import * as prismic from "@prismicio/client";

const { PRISMIC_API_URL, PRISMIC_ACCESS_TOKEN: accessToken } = import.meta.env;

// const routes = [
//   {
//     type: "recipe",
//     path: "/recipes/:uid",
//   },
//   {
//     type: "ingredient_tag",
//     path: "/recipes/ingredients/:uid",
//   },
//   { type: "cuisine_tag", path: "/recipes/cuisines/:uid" },
//   { type: "type_tag", path: "/recipes/dish-types/:uid" },
//   { type: "season_tag", path: "/recipes/seasons/:uid" },
// ];

const routes = [];

export const client = prismic.createClient(PRISMIC_API_URL, {
  accessToken,
  routes,
});
