import { ProjectsList } from '../../Components/ProjectsList';
import styles from './styles.module.css';

export const Projetos = () => {
    return (
        <div className={styles.container}>
            <main>Main content</main>
            <ProjectsList/>
            
        </div>
    )
}