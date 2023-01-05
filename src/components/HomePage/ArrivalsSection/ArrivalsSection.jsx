import { Link } from 'react-router-dom';
import styles from './ArrivalsSection.module.css';

import OneItem from '../../OneItem/OneItem';

import item1 from './img/item1.png';
import item2 from './img/item2.png';
import item3 from './img/item3.png';
import item4 from './img/item4.png';

function ArrivalsSection() {
    return (
        <section className="container">
            <div className={styles.arrivals}>
                <div className={styles.arrivals__title}>
                    <div className={styles.arrivals__title_text}>
                        New arrivals
                    </div>
                    <Link className={styles.arrivals__title_link}>
                        View all
                    </Link>
                </div>
                <div className={styles.arrivals__items}>
                    <OneItem
                        img={item1}
                        name="Men's 'Gucci' bag"
                        price="£ 2120"
                    />
                    <OneItem
                        img={item2}
                        name="GG canvas goose down jacket"
                        price="£ 2370"
                    />
                    <OneItem
                        img={item3}
                        name="GM 'Gucci' boots"
                        price="£ 1770"
                    />
                    <OneItem
                        img={item4}
                        name="Men's 'GGH T-Shirt"
                        price="£ 270"
                    />
                </div>
            </div>
        </section>
    );
}

export default ArrivalsSection;
