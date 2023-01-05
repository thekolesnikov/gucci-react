import styles from './GiftsSection.module.css';
import image1 from './img/gift1.png';
import image2 from './img/gift2.png';
import image3 from './img/gift3.png';
import ShowMore from '../../ShowMore/ShowMore';

function GiftsSection() {
    return (
        <section className="container">
            <div className={styles.gifts}>
                <div className={styles.gifts__description}>
                    <div className={styles.gifts__description_title}>
                        Gucci gifts
                    </div>
                    <div className={styles.gifts__description_text}>
                        In the Gucci Gift universe, wishes become reality in the
                        shape of dream-like objects. Shopping for yourself or
                        someone special, choose from selection of gifts.
                    </div>
                </div>
                <div className={styles.gifts__description_label}>
                    <ShowMore />
                </div>
                <div className={styles.gifts__images}>
                    <img src={image1} alt="gift" />
                    <img src={image2} alt="gift" />
                    <img src={image3} alt="gift" />
                </div>
            </div>
        </section>
    );
}

export default GiftsSection;
