import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import CartPreview from '../CartSection/CartPreview/CartPreview';
import HeaderSubMenu from './HeaderSubMenu';
import logo from './img/logo.png';
import burger from './img/Burger.svg';
import burgerClose from './img/BurgerClose.svg';
import burgerArrow from './img/burgerArrow.svg';
import favorite from './img/favorite.svg';
import cartImg from './img/cart.svg';
import user from './img/user.svg';
import styles from './Header.module.css';
import { useModal } from '../Context/CartPreviewProvider';
import { useCart } from '../Context/CartProvider';
import {
    addToLocalStorage,
    getFromLocalStorage,
} from '../../utils/LocalStorage';
import UniversalCartBadge from '../UniversalCartBadge/UniversalCartBadge';

export const windowInnerWidth = window.innerWidth;

function Header() {
    const [subMenu, setSubMenu] = useState(false);
    const modal = useModal();
    const cart = useCart();
    useEffect(() => {
        addToLocalStorage(cart.cartArr);
    }, [cart.cartArr]);

    // Burger
    const [burgerActive, setburgerActive] = useState(false);

    function openMenu() {
        burgerActive ? setburgerActive(false) : setburgerActive(true);
        !burgerActive
            ? document.body.classList.add('hidden')
            : document.body.classList.remove('hidden');
    }

    const [subMenu1, setSubMenu1] = useState(false);
    const [subMenu2, setSubMenu2] = useState(false);
    const [subMenu3, setSubMenu3] = useState(false);
    const [subMenu4, setSubMenu4] = useState(false);
    const [subMenu5, setSubMenu5] = useState(false);
    const [subMenu6, setSubMenu6] = useState(false);
    const [subMenu7, setSubMenu7] = useState(false);
    const [subMenu8, setSubMenu8] = useState(false);
    const [subMenu9, setSubMenu9] = useState(false);
    const [subMenu10, setSubMenu10] = useState(false);
    const [subMenu11, setSubMenu11] = useState(false);

    return (
        <>
            <header>
                <div className={cn('container', styles.header)}>
                    <Link to="/" className={styles.header__logo}>
                        <img src={logo} alt="" />
                    </Link>
                    <nav
                        onMouseEnter={() => {
                            setSubMenu(true);
                        }}
                        onMouseLeave={() => {
                            setSubMenu(false);
                        }}
                        className={styles.header__nav}
                    >
                        <div className={styles.header__categories}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                Adidas x Gucci
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                New
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                Hendbags
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                Women
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                Men
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                MX
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                Children
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={cn(
                                    styles.header__category,
                                    styles.header__category_mobile
                                )}
                            >
                                Jewellery & Watches
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
                            >
                                Beauty
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={cn(
                                    styles.header__category,
                                    styles.header__category_mobile
                                )}
                            >
                                Decot & Lifestyle
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={cn(
                                    styles.header__category,
                                    styles.header__category_mobile
                                )}
                            >
                                Gifts
                            </Link>
                        </div>
                        {subMenu && (
                            <HeaderSubMenu
                                setSubMenu={setSubMenu}
                                onMouseEnter={() => {
                                    setSubMenu(true);
                                }}
                                onMouseLeave={() => {
                                    setSubMenu(false);
                                }}
                            />
                        )}
                    </nav>
                    <div className={styles.header__rightside}>
                        <img
                            src={user}
                            alt="User Office"
                            className={styles.header__user}
                        ></img>
                        <img
                            src={favorite}
                            alt="Favorite"
                            className={styles.header__favorite}
                        ></img>
                        <button
                            onClick={() => {
                                modal.setModalActive(true);
                                setburgerActive(false);
                                document.body.classList.add('hidden');
                            }}
                            className={styles.header__cart}
                        >
                            <img src={cartImg} alt="cart"></img>
                            {cart.cartArr.length !== 0 && (
                                <div className={styles.cart__badge}>
                                    {cart.cartArr.length}
                                </div>
                            )}
                        </button>
                        <button
                            className={styles.header__burger}
                            onClick={openMenu}
                        >
                            <img
                                src={burgerActive ? burgerClose : burger}
                                alt="burger"
                            />
                        </button>
                    </div>
                </div>
                {burgerActive ? (
                    <div className={styles.header__categories_mobile}>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Adidas x Gucci
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu1
                                            ? setSubMenu1(false)
                                            : setSubMenu1(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu1 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu1 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Exquisite Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Valigeria
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            The North Face X Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Run
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Hendbags
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu2
                                            ? setSubMenu2(false)
                                            : setSubMenu2(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu2 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu2 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Messenger Bags
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Carry-On Bags
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Belt Bags
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Small Bags
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Briefcases
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Pouches
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Tote Bags
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Duffle Bags
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    New
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu3
                                            ? setSubMenu3(false)
                                            : setSubMenu3(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu3 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu3 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Coats
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Outerwear
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Leather
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Jackets
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Trousers & Shorts
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Suits
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Denim
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Women
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu4
                                            ? setSubMenu4(false)
                                            : setSubMenu4(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu4 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu4 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Coats
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Outerwear
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Leather
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Run
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Men
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu5
                                            ? setSubMenu5(false)
                                            : setSubMenu5(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu5 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu5 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Suits
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Trousers & Shorts
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Denim
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Shirts
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Knitwear
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Sweatshirts
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Shoes
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu6
                                            ? setSubMenu6(false)
                                            : setSubMenu6(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu6 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu6 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Trainers
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Loafers & Moccasins
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Driver
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Slippers
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Slides & Sandals
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Lace Up Shoes
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Boots & Ankle Boots
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Children
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu7
                                            ? setSubMenu7(false)
                                            : setSubMenu7(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu7 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu7 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Exquisite Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Valigeria
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            The North Face X Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Run
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Jewellery & Watches
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu8
                                            ? setSubMenu8(false)
                                            : setSubMenu8(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu8 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu8 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Bi-fold Wallets
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Long & Zip Around Wallets
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Money Clips
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Card Holders & Coin Cases
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Keyrings & Keycases
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Tech Accessories
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Beauty
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu9
                                            ? setSubMenu9(false)
                                            : setSubMenu9(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu9 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu9 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Exquisite Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Valigeria
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            The North Face X Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Run
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Decot & Lifestyle
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu10
                                            ? setSubMenu10(false)
                                            : setSubMenu10(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu10 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu10 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Belts
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Jewellery & Watches
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Eyewear
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Ties
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Scarves
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Socks
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Hats & Gloves
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.header__category_section}>
                            <div className={styles.header__category_row}>
                                <Link
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    to="/shoes"
                                    className={styles.header__category}
                                >
                                    Gifts
                                </Link>
                                <button
                                    onClick={() =>
                                        subMenu11
                                            ? setSubMenu11(false)
                                            : setSubMenu11(true)
                                    }
                                    className={styles.burger__arrow}
                                >
                                    <img
                                        className={
                                            subMenu11 ? styles.arrow_rotate : ''
                                        }
                                        src={burgerArrow}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {subMenu11 ? (
                                <div className={styles.header__subcategory}>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Exquisite Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Valigeria
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            The North Face X Gucci
                                        </Link>
                                    </li>
                                    <li className={styles.header_subtitle}>
                                        <Link
                                            onClick={() => {
                                                setburgerActive(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            to="/shoes"
                                        >
                                            Gucci Run
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <CartPreview />
            </header>
            {cart.orderCompletedBadge ? (
                <UniversalCartBadge
                    text="Thanks for your order. We'are contacting you soon."
                    color="#47c977"
                />
            ) : (
                ''
            )}
        </>
    );
}

export default Header;
