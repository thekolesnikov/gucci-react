import styles from './ItemNotFound.module.css';
import { useNavigate } from 'react-router-dom';
import image from './reсonstruction.png';

function ItemNotFound() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div className={styles.notfound__container}>
            <img className={styles.notfound__image} src={image} alt="" />
            <button className={styles.notfound__button} onClick={goBack}>
                Go Back
            </button>
        </div>
    );
}

export default ItemNotFound;
