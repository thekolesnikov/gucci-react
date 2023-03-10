import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './CartPreview.module.css';
import { useCart } from '../../Context/CartProvider';
import { useModal } from '../../Context/CartPreviewProvider';
import close from './../../../img/Close.svg';
import plus from './../../../img/plus.svg';
import minus from './../../../img/minus.svg';
import UniversalCartBadge from '../../UniversalCartBadge/UniversalCartBadge';

function CartPreview() {
    const cart = useCart();
    const modal = useModal();

    const [badgeActive, setBadgeActive] = useState(false);
    function displayCartBadge() {
        setBadgeActive(true);
        setTimeout(() => setBadgeActive(false), 3000);
    }

    function plusQty(item) {
        cart.setCartArr(
            cart.cartArr.map((i) => {
                if (i.arr.id === item.arr.id) {
                    return { ...i, count: ++i.count };
                } else {
                    return i;
                }
            })
        );
    }

    function minusQty(item) {
        if (item.count > 1) {
            cart.setCartArr(
                cart.cartArr.map((i) => {
                    if (i.arr.id === item.arr.id) {
                        return { ...i, count: --i.count };
                    } else {
                        return i;
                    }
                })
            );
        } else {
            cart.cartArr.map((i) => {
                if (i.arr.id === item.arr.id) {
                    cart.cartArr.splice(
                        cart.cartArr.findIndex(
                            (elem) => i.arr.id === elem.arr.id
                        ),
                        1
                    );
                    displayCartBadge();
                    return cart.setCartArr([...cart.cartArr]);
                }
            });
        }
    }

    function removeItemFromCart(item) {
        cart.cartArr.map((i) => {
            if (i.arr.id === item.arr.id) {
                cart.cartArr.splice(
                    cart.cartArr.findIndex((elem) => i.arr.id === elem.arr.id),
                    1
                );
                displayCartBadge();
                return cart.setCartArr([...cart.cartArr]);
            }
        });
    }

    return (
        <div
            onClick={() => {
                modal.setModalActive(false);
                document.body.classList.remove('hidden');
            }}
            className={cn(
                styles.cart__background,
                modal.modalActive ? styles.active : ''
            )}
        >
            <div onClick={(e) => e.stopPropagation()} className={styles.cart}>
                <div className={styles.cart__title}>Your bag</div>
                <div className={styles.cart__items}>
                    {cart.cartArr.length === 0 && (
                        <div className={styles.cart__empty}>
                            Ohhh
                            <br />
                            Your cart is empty!!!
                        </div>
                    )}
                    {cart.cartArr.map((item) => {
                        return (
                            <div
                                key={item.arr.id}
                                className={styles.cart__item}
                            >
                                <div className={styles.cart__item_body}>
                                    <div className={styles.cart__item_img}>
                                        <img src={item.arr.img} alt="" />
                                    </div>
                                    <div className={styles.cart__item_info}>
                                        <div
                                            className={
                                                styles.cart__item_info_side
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.cart__item_name
                                                }
                                            >
                                                {item.arr.name}
                                            </div>
                                            <div
                                                className={
                                                    styles.cart__item_quantity
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        minusQty(item)
                                                    }
                                                    className={
                                                        styles.cart__minus
                                                    }
                                                >
                                                    <img
                                                        src={minus}
                                                        alt="minus"
                                                    />
                                                </button>
                                                <div
                                                    className={
                                                        styles.cart__item_quantity_count
                                                    }
                                                >
                                                    {item.count}
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        plusQty(item)
                                                    }
                                                    className={
                                                        styles.cart__plus
                                                    }
                                                >
                                                    <img
                                                        src={plus}
                                                        alt="plus"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.cart__item_info_side
                                            }
                                        >
                                            <button
                                                onClick={() => {
                                                    removeItemFromCart(item);
                                                }}
                                                className={
                                                    styles.cart__item_exit
                                                }
                                            >
                                                <img src={close} alt="" />
                                            </button>
                                            <div
                                                className={
                                                    styles.cart__item_price
                                                }
                                            >
                                                ?? {item.arr.price * item.count}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.cart__footer}>
                    <div className={styles.cart__total}>
                        <div className={styles.cart__total_title}>Total</div>
                        <div className={styles.cart__total_summ}>
                            ?? {cart.totalPrice}
                        </div>
                    </div>
                    <div className={styles.cart__buttons}>
                        <button
                            onClick={() => {
                                modal.setModalActive(false);
                                document.body.classList.remove('hidden');
                            }}
                            className={styles.cart__button_pay}
                        >
                            <Link to="/gucci-react/purchase">PAY NOW</Link>
                        </button>
                        <button
                            onClick={() => {
                                modal.setModalActive(false);
                                document.body.classList.remove('hidden');
                            }}
                            className={styles.cart__button_continue}
                        >
                            Continue shopping
                        </button>
                    </div>
                </div>
                {badgeActive ? (
                    <UniversalCartBadge
                        text="Item was removed from Cart"
                        color="#da5353"
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default CartPreview;
