import React, { createContext, useContext, useEffect, useState } from "react";
import cartService from "../service/cart.service";
import { useAuthContext } from "./auth";
import { removeUser, setUSer } from "../State/slice/cartSlice";
import { useDispatch } from "react-redux";
import { json } from "react-router-dom";

const initialCartDetails = {
  cartData: [],
  updateCart: () => {},
  emptyCart: () => {},
};

const cartContext = createContext(initialCartDetails);

export const CartWrapper = ({ children }) => {
    const dispatch=useDispatch()
  const authContext = useAuthContext();
  const [cartData, setCartData] = useState([]);

  const emptyCart = () => {
    setCartData([]);
    console.log("cart is emptry")
    dispatch(removeUser(""))
    
  };

  const updateCart = (updatedCartList) => {
    if (updatedCartList) {
      setCartData(updatedCartList);
      console.log("updated cart list is there")
    } else if (authContext.user.id) {
      cartService.getList(authContext.user.id).then((res) => {
        setCartData(res)
        res.forEach(element => {
            console.log(element)
            dispatch(setUSer(element))
        });
        // console.log(res)
    });
      console.log("authcontext here")
      
    }
  };

  useEffect(() => {
    updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authContext.user.id]);

  const value = {
    cartData,
    emptyCart,
    updateCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(cartContext);
};