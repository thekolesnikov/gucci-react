import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footer}>
                    <ul className={styles.footer__category}>
                        Help
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">
                                Shipping Services
                            </Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">Contact Us</Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">Careers</Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">FAQs</Link>
                        </li>
                    </ul>
                    <ul className={styles.footer__category}>
                        The company
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">About Gucci</Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">Gucci Garden</Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">
                                Gucci Equilibrium
                            </Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">
                                Code of Ethics
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.footer__category}>
                        Rights
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">Legal</Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">
                                Privacy & Cookie Policy
                            </Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">
                                Corporate Info
                            </Link>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">Product Care</Link>
                        </li>
                    </ul>
                    <ul className={styles.footer__category}>
                        Find us on
                        <li className={styles.footer__catagory_item}>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/GUCCI/"
                            >
                                Facebook
                            </a>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <a target="_blank" href="https://twitter.com/gucci">
                                Twitter
                            </a>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/gucci/"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UCo6fjlKg6GuCmEMeqYbGJng"
                            >
                                YouTube
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.footer__category}>
                        Subscribe
                        <li className={styles.footer__catagory_item}>
                            <form>
                                <input
                                    className={styles.footer__category_input}
                                    placeholder="Email"
                                    type="email"
                                />
                                <button type="submit"></button>
                            </form>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">
                                Subscription options
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.footer__category}>
                        Store locator
                        <li className={styles.footer__catagory_item}>
                            <form>
                                <input
                                    className={styles.footer__category_input}
                                    placeholder="City, Region, Country"
                                    type="text"
                                />
                                <button type="submit"></button>
                            </form>
                        </li>
                        <li className={styles.footer__catagory_item}>
                            <Link to="/gucci-react/not-made">Stores map</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
