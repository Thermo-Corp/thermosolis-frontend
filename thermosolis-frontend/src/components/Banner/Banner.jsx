import React from "react";

// External
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components
import Button from "../Button/Button";

// Styles
import styles from "./Banner.module.scss";

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title}>Un Habitat Confortable<br />
                    <span className={styles.subtitle}>Simplement</span>
                </h1>
                <p className={styles.description}>
                    Thermosolis, votre partenaire de confiance en plomberie, chauffage, pompes à chaleur, ventilation et climatisation. Nous façonnons le confort sur mesure pour chaque coin de votre environnement. Profitez d'une expertise solide pour des solutions qui apportent bien plus que la chaleur, la fraîcheur et le flux d'air. Découvrez la perfection du confort, pensé pour vous.
                    <br /><br />
                    Créons ensemble un espace où le confort devient réalité.
                </p>
                <Button variant="contained" >
                    En savoir plus &nbsp;
                    <ArrowRightAltIcon />
                </Button>
            </div>
        </div>
    );
}

export default Banner;