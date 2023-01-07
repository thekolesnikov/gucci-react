import styles from './ItemNotFound.module.css';
import { useNavigate } from 'react-router-dom';

function ItemNotFound() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div className={styles.notfound__container}>
            <h1 className={styles.notfound__title}>
                Sorry
                <br />
                This item
            </h1>
            <button className={styles.notfound__button} onClick={goBack}>
                {language.language === 'EN' ? 'Go Back' : 'Назад'}
            </button>
        </div>
    );
}

export default ItemNotFound;
