import styles from './PurchasePage.module.css';
import { useCart } from '../Context/CartProvider';
import plus from '../../img/plus.svg';
import minus from '../../img/minus.svg';

function PurchasePage() {
    const cart = useCart();

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
                    // setRemovedBadge(true);
                    // setTimeout(() => setRemovedBadge(false), 2000);
                    return cart.setCartArr([...cart.cartArr]);
                }
            });
        }
    }

    return (
        <section className="container">
            <div className={styles.purchase__page}>
                <div className={styles.purchase__leftside}>
                    <div className={styles.purchase__details}>
                        <form className={styles.purchase__details_form}>
                            <div className={styles.purchase__details_title}>
                                Details
                            </div>
                            <div className={styles.purchase__inputs}>
                                <input
                                    placeholder="Name"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="Last Name"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="Country"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="City"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="Zip"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="Phone"
                                    className={styles.purchase__input}
                                ></input>
                            </div>

                            <div className={styles.purchase__details_title}>
                                PAYMENT METHOD
                            </div>
                            <div className={styles.payment__methods}>
                                <div className={styles.payment__method_card}>
                                    Card
                                </div>
                                <div className={styles.payment__method_paypal}>
                                    PayPal / ApplePay / GooglePay
                                </div>
                            </div>
                            <div className={styles.purchase__inputs}>
                                <input
                                    placeholder="Holder Name"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="Card Number"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="Dates"
                                    className={styles.purchase__input}
                                ></input>
                                <input
                                    placeholder="CVV"
                                    className={styles.purchase__input}
                                ></input>
                            </div>
                            <button
                                className={styles.payment__button}
                                type="submit"
                            >
                                Pay now
                            </button>
                            <label className={styles.payment__checkbox}>
                                <input type="checkbox" />
                                Terms and conditions
                            </label>
                        </form>
                    </div>
                </div>
                <div className={styles.purchase__checkout}>
                    <div className={styles.purchase__details_title}>
                        Checkout
                    </div>
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
                                                    styles.cart__item_info_rightside
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.cart__item_price
                                                    }
                                                >
                                                    £
                                                    {item.arr.price *
                                                        item.count}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.purchase__total}>
                        <div className={styles.purchase__total_string}>
                            <div className={styles.purchase__total_text}>
                                Total price + VAT
                            </div>
                            <div className={styles.purchase__total_count}>
                                £ {cart.totalPrice}
                            </div>
                        </div>
                        <div className={styles.purchase__total_string}>
                            <div className={styles.purchase__total_text}>
                                Discount
                            </div>
                            <div className={styles.purchase__total_count}>
                                £ 0.00
                            </div>
                        </div>
                        <div className={styles.purchase__total_string}>
                            <div className={styles.purchase__total_text}>
                                Total Price
                            </div>
                            <div className={styles.purchase__total_count}>
                                £ {cart.totalPrice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PurchasePage;
