import styles from './styles.module.css';

export const ProjectCard = ({ location, size, bedrooms, suites, bathrooms, parking_spaces }) => {
    return (
        <div className={styles.card}>
            <div className={styles.preview}>
                <p className={styles.title}>Casa de praia</p>
            </div>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <img className={styles.icon} src="https://img.icons8.com/android/512/place-marker.png" alt="Localização" />
                        </td>
                        <td>
                            <img className={styles.icon} src="https://img.icons8.com/ios-glyphs/512/expand.png" alt="Tamanho" />
                        </td>
                        <td>
                            <img className={styles.icon} src="https://img.icons8.com/ios-glyphs/512/bedroom.png" alt="Quartos" />
                        </td>
                        <td>
                            <img className={styles.icon} src="https://img.icons8.com/external-victoruler-solid-victoruler/512/external-toilet-furniture-and-home-decor-vol1-victoruler-solid-victoruler.png" alt="Banheiros" />
                        </td>
                        <td>
                            <img className={styles.icon} src="https://img.icons8.com/ios-glyphs/512/car.png" alt="Estacionamento" />
                        </td>
                    </tr>
                    <tr>
                        <td>{location}</td>
                        <td>{size}</td>
                        <td>{bedrooms}<div className={styles.suites}>{(suites === 0) ? "": (suites + " suíte(s)")}</div></td>
                        <td>{bathrooms}</td>
                        <td>{parking_spaces}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}