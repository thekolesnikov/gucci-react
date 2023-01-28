import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './PurchasePage.module.css';
import { useCart } from '../Context/CartProvider';
import plus from '../../img/plus.svg';
import minus from '../../img/minus.svg';
import cn from 'classnames';
import { sendToServer } from '../../utils/SendToServer';

function PurchasePage() {
    const navigate = useNavigate();
    const cart = useCart();
    const methods = ['Card', 'PayPal / ApplePay / GooglePay'];
    const [paymentActive, setPaymentActive] = useState('Card');

    const [nameInput, setNameInput] = useState('');
    const [nameEmpty, setNameEmpty] = useState(false);
    const [lastNameInput, setLastNameInput] = useState('');
    const [lastNameEmpty, setLastNameEmpty] = useState(false);
    const [countyInput, setCountyInput] = useState('');
    const [countyEmpty, setCountyEmpty] = useState(false);
    const [cityInput, setCityInput] = useState('');
    const [cityEmpty, setCityEmpty] = useState(false);
    const [zipInput, setZipInput] = useState('');
    const [zipEmpty, setZipEmpty] = useState(false);
    const [phoneInput, setPhoneInput] = useState('');
    const [phoneEmpty, setPhoneEmpty] = useState(false);
    const [holderInput, setHolderInput] = useState('');
    const [holderEmpty, setHolderEmpty] = useState(false);
    const [cartNuberInput, setCardNumberInput] = useState('');
    const [cartNuberEmpty, setCardNumberEmpty] = useState(false);
    const [datesInput, setDatesInput] = useState('');
    const [datesEmpty, setDatesEmpty] = useState(false);
    const [cvvInput, setCvvInput] = useState('');
    const [cvvEmpty, setCvvEmpty] = useState(false);
    const [cartLengthEmpty, setCartLengthEmpty] = useState(false);

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

                    return cart.setCartArr([...cart.cartArr]);
                }
            });
        }
    }

    let submitArr;

    function clickPayNow(e) {
        e.preventDefault();
        nameInput.trim() === '' ? setNameEmpty(true) : setNameEmpty(false);
        lastNameInput.trim() === ''
            ? setLastNameEmpty(true)
            : setLastNameEmpty(false);
        countyInput.trim() === ''
            ? setCountyEmpty(true)
            : setCountyEmpty(false);
        cityInput.trim() === '' ? setCityEmpty(true) : setCityEmpty(false);
        zipInput.trim() === '' ? setZipEmpty(true) : setZipEmpty(false);
        phoneInput.trim() === '' ? setPhoneEmpty(true) : setPhoneEmpty(false);
        holderInput.trim() === ''
            ? setHolderEmpty(true)
            : setHolderEmpty(false);
        cartNuberInput.trim() === ''
            ? setCardNumberEmpty(true)
            : setCardNumberEmpty(false);
        datesInput.trim() === '' ? setDatesEmpty(true) : setDatesEmpty(false);
        cvvInput.trim() === '' ? setCvvEmpty(true) : setCvvEmpty(false);
        cart.cartArr.length === 0
            ? setCartLengthEmpty(true)
            : setCartLengthEmpty(false);

        if (
            cart.cartArr.length > 0 &&
            nameInput &&
            lastNameInput &&
            countyInput &&
            cityInput &&
            zipInput &&
            phoneInput &&
            holderInput &&
            cartNuberInput &&
            datesInput &&
            cvvInput
        ) {
            submitArr = {
                items: cart.cartArr,
                name: nameInput,
                lastName: lastNameInput,
                country: countyInput,
                city: cityInput,
                zip: zipInput,
                phone: phoneInput,
                holder: holderInput,
                cartNumber: cartNuberInput,
                dates: datesInput,
                cvv: cvvInput,
            };
            sendToServer(submitArr, 'shoes.json');
            setNameInput('');
            setLastNameInput('');
            setCountyInput('');
            setCityInput('');
            setZipInput('');
            setPhoneInput('');
            setHolderInput('');
            setCardNumberInput('');
            setDatesInput('');
            setCvvInput('');
            cart.setOrderCompletedBadge(true);
            setTimeout(() => cart.setOrderCompletedBadge(false), 4000);
            cart.setCartArr([]);
            navigate('/gucci-react/shoes?sortBy=rating');
        }
    }

    return (
        <section className="container">
            <div className={styles.purchase__page}>
                <div className={styles.purchase__leftside}>
                    <div className={styles.purchase__details}>
                        <form
                            onSubmit={(e) => clickPayNow(e)}
                            className={styles.purchase__details_form}
                        >
                            <div className={styles.purchase__details_title}>
                                Details
                            </div>
                            <div className={styles.purchase__inputs}>
                                <div className={styles.purchase__input_section}>
                                    <input
                                        onChange={(e) => {
                                            setNameInput(e.target.value);
                                            setNameEmpty(false);
                                        }}
                                        value={nameInput}
                                        placeholder="Name"
                                        className={
                                            nameEmpty
                                                ? styles.purchase__input_error
                                                : styles.purchase__input
                                        }
                                    ></input>
                                    <div
                                        className={
                                            nameEmpty
                                                ? styles.purchase__unput_error_text
                                                : styles.none
                                        }
                                    >
                                        This fild can't be empty
                                    </div>
                                </div>
                                <div className={styles.purchase__input_section}>
                                    <input
                                        onChange={(e) => {
                                            setLastNameInput(e.target.value);
                                            setLastNameEmpty(false);
                                        }}
                                        value={lastNameInput}
                                        placeholder="Last Name"
                                        className={
                                            lastNameEmpty
                                                ? styles.purchase__input_error
                                                : styles.purchase__input
                                        }
                                    ></input>
                                    <div
                                        className={
                                            lastNameEmpty
                                                ? styles.purchase__unput_error_text
                                                : styles.none
                                        }
                                    >
                                        This fild can't be empty
                                    </div>
                                </div>
                                <div className={styles.purchase__input_section}>
                                    <input
                                        onChange={(e) => {
                                            setCountyInput(e.target.value);
                                            setCountyEmpty(false);
                                        }}
                                        value={countyInput}
                                        placeholder="Country"
                                        className={
                                            countyEmpty
                                                ? styles.purchase__input_error
                                                : styles.purchase__input
                                        }
                                    ></input>
                                    <div
                                        className={
                                            countyEmpty
                                                ? styles.purchase__unput_error_text
                                                : styles.none
                                        }
                                    >
                                        This fild can't be empty
                                    </div>
                                </div>
                                <div className={styles.purchase__input_section}>
                                    <input
                                        onChange={(e) => {
                                            setCityInput(e.target.value);
                                            setCityEmpty(false);
                                        }}
                                        value={cityInput}
                                        placeholder="City"
                                        className={
                                            cityEmpty
                                                ? styles.purchase__input_error
                                                : styles.purchase__input
                                        }
                                    ></input>
                                    <div
                                        className={
                                            cityEmpty
                                                ? styles.purchase__unput_error_text
                                                : styles.none
                                        }
                                    >
                                        This fild can't be empty
                                    </div>
                                </div>
                                <div className={styles.purchase__input_section}>
                                    <input
                                        onChange={(e) => {
                                            setZipInput(e.target.value);
                                            setZipEmpty(false);
                                        }}
                                        value={zipInput}
                                        placeholder="Zip"
                                        className={
                                            zipEmpty
                                                ? styles.purchase__input_error
                                                : styles.purchase__input
                                        }
                                    ></input>
                                    <div
                                        className={
                                            zipEmpty
                                                ? styles.purchase__unput_error_text
                                                : styles.none
                                        }
                                    >
                                        This fild can't be empty
                                    </div>
                                </div>
                                <div className={styles.purchase__input_section}>
                                    <input
                                        onChange={(e) => {
                                            setPhoneInput(e.target.value);
                                            setPhoneEmpty(false);
                                        }}
                                        value={phoneInput}
                                        placeholder="Phone"
                                        className={
                                            phoneEmpty
                                                ? styles.purchase__input_error
                                                : styles.purchase__input
                                        }
                                    ></input>
                                    <div
                                        className={
                                            phoneEmpty
                                                ? styles.purchase__unput_error_text
                                                : styles.none
                                        }
                                    >
                                        This fild can't be empty
                                    </div>
                                </div>
                            </div>

                            <div className={styles.purchase__details_title}>
                                PAYMENT METHOD
                            </div>
                            <div className={styles.payment__methods}>
                                {methods.map((item) => {
                                    return (
                                        <div
                                            onClick={() =>
                                                setPaymentActive(item)
                                            }
                                            key={item}
                                            className={cn(
                                                item === 'Card'
                                                    ? styles.payment__method_card
                                                    : styles.payment__method_paypal,
                                                paymentActive === item
                                                    ? styles.payment__method_active
                                                    : ''
                                            )}
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                            {paymentActive === 'Card' ? (
                                <div className={styles.purchase__inputs}>
                                    <div
                                        className={
                                            styles.purchase__input_section
                                        }
                                    >
                                        <input
                                            onChange={(e) => {
                                                setHolderInput(e.target.value);
                                                setHolderEmpty(false);
                                            }}
                                            value={holderInput}
                                            placeholder="Holder name"
                                            className={
                                                holderEmpty
                                                    ? styles.purchase__input_error
                                                    : styles.purchase__input
                                            }
                                        ></input>
                                        <div
                                            className={
                                                holderEmpty
                                                    ? styles.purchase__unput_error_text
                                                    : styles.none
                                            }
                                        >
                                            This fild can't be empty
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles.purchase__input_section
                                        }
                                    >
                                        <input
                                            onChange={(e) => {
                                                setCardNumberInput(
                                                    e.target.value
                                                );
                                                setCardNumberEmpty(false);
                                            }}
                                            value={cartNuberInput}
                                            placeholder="Card number"
                                            className={
                                                cartNuberEmpty
                                                    ? styles.purchase__input_error
                                                    : styles.purchase__input
                                            }
                                        ></input>
                                        <div
                                            className={
                                                cartNuberEmpty
                                                    ? styles.purchase__unput_error_text
                                                    : styles.none
                                            }
                                        >
                                            This fild can't be empty
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles.purchase__input_section
                                        }
                                    >
                                        <input
                                            onChange={(e) => {
                                                setDatesInput(e.target.value);
                                                setDatesEmpty(false);
                                            }}
                                            value={datesInput}
                                            placeholder="Dates"
                                            className={
                                                datesEmpty
                                                    ? styles.purchase__input_error
                                                    : styles.purchase__input
                                            }
                                        ></input>
                                        <div
                                            className={
                                                datesEmpty
                                                    ? styles.purchase__unput_error_text
                                                    : styles.none
                                            }
                                        >
                                            This fild can't be empty
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles.purchase__input_section
                                        }
                                    >
                                        <input
                                            onChange={(e) => {
                                                setCvvInput(e.target.value);
                                                setCvvEmpty(false);
                                            }}
                                            value={cvvInput}
                                            placeholder="CVV"
                                            className={
                                                cvvEmpty
                                                    ? styles.purchase__input_error
                                                    : styles.purchase__input
                                            }
                                        ></input>
                                        <div
                                            className={
                                                cvvEmpty
                                                    ? styles.purchase__unput_error_text
                                                    : styles.none
                                            }
                                        >
                                            This fild can't be empty
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.purchase__paypal}>
                                    Sorry, currently you can make a purchase
                                    only by card. <br /> Other options under
                                    devepolment
                                </div>
                            )}

                            <button
                                disabled={
                                    paymentActive === 'Card' ? false : true
                                }
                                className={
                                    paymentActive === 'Card'
                                        ? styles.payment__button
                                        : styles.payment__button_inactive
                                }
                                type="submit"
                            >
                                Pay now
                            </button>
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

                        <div
                            className={
                                cartLengthEmpty
                                    ? styles.cart__empty_error
                                    : styles.none
                            }
                        >
                            Your cart can't be empty
                        </div>
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
