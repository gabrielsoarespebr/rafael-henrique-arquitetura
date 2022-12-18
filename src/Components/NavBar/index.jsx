import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const NavBar = () => {
    return (
        <nav>
            <Link to={`/`}>Início</Link>
            <Link to={`/projetos`}>Projetos</Link>
            <Link to={`/contato`}>Contato</Link>
        </nav>
    )
}