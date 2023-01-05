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
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Exquisite Gucci
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Gucci Valigeria
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                The North Face X Gucci
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Gucci Run
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Bags
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Messenger Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Carry-On Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Belt Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Small Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Briefcases
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Pouches
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Tote Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Duffle Bags
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Gucci Valigeria
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Trolley
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        clothing
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Coats
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Outerwear
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Leather
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Jackets
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Suits
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Trousers & Shorts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Denim
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Shirts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Knitwear
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Sweatshirts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                The Men's Edit
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Shoes
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Trainers
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Loafers & Moccasins
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Driver
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Slippers
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Slides & Sandals
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Lace Up Shoes
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Boots & Ankle Boots
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Wallets & small Accessories
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Bi-fold Wallets
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Long & Zip Around Wallets
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Card Holders & Coin Cases
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Money Clips
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Keyrings & Keycases
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Tech Accessories
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__subcategory}>
                    <ul className={styles.header_title}>
                        Accessories
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Belts
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Jewellery & Watches
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                The North Face X Gucci
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Eyewear
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Ties
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Scarves
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
                                Socks
                            </Link>
                        </li>
                        <li className={styles.header_subtitle}>
                            <Link onClick={() => setSubMenu(false)} to="/shoes">
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
