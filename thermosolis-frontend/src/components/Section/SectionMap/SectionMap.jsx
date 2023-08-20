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
                        <span className={styles.title}>Company Address</span>
                        <span className={styles.addresse}>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</span>
                    </div>
                </RectangleContainer>

                <ContactDetails
                    title="Company Phone"
                    details={["+1 800 123 4567", "+1 800 123 4567"]}
                    muiIcon={<LocalPhoneIcon />}
                    iconStyle={{ background: "var(--secondary-color)" }}
                    type="phone"
                />

                <ContactDetails
                    title="Company Email"
                    details={["example@gmail.com", "example@gmail.com"]}
                    muiIcon={<TextsmsIcon />}
                    iconStyle={{ background: "#001ED3" }}
                    type="email"
                />

            </div>
        </div>
    );
}

export default SectionMap;