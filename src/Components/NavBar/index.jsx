import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Início</Link>
                </li>
                <li>
                    <Link to={`projetos`}>Projetos</Link>
                </li>
                <li>
                    <Link to={`contato`}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}