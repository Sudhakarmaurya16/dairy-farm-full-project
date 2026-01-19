import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Initial State
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("samrat_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("samrat_orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // 2. Save Cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("samrat_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 3. Save Orders to LocalStorage
  useEffect(() => {
    localStorage.setItem("samrat_orders", JSON.stringify(orders));
  }, [orders]);

  // --- ✅ FIX 1: ADD TO CART (Handle _id) ---
  const addToCart = (product) => {
    setCartItems((prev) => {
      // Check both _id (Database) and id (Static)
      const productId = product._id || product.id;

      const isItemInCart = prev.find(
        (item) => (item._id || item.id) === productId,
      );

      if (isItemInCart) {
        // Increment quantity if exists
        return prev.map((item) =>
          (item._id || item.id) === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Add new item if not exists
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // --- ✅ FIX 2: REMOVE FROM CART (Handle _id) ---
  const removeFromCart = (idToRemove) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        const itemId = item._id || item.id; // Match correct ID

        if (itemId === idToRemove) {
          if (item.quantity === 1) return acc; // Remove if qty is 1
          return [...acc, { ...item, quantity: item.quantity - 1 }]; // Decrease qty
        }
        return [...acc, item];
      }, []),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("samrat_cart");
  };

  const saveOrder = (orderDetails) => {
    setOrders((prev) => [orderDetails, ...prev]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        removeFromCart,
        clearCart,
        saveOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
