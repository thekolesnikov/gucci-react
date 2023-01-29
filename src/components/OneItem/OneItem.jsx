import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from './OneItem.module.css';

function OneItem({ id, img, img2, name, price }) {
    return (
        <div key={id} className={styles.item}>
            <Link to={`/gucci-react/shoes/${id}`} className={styles.item_link}>
                <p className={styles.item_label}>New</p>
                <LazyLoadImage
                    src={img}
                    placeholderSrc={img2}
                    alt={name}
                    effect="blur"
                />
            </Link>
            <div className={styles.item_description}>
                <p className={styles.item_name}>{name}</p>
                <p className={styles.item_price}>£ {price}</p>
            </div>
        </div>
    );
}

export default OneItem;
