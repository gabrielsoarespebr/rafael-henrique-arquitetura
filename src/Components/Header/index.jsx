import { NavBar } from '../NavBar';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.name}><span className={styles.firstname}>Rafael</span> <span className={styles.secondname}>Henrique</span></h1>
            <NavBar/>
        </header>
    )
}