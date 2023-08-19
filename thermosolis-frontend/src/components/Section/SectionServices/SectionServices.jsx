import React from "react";

// External
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components
import Button from "../../Button/Button";

// Styles
import styles from "./SectionServices.module.scss";

function SectionServices({ services, backgroundImage }) {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}></div>

            {services.map((service, _) => (
                <div key={service.route} className={styles.service}>
                    <img src={service.icon} alt={service.title} />
                    <div className={styles.serviceDetails}>
                        <span className={styles.title}>{service.title}</span>
                        <p className={styles.description}>{service.description}</p>
                        <Button className={styles.seeMore} variant="contained" route={service.route}><ArrowRightAltIcon /></Button>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default SectionServices;