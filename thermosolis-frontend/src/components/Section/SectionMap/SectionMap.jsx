import React from "react";

// External
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextsmsIcon from '@mui/icons-material/Textsms';

// Components
import RectangleContainer from "../../Container/Square/RectangleContainer";
import ContactDetails from "../../IconDetails/ContactDetails/ContactDetails";

// Styles
import styles from "./SectionMap.module.scss";

function SectionMap({ image }) {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={process.env.PUBLIC_URL + image} alt="Map" />

            <div className={styles.rectangleContainer}>
                <RectangleContainer width="480px" height="285px"
                    style={{
                        borderTop: "7px solid #D2153D",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        top: "-85px",
                    }}
                >
                    <div className={styles.rectangleContent}>
                        <span className={styles.title}>Adresse de l'entreprise</span>
                        <span className={styles.addresse}>203 Rue de la Rive, 42320 La Grand-Croix</span>
                    </div>
                </RectangleContainer>

                <ContactDetails
                    title="Téléphone de l'entreprise"
                    details={["+33 6 60 59 98 35", "+33 X XX XX XX XX"]}
                    muiIcon={<LocalPhoneIcon />}
                    iconStyle={{ background: "var(--secondary-color)" }}
                    type="phone"
                />

                <ContactDetails
                    title="E-mail de l'entreprise"
                    details={["contact@thermosolis.fr", "------@thermosolis.fr"]}
                    muiIcon={<TextsmsIcon />}
                    iconStyle={{ background: "var(--tertiary-color)" }}
                    type="email"
                />

            </div>
        </div>
    );
}

export default SectionMap;