import { Link } from 'react-router-dom';

import styles from './MxSection.module.css';
import OneItem from '../../OneItem/OneItem';
import image1 from './img/mx1.png';
import imageBig from './img/mx2.png';
import image2 from './img/mx3.png';

import Swiper from './MxSlider';

function MxSection() {
    return (
        <section className="container">
            <div className={styles.mx}>
                <div className={styles.mx__title}>
                    <p className={styles.mx__title_text}>Gucci MX</p>
                    <Link to="/not-made" className={styles.mx__title_link}>
                        View all
                    </Link>
                </div>
                <Swiper />
            </div>
        </section>
    );
}

export default MxSection;
