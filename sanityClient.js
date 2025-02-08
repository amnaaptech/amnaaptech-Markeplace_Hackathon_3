import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "m6dcwszi",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2024-01-29",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, 
});



//  {cartItems.map((item) => (
//   <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
//   {(item.image &&
//      <Image src={urlFor(item.image).url()}/>
//   )}
//    <div className="flex-1 px-4">
//      <h2 className="text-lg font-semibold">{item.name}</h2>
//      <p className="text-gray-500">${item.price}</p>
//    </div>
//    <div className="flex items-center">
//      <button
//        onClick={() => handleDecrement(item._id)}
//        className="px-3 py-1 bg-gray-200 rounded-md"
//      >
//        -
//      </button>
//      <span className="px-4">{item.quantity}</span>
//      <button
//        onClick={() => handleIncrement(item._id)}
//        className="px-3 py-1 bg-gray-200 rounded-md"
//      >
//        +
//      </button>
//    </div>
//    <button
//      onClick={() => handleRemove(item._id)}
//      className="text-red-500 hover:text-red-700"
//    >
//      Remove
//    </button>
//  </div>
// ))}

// <div className="text-right text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>
// <button
//  onClick={handleProceed}
//  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
// >
//  Proceed to Checkout
// </button>