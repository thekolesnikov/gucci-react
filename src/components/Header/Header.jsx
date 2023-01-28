import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import CartPreview from '../CartSection/CartPreview/CartPreview';
import HeaderSubMenu from './HeaderSubMenu';
import logo from './img/logo.png';
import burger from './img/Burger.svg';
import burgerClose from './img/BurgerClose.svg';
import burgerArrow from './img/burgerArrow.svg';
import cartImg from './img/cart.svg';
import user from './img/user.svg';
import google from './img/google.svg';
import spinner from './img/spinner.gif';
import styles from './Header.module.css';
import { useModal } from '../Context/CartPreviewProvider';
import { useCart } from '../Context/CartProvider';
import { addToLocalStorage } from '../../utils/LocalStorage';
import UniversalCartBadge from '../UniversalCartBadge/UniversalCartBadge';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { setUser, removeUser } from '../../redux/slice/userSlice';

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

    // userOffice
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [signUp, setSignUp] = useState(false);

    const auth = getAuth();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    function registerUser(email, password, password2) {
        if (password !== password2) {
            setLoginSpinner(false);
            setAlertPassword("Passwords don't matches");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    })
                );
                setLoginSpinner(false);
                setOpenModal(false);
                setEmail('');
                setPassword('');
                setPassword2('');
            })
            .catch((error) => {
                setLoginSpinner(false);
                if (error.code === 'auth/email-already-in-use') {
                    setAlertEmail(
                        'This email is already registered in our system!'
                    );
                }
            });
    }

    const [loginSpinner, setLoginSpinner] = useState(false);

    function loginUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    })
                );
                setLoginSpinner(false);
                setOpenModal(false);
                setEmail('');
                setPassword('');
                setPassword2('');
            })
            .catch((error) => {
                setLoginSpinner(false);
                if (error.code === 'auth/user-not-found') {
                    setAlertEmail('User not found');
                } else if (error.code === 'auth/wrong-password') {
                    setAlertPassword('Wrong password');
                }
            });
    }

    // Google Auth
    const googleProvider = new GoogleAuthProvider();

    function loginWithGoogle(auth, provider) {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    })
                );
                setLoginSpinner(false);
                setOpenModal(false);
            })
            .catch((error) => {
                setLoginSpinner(false);
            });
    }

    // Email forgotten

    const [emailForgotModal, setEmailForgotModal] = useState(false);
    const [recoveryEmail, setRecoveryEmail] = useState(false);
    function sendPasswordRecovery(auth, email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {})
            .catch((error) => {
                const errorCode = error.code;
            });
    }

    // Validation
    const [alertEmail, setAlertEmail] = useState('');
    const re =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    function validateEmail() {
        if (!re.test(String(email).toLowerCase())) {
            setAlertEmail('Invalid email address');
        } else {
            setAlertEmail('');
        }
    }

    const [alertPassword, setAlertPassword] = useState('');

    return (
        <>
            <header>
                <div className={cn('container', styles.header)}>
                    <Link to="/gucci-react" className={styles.header__logo}>
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
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                Adidas x Gucci
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                New
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                Hendbags
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                Women
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                Men
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                MX
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                Children
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={cn(
                                    styles.header__category,
                                    styles.header__category_mobile
                                )}
                            >
                                Jewellery & Watches
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={styles.header__category}
                            >
                                Beauty
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                                className={cn(
                                    styles.header__category,
                                    styles.header__category_mobile
                                )}
                            >
                                Decot & Lifestyle
                            </Link>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
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
                        <button
                            onClick={() => {
                                setOpenModal(!openModal);
                                setburgerActive(false);
                                document.body.classList.add('hidden');
                            }}
                            className={styles.header__user}
                        >
                            {userState.isAuth ? (
                                <div className={styles.user__auth_name}>
                                    {userState.email}
                                </div>
                            ) : (
                                <img src={user} alt="User Office"></img>
                            )}
                        </button>

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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                    to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
                                            to="/gucci-react/shoes"
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
            <div
                onClick={() => {
                    setOpenModal(false);
                    document.body.classList.remove('hidden');
                    setEmailForgotModal(false);
                }}
                className={cn(
                    styles.cart__background,
                    openModal ? styles.active : ''
                )}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.cart__user_modal}
                >
                    {loginSpinner && (
                        <div className={styles.spinner}>
                            <img src={spinner} alt="" />
                        </div>
                    )}
                    <button
                        onClick={() => {
                            setOpenModal(false);
                            document.body.classList.remove('hidden');
                            setEmailForgotModal(false);
                        }}
                        className={styles.cart__user_close}
                    >
                        <img src={burgerClose} alt="" />
                    </button>
                    {userState.isAuth ? (
                        <div className={styles.cart__user_info}>
                            {userState.email}
                            <button
                                onClick={() => {
                                    dispatch(removeUser());
                                    setSignUp(false);
                                }}
                            >
                                Log out
                            </button>
                        </div>
                    ) : !emailForgotModal ? (
                        <div>
                            <div className={styles.cart__user_title}>
                                {signUp ? 'Sign up' : 'Log in'}
                            </div>
                            {signUp ? (
                                <form
                                    className={styles.cart__form}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        validateEmail();
                                        dispatch(
                                            registerUser(
                                                email,
                                                password,
                                                password2
                                            )
                                        );
                                    }}
                                >
                                    <div className={styles.cart__user_email}>
                                        <span
                                            data-tooltip={alertEmail}
                                            data-flow={
                                                windowInnerWidth > 670
                                                    ? 'right'
                                                    : 'top'
                                            }
                                        >
                                            <input
                                                value={email}
                                                onChange={(e) => {
                                                    setAlertEmail('');
                                                    setEmail(e.target.value);
                                                }}
                                                placeholder="Login"
                                                className={cn(
                                                    styles.cart__user_input,
                                                    alertEmail
                                                        ? styles.cart__user_input_wrong
                                                        : ''
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className={styles.cart__user_password}>
                                        <span
                                            data-tooltip={alertPassword}
                                            data-flow={
                                                windowInnerWidth > 670
                                                    ? 'right'
                                                    : 'top'
                                            }
                                        >
                                            <input
                                                value={password}
                                                onChange={(e) => {
                                                    setAlertPassword('');
                                                    setPassword(e.target.value);
                                                }}
                                                placeholder="Password"
                                                className={cn(
                                                    styles.cart__user_input,
                                                    alertPassword
                                                        ? styles.cart__user_input_wrong
                                                        : ''
                                                )}
                                                type="password"
                                            />
                                        </span>
                                    </div>
                                    <div className={styles.cart__user_repeat}>
                                        <input
                                            value={password2}
                                            onChange={(e) => {
                                                setAlertPassword('');
                                                setPassword2(e.target.value);
                                            }}
                                            placeholder="Repeat password"
                                            className={cn(
                                                styles.cart__user_input,
                                                alertPassword
                                                    ? styles.cart__user_input_wrong
                                                    : ''
                                            )}
                                            type="password"
                                        />
                                    </div>

                                    <button
                                        disabled={loginSpinner && true}
                                        onClick={() => setLoginSpinner(true)}
                                        className={cn(
                                            styles.cart__user_login,
                                            loginSpinner
                                                ? styles.button__disabled
                                                : ''
                                        )}
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            ) : (
                                <form className={styles.cart__form}>
                                    <div className={styles.cart__user_email}>
                                        <span
                                            data-tooltip={alertEmail}
                                            data-flow={
                                                windowInnerWidth > 670
                                                    ? 'right'
                                                    : 'top'
                                            }
                                        >
                                            <input
                                                value={email}
                                                onChange={(e) => {
                                                    setAlertEmail('');
                                                    setEmail(e.target.value);
                                                }}
                                                placeholder="Login"
                                                className={cn(
                                                    styles.cart__user_input,
                                                    alertEmail
                                                        ? styles.cart__user_input_wrong
                                                        : ''
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className={styles.cart__user_password}>
                                        <span
                                            data-tooltip={alertPassword}
                                            data-flow={
                                                windowInnerWidth > 670
                                                    ? 'right'
                                                    : 'top'
                                            }
                                        >
                                            <input
                                                value={password}
                                                onChange={(e) => {
                                                    setAlertPassword('');
                                                    setPassword(e.target.value);
                                                }}
                                                placeholder="Password"
                                                className={cn(
                                                    styles.cart__user_input,
                                                    alertPassword
                                                        ? styles.cart__user_input_wrong
                                                        : ''
                                                )}
                                                type="password"
                                            />
                                        </span>

                                        <button
                                            disabled={loginSpinner && true}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setEmailForgotModal(true);
                                                setAlertEmail('');
                                                setEmail('');
                                                setPassword('');
                                            }}
                                            className={cn(
                                                styles.cart__user_forgot_btn,
                                                loginSpinner
                                                    ? styles.button__disabled
                                                    : ''
                                            )}
                                        >
                                            Forgot password?
                                        </button>
                                    </div>

                                    <button
                                        disabled={loginSpinner && true}
                                        onClick={(e) => {
                                            setLoginSpinner(true);
                                            e.preventDefault();
                                            validateEmail(e);
                                            dispatch(
                                                loginUser(email, password)
                                            );
                                        }}
                                        className={cn(
                                            styles.cart__user_login,
                                            loginSpinner
                                                ? styles.button__disabled
                                                : ''
                                        )}
                                    >
                                        Log in
                                    </button>
                                </form>
                            )}
                            {signUp ? (
                                <button
                                    disabled={loginSpinner && true}
                                    onClick={() => {
                                        setEmail('');
                                        setPassword('');
                                        setPassword2('');
                                        setSignUp(false);
                                        setAlertEmail('');
                                        setAlertPassword('');
                                    }}
                                    className={cn(
                                        styles.cart__user_goback,
                                        loginSpinner
                                            ? styles.button__disabled
                                            : ''
                                    )}
                                >
                                    Back to login page
                                </button>
                            ) : (
                                <>
                                    <button
                                        disabled={loginSpinner && true}
                                        onClick={() => {
                                            setSignUp(true);
                                            setEmail('');
                                            setPassword('');
                                            setAlertEmail('');
                                            setAlertPassword('');
                                        }}
                                        className={cn(
                                            styles.cart__user_login,
                                            styles.cart__user_login_last,
                                            loginSpinner
                                                ? styles.button__disabled
                                                : ''
                                        )}
                                    >
                                        Sign Up
                                    </button>
                                    <div className={styles.cart__login_more}>
                                        <p>Log in using socials:</p>
                                        <button
                                            disabled={loginSpinner && true}
                                            onClick={() => {
                                                setLoginSpinner(true);
                                                loginWithGoogle(
                                                    auth,
                                                    googleProvider
                                                );
                                            }}
                                            className={cn(
                                                styles.cart__login_google,
                                                loginSpinner
                                                    ? styles.button__disabled
                                                    : ''
                                            )}
                                        >
                                            <img src={google} alt="Google" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <>
                            <div className={styles.cart__user_title}>
                                Recovery password
                            </div>
                            <div className={styles.cart__user_email_recovery}>
                                <span
                                    data-tooltip={alertEmail}
                                    data-flow={
                                        windowInnerWidth > 670 ? 'right' : 'top'
                                    }
                                >
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setAlertEmail('');
                                            setEmail(e.target.value);
                                        }}
                                        placeholder="Email"
                                        className={cn(
                                            styles.cart__user_input,
                                            alertEmail
                                                ? styles.cart__user_input_wrong
                                                : ''
                                        )}
                                    />
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    sendPasswordRecovery(auth, email);
                                    setEmailForgotModal(false);
                                    setEmail('');
                                    setRecoveryEmail(true);
                                    setTimeout(() => {
                                        setRecoveryEmail(false);
                                    }, 3000);
                                }}
                                className={cn(
                                    styles.cart__user_login,
                                    styles.cart__user_login_mb
                                )}
                            >
                                Send confirmation email
                            </button>
                            <button
                                onClick={() => {
                                    setEmail('');
                                    setEmailForgotModal(false);
                                    setAlertEmail('');
                                }}
                                className={styles.cart__user_goback}
                            >
                                Back to login page
                            </button>
                        </>
                    )}
                </div>
            </div>

            {recoveryEmail ? (
                <UniversalCartBadge
                    text="Password recovery email has been sent. Please, check your mailbox."
                    color="#47c977"
                />
            ) : (
                ''
            )}
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
