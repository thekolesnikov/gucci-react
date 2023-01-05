import { Link } from 'react-router-dom';

import styles from './OneItem.module.css';

function OneItem({ id, img, name, price }) {
    return (
        <div key={id} className={styles.item}>
            <Link to={`/shoes/${id}`} className={styles.item_link}>
                <p className={styles.item_label}>New</p>
                <img src={img} alt={name} />
            </Link>
            <div className={styles.item_description}>
                <p className={styles.item_name}>{name}</p>
                <p className={styles.item_price}>£ {price}</p>
            </div>
        </div>
    );
}

export default OneItem;
