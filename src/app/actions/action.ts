"use cnlient"
import { Product } from "../../../types/product";
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove from cart
export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item._id !== productId)
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update quantity
export const updateQuantity = (productId: string, quantity: number) => {
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const productIndex = cart.findIndex(item => item._id === productId)
  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}



// export const getCartItems = () : Product[] => {
//   return JSON.parse(localStorage.getItem('cart') || '[]')
// }

// export default function getCartItems() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const items = localStorage.getItem("cart");
//       setCartItems(items ? JSON.parse(items) : []);
//     }
//   }, []);

//   return cartItems;
// }

export function getCartItems() {
  if (typeof window === "undefined") return []; // Agar SSR hai, toh empty array return kar do

  const items = localStorage.getItem("cart");
  return items ? JSON.parse(items) : [];
}

// Add to wishlist
export function addToWishlist(product: Product) {
  let wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

  // Find the existing product in the wishlist
  const existingProductIndex = wishlist.findIndex((item: Product) => item._id === product._id);

  if (existingProductIndex === -1) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
}

// Get wishlist items
export function getWishlistItems(): Product[] {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
}

// Remove from wishlist
export function removeFromWishlist(productId: string) {
  const wishlist: Product[] = getWishlistItems();
  const updatedWishlist = wishlist.filter(item => item._id !== productId);

  // Store updated wishlist in localStorage
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
}

// Get wishlist count
export function getWishlistCount(): number {
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  return wishlist.length;
}