import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]`;
export const four = groq `*[_type == "product"][0..3]`;

// for might you like
export const four2 = groq `*[_type == "product"][4..7]`;
// our popular products
export const three = groq `*[_type == "product"][8..11]`;