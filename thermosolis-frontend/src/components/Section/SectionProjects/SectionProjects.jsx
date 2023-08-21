import React from "react";

// External
import AddBoxIcon from '@mui/icons-material/AddBox';

// Styles
import styles from "./SectionProjects.module.scss";

function SectionProjects({ title, route, name, projects }) {
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <p>
                    <a href={route} className={styles.name}>{name}</a>
                </p>
                <span className={styles.title}>{title}</span>
            </div>

            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <div key={project.description} className={`${styles.project} ${index === 0 ? styles.bigImage : ''}`}>
                        <div className={styles.projectImage}>
                            <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                        </div>
                        <div className={styles.projectDetails}>
                            <span className={styles.title}>{project.title}</span>
                            <p className={styles.description}>{project.description}</p>
                            <AddBoxIcon className={styles.icon} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionProjects;