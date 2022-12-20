import { ProjectCard } from '../ProjectCard';
import styles from './styles.module.css';

export const ProjectsList = () => {
    return (
        <aside className={styles.sidebar}>
            <ProjectCard
                location="Recife - PE"
                size="217.63m²"
                bedrooms={4}
                suites={1}
                bathrooms={3}
                parking_spaces={2} />
            <ProjectCard
                location="Olinda - PE"
                size="150.63m²"
                bedrooms={2}
                suites={0}
                bathrooms={1}
                parking_spaces={1} />
            <ProjectCard
                location="Recife - PE"
                size="217.63m²"
                bedrooms={4}
                suites={1}
                bathrooms={3}
                parking_spaces={2} />
            <ProjectCard
                location="Recife - PE"
                size="217.63m²"
                bedrooms={4}
                suites={1}
                bathrooms={3}
                parking_spaces={2} />
            <ProjectCard
                location="Recife - PE"
                size="217.63m²"
                bedrooms={4}
                suites={1}
                bathrooms={3}
                parking_spaces={2} />
        </aside>
    )
}