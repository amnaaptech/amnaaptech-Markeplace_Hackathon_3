import { create } from "zustand";
import { getCartItems } from "@/app/actions/action";
import { Product } from "../../../types/product";

interface CartState {
  cart: Product[];
  updateCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: getCartItems(),

  updateCart: () => {
    const updatedCart = getCartItems();
    set({ cart: updatedCart });
  },
}));

