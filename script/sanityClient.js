
// import dotenv from "dotenv";

// dotenv.config();






// const { createClient } = require("@sanity/client");
// require("dotenv").config(); // Ensure dotenv is installed and .env is loaded

// const client = createClient({
//   projectId: "m6dcwszi",  // Replace with your actual Sanity Project ID
//   dataset: "production",  // Replace if using a different dataset
//   apiVersion: "2024-01-29", // Use today's date or match your API version
//   token: process.env.SANITY_API_TOKEN, // Ensure token is set in .env
//   useCdn: false,
// });

// module.exports = client;

// import { createClient } from "@sanity/client";

// export const client = createClient({
//   projectId: "m6dcwszi", // Replace with actual project ID
//   dataset: "production",
//   apiVersion: "2024-01-29",
//   token: process.env.SANITY_API_TOKEN, // Ensure this is set
//   useCdn: false,
// });

import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "m6dcwszi",  
    dataset: "production",
    useCdn: false,  
    token: "skbZvZAaVdux1u9JJH0sJ5NApOGQKa0N10XBM56C6BD890Rs1Qgp4JZVY23Dq8F3y1R3ajp5MGybqKFMVqu2QwfvR0r9AkeeijMuvCoPy5vRrxZ9rWiwzZwESWCUC3i80SLpbHMJbn6gJo9FchDIzcmAVEmT7UnqVoTpOTpqBZVBk3ECRIin",  // Directly paste token to test
    apiVersion: "2023-01-01",
});
