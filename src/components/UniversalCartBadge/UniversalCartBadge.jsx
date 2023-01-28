import styles from './UniversalCartBadge.module.css';

function UniversalCartBadge({ text, color }) {
    return (
        <div style={{ backgroundColor: color }} className={styles.badge}>
            {text}
        </div>
    );
}

export default UniversalCartBadge;
