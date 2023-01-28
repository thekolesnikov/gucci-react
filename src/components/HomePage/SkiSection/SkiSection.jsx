import styles from './SkiSection.module.css';
import SkiImageBig from './img/SkiBigImage.png';
import SkiImageSmall from './img/SkiSmallImage.png';
import ShowMore from '../../ShowMore/ShowMore';

function SkiSection() {
    return (
        <section className="container">
            <div className={styles.ski__section}>
                <div className={styles.ski__left}>
                    <img src={SkiImageBig} alt="SkiImageBig" />
                    <div className={styles.ski__title}>APRÈS-SKI</div>
                </div>
                <div className={styles.ski__right}>
                    <img
                        className={styles.ski__image_small}
                        src={SkiImageSmall}
                        alt="SkiImageSmall"
                    />
                </div>
                <div className={styles.showmore}>
                    <ShowMore />
                </div>
            </div>
        </section>
    );
}

export default SkiSection;
