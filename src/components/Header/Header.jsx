import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import CartPreview from '../CartSection/CartPreview/CartPreview';
import HeaderSubMenu from './HeaderSubMenu';
import favorite from './img/favorite.svg';
import cart from './img/cart.svg';
import user from './img/user.svg';
import styles from './Header.module.css';
import { useModal } from '../Context/CartPreviewProvider';
import { useCart } from '../Context/CartProvider';

function Header() {
    const [subMenu, setSubMenu] = useState(false);
    const modal = useModal();
    const cartArr = useCart();
    return (
        <>
            <header>
                <div className={cn('container', styles.header)}>
                    <Link to="/" className={styles.header__logo}>
                        GUCCI
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
                                className={styles.header__category}
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
                                className={styles.header__category}
                            >
                                Decot & Lifestyle
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/shoes"
                                className={styles.header__category}
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
                                document.body.classList.add('hidden');
                            }}
                            className={styles.header__cart}
                        >
                            <img src={cart} alt="cart"></img>
                            {cartArr.cartArr.length !== 0 && (
                                <div className={styles.cart__badge}>
                                    {cartArr.cartArr.length}
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <CartPreview />
            </header>
        </>
    );
}

export default Header;
