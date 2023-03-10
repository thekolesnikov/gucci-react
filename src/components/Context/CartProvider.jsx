import React, { useContext, useState, useEffect } from 'react';
import { getFromLocalStorage } from '../../utils/LocalStorage';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartArr, setCartArr] = useState(
        localStorage.getItem('shoes') ? getFromLocalStorage() : []
    );

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPriceArr = 0;
        cartArr.forEach((item) => {
            if (item.arr.hasOwnProperty('id')) {
                totalPriceArr += item.count * item.arr.price;
            }
        });
        setTotalPrice(totalPriceArr);
    }, [cartArr]);

    const [orderCompletedBadge, setOrderCompletedBadge] = useState(false);

    return (
        <CartContext.Provider
            value={{
                cartArr: cartArr,
                setCartArr: setCartArr,
                totalPrice: totalPrice,
                orderCompletedBadge: orderCompletedBadge,
                setOrderCompletedBadge: setOrderCompletedBadge,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
