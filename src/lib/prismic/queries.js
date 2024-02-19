import * as prismic from "@prismicio/client";
import { client } from "./client.js";

export const fetchSingleDocumentByType = async ({ type = "", options = {} }) =>
  client.getSingle(type, options);

// export const fetchSingleDocumentByUID = async ({ uid = "", options = {} }) =>
//   client.getByUID(uid, options);

export const fetchDocumentsByType = async ({ type = "", options = {} }) =>
  client.getByType(type, options).then((res) => res.results);

export const fetchRelatedDocumentsByTypeAndIDs = async ({
  type = "",
  linkedType = "",
  ids = [],
  options = {},
}) => {
  if (!ids.length) return [];

  return client
    .getAllByType(type, {
      ...options,
      filters: [prismic.filter.any(`my.${type}.${linkedType}`, ids)],
    })
    .then((res) => res);
};
