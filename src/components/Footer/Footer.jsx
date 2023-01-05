import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className="container">
            <div className={styles.footer}>
                <ul className={styles.footer__category}>
                    Help
                    <li className={styles.footer__catagory_item}>
                        <Link>Shipping Services</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Contact Us</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Careers</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>FAQs</Link>
                    </li>
                </ul>
                <ul className={styles.footer__category}>
                    The company
                    <li className={styles.footer__catagory_item}>
                        <Link>About Gucci</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Gucci Garden</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Gucci Equilibrium</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Code of Ethics</Link>
                    </li>
                </ul>
                <ul className={styles.footer__category}>
                    Rights
                    <li className={styles.footer__catagory_item}>
                        <Link>Legal</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Privacy & Cookie Policy</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Corporate Info</Link>
                    </li>
                    <li className={styles.footer__catagory_item}>
                        <Link>Product Care</Link>
                    </li>
                </ul>
                <ul className={styles.footer__category}>
                    Find us on
                    <li className={styles.footer__catagory_item}>Facebook</li>
                    <li className={styles.footer__catagory_item}>Twitter</li>
                    <li className={styles.footer__catagory_item}>Instagram</li>
                    <li className={styles.footer__catagory_item}>YouTube</li>
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
                        <Link>Subscription options</Link>
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
                        <Link>Stores map</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
