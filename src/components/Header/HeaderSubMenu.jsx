import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function HeaderSubMenu({ setSubMenu }) {
    return (
        <div className={styles.header__submenu}>
            <div className={styles.header__subcategories}>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Higlights
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Exquisite Gucci
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Gucci Valigeria
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                The North Face X Gucci
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Gucci Run
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Bags
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Messenger Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Carry-On Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Belt Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Small Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Briefcases
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Pouches
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Tote Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Duffle Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Gucci Valigeria
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Trolley
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        clothing
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Coats
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Outerwear
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Leather
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Jackets
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Suits
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Trousers & Shorts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Denim
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Shirts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Knitwear
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Sweatshirts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                The Men's Edit
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Shoes
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Trainers
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Loafers & Moccasins
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Driver
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Slippers
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Slides & Sandals
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Lace Up Shoes
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Boots & Ankle Boots
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Wallets & small Accessories
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Bi-fold Wallets
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Long & Zip Around Wallets
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Card Holders & Coin Cases
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Money Clips
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Keyrings & Keycases
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Tech Accessories
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Accessories
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Belts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Jewellery & Watches
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                The North Face X Gucci
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Eyewear
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Ties
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Scarves
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Socks
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link
                                onClick={() => setSubMenu(false)}
                                to="/gucci-react/shoes"
                            >
                                Hats & Gloves
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderSubMenu;
