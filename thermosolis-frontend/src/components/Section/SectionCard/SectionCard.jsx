import React from "react";

// External
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components
import Button from "../../Button/Button";

// Styles
import styles from "./SectionCard.module.scss";

function SectionCard({ title, subtitle, description, image, route, name }) {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>
                    <a href={route} className={styles.name}>{name}</a>
                </p>

                <span className={styles.title}>{title}</span>
                <p className={styles.subtitle}>{subtitle}</p>
                <span className={styles.description}>{description}</span>

                <br />

                <Button variant="contained" style={{ marginTop: "50px" }} route={route} >
                    Learn More
                    <ArrowRightAltIcon />
                </Button>
            </div>

            <div className={styles.imageContainer}>
                {image}
            </div>
        </div>
    );
}


export default SectionCard;
