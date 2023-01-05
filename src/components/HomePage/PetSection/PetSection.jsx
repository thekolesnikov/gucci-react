import styles from './PetSection.module.css';
import ShowMore from '../../ShowMore/ShowMore';
import image1 from './img/Pet1.png';
import image2 from './img/Pet2.png';

function PetSection() {
    return (
        <section className="container">
            <div className={styles.pets}>
                <div className={styles.pets__description}>
                    <div className={styles.pets__description_title}>
                        Gucci pet colleaction
                    </div>
                    <div className={styles.pets__description_text}>
                        Uncovering ever-surprising ways that the House’s codes
                        can be reimagined, the Creative Director presents the
                        new Gucci Pet Collection.
                    </div>
                </div>
                <div className={styles.pets__description_label}>
                    <ShowMore />
                </div>
                <div className={styles.pets__images}>
                    <img src={image1} alt="Pet" />
                    <img src={image2} alt="Pet" />
                </div>
            </div>
        </section>
    );
}

export default PetSection;
