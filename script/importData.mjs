"use strict";
import axios from "axios";
import { client } from "./sanityClient.js"; // Ensure this file uses ES module syntax
import slugify from "slugify";

// 🔹 Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: "arraybuffer", timeout: 10000 });
        const buffer = Buffer.from(response.data);

        // Upload image to Sanity
        const asset = await client.assets.upload("image", buffer, {
            filename: imageUrl.split("/").pop(),
        });

        console.log("✅ Image uploaded successfully:", asset._id);
        return asset._id; // Return asset reference ID
    } catch (error) {
        console.error("❌ Failed to upload image:", imageUrl, error.message);
        return null;
    }
}

// 🔹 Function to create or retrieve a category
async function createCategory(category, counter) {
    try {
        // Check if category already exists
        const categoryExist = await client.fetch(`*[_type=="category" && slug.current==$slug][0]`, { slug: category.slug });
        if (categoryExist) {
            console.log(`✅ Category '${category.name}' already exists.`);
            return categoryExist._id;
        }

        // Create new category
        const catObj = {
            _type: "category",
            _id: `category-${counter}`,
            name: category.name,
            slug: {
                _type: "slug",
                current: category.slug,
            },
        };

        const response = await client.createOrReplace(catObj);
        console.log(`✅ Category '${category.name}' created successfully`);
        return response._id;
    } catch (error) {
        console.error(`❌ Failed to create category '${category.name}':`, error.message);
        return null;
    }
}

// 🔹 Main function to import product data
async function importData() {
    try {
        console.log("🔄 Fetching product data...");
        const response = await axios.get("https://hackathon-apis.vercel.app/api/products");
        const products = response.data;
        let counter = 1;

        for (const product of products) {
            console.log(`\n🔹 Processing product ${counter}: ${product.name}`);

            let imageRef = null;
            let catRef = null;

            // Upload product image if available
            if (product.image) {
                imageRef = await uploadImageToSanity(product.image);
            }

            // Create or fetch category if available
            if (product.category?.name) {
                catRef = await createCategory(product.category, counter);
            }

            // Define Sanity product object
            const sanityProduct = {
                _id: `product-${counter}`,
                _type: "product",
                name: product.name,
                slug: {
                    _type: "slug",
                    current: slugify(product.name || "default-product", { lower: true, strict: true }),
                },
                price: product.price || 0,
                category: catRef ? { _type: "reference", _ref: catRef } : null,
                tags: product.tags || [],
                quantity: product.quantity || 50,
                image: imageRef
                    ? {
                          _type: "image",
                          asset: {
                              _type: "reference",
                              _ref: imageRef,
                          },
                      }
                    : null,
                description: product.description || "No description available.",
                features: product.features || ["Basic product features"],
                dimensions: product.dimensions || {
                    _type: "dimensions",
                    height: "110cm",
                    width: "75cm",
                    depth: "50cm",
                },
            };

            console.log("🔄 Uploading product to Sanity...", sanityProduct);

            // Upload product to Sanity
            await client.createOrReplace(sanityProduct);
            console.log(`✅ Successfully imported product: ${sanityProduct.name}`);

            counter++;
        }

        console.log("\n🎉 Data import completed successfully!");
    } catch (error) {
        console.error("❌ Error importing data:", error.message);
    }
}

// Run the import function
importData();
