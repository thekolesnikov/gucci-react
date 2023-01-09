import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './ItemSection.module.css';
import arrow from '../../img/ArrowFilter.svg';
import OneItem from '../OneItem/OneItem';
import { useCart } from '../Context/CartProvider';
import UniversalCartBadge from '../UniversalCartBadge/UniversalCartBadge';

function ItemSection({ shoesCatalogue, setShoesCatalogue }) {
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                'https://63b2de5b5e490925c5244e4b.mockapi.io/items'
            );
            const json = await data.json();
            setShoesCatalogue(json);
        };
        fetchData();
    }, []);

    const cart = useCart();
    const count = 1;

    const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
    const colors = ['white', 'black', 'brown', 'green', 'orange'];
    const params = useParams();
    const arr = shoesCatalogue.find((item) => item.id == params.id);

    const [sizeActive, setSizeActive] = useState('');
    const [colorActive, setColorActive] = useState('');
    const [detailsActive, setDetailsActive] = useState(false);
    const [sizeBadge, setSizeBadge] = useState(false);
    const [colorBadge, setColorBadge] = useState(false);

    function addToCart() {
        if (colorActive && sizeActive) {
            if (cart.cartArr.find((item) => item.arr.id == params.id)) {
                cart.setCartArr(
                    cart.cartArr.map((i) => {
                        if (i.arr.id == params.id) {
                            return { ...i, count: i.count + 1 };
                        } else {
                            return i;
                        }
                    })
                );
            } else {
                cart.setCartArr([
                    ...cart.cartArr,
                    { arr, sizeActive, colorActive, count },
                ]);
            }
            setSizeBadge(false);
            setColorBadge(false);
            displayCartBadge();
        } else {
            sizeActive ? setSizeBadge(false) : setSizeBadge(true);
            colorActive ? setColorBadge(false) : setColorBadge(true);
        }
    }

    const [badgeActive, setBadgeActive] = useState(false);
    function displayCartBadge() {
        setBadgeActive(true);
        setTimeout(() => setBadgeActive(false), 3000);
    }

    return (
        <section className="container">
            <div className={styles.item}>
                <div className={styles.item__img}>
                    <img src={arr ? arr.img : ''} alt="Item img" />
                </div>
                <div className={styles.item__info}>
                    <div className={styles.item__info_header}>
                        <div className={styles.item__info_name}>
                            {arr ? arr.name : ''}
                        </div>
                        <div className={styles.item__info_price}>
                            £ {arr ? arr.price : ''}
                        </div>
                    </div>
                    <div className={styles.item__info_desription}>
                        A mainstay in Gucci history since the '50s, the classic
                        Horsebit loafer bridges the past to the present. A
                        homage to the House's heritage rooted in the equestrian
                        world, the emblematic shape is reworked in a
                        contemporary, elongated silhouette. The shoe is crafted
                        from blue leather and completed with the green and red
                        Web.
                    </div>
                    <div className={styles.item__cart}>
                        <div className={styles.item__cart_size}>
                            <div className={styles.item__cart__title}>
                                SELECT SIZE
                            </div>
                            <div className={styles.item__cart_size_buttons}>
                                {sizes.map((item) => {
                                    return (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                setSizeActive(item);
                                                setSizeBadge(false);
                                            }}
                                            className={cn(
                                                styles.item__cart_size_button,
                                                sizeActive === item
                                                    ? styles.item__cart_button_active
                                                    : ''
                                            )}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                            {sizeBadge && (
                                <div className={styles.item__cart_size_badge}>
                                    Please, choose your size
                                </div>
                            )}
                        </div>
                        <div className={styles.item__cart_color}>
                            <div className={styles.item__cart__title}>
                                SELECT COLOR
                            </div>
                            <div className={styles.item__cart_size_buttons}>
                                {colors.map((item) => {
                                    return (
                                        <button
                                            key={item}
                                            onClick={() => {
                                                setColorActive(item);
                                                setColorBadge(false);
                                            }}
                                            className={cn(
                                                colorActive === item
                                                    ? styles.item__cart_button_active_red
                                                    : '',
                                                `item__cart_color_button_${item}`
                                            )}
                                        ></button>
                                    );
                                })}
                            </div>
                            {colorBadge && (
                                <div className={styles.item__cart_size_badge}>
                                    Please, choose any color
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => addToCart()}
                            className={styles.item__cart_button}
                        >
                            ADD TO CART
                        </button>
                        <div className={styles.item__cart_details}>
                            <div className={styles.item__cart__title}>
                                More details
                            </div>
                            <button
                                onClick={() => {
                                    detailsActive
                                        ? setDetailsActive(false)
                                        : setDetailsActive(true);
                                }}
                                className={
                                    detailsActive
                                        ? styles.item__cart_details_arrow_active
                                        : styles.item__cart_details_arrow
                                }
                            >
                                <img src={arrow} alt="" />
                            </button>
                            <ul
                                className={cn(
                                    detailsActive
                                        ? styles.item__details
                                        : styles.none
                                )}
                            >
                                <li className={styles.item__detail}>
                                    Indigo blue lether
                                </li>
                                <li className={styles.item__detail}>Men's</li>
                                <li className={styles.item__detail}>
                                    Green and red Web
                                </li>
                                <li className={styles.item__detail}>
                                    Square too
                                </li>
                                <li className={styles.item__detail}>
                                    Horsebit detail
                                </li>
                                <li className={styles.item__detail}>
                                    Leather sole
                                </li>
                                <li className={styles.item__detail}>
                                    Made in Italy
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {badgeActive ? (
                <UniversalCartBadge
                    text="Item was added to Cart"
                    color="#47c977"
                />
            ) : (
                ''
            )}
            <div className={styles.moreitem}>
                <div className={styles.moreitem__title}>MORE shoes</div>
                <div className={styles.moreitem__content}>
                    {shoesCatalogue.slice(12, 16).map((item) => {
                        return (
                            <OneItem
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ItemSection;
