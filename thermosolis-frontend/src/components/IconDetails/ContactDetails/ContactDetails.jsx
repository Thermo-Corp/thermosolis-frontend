import React, { cloneElement } from "react";
import PropTypes from 'prop-types';

// Styles
import styles from "./ContactDetails.module.scss";

function ContactDetails({ title, details, muiIcon, iconStyle, type }) {
    return (
        <div className={styles.companyPhone}>
            {cloneElement(muiIcon, { className: `${styles.icon} ${styles.customIcon}`, style: { ...iconStyle } })}
            <div className={styles.phone}>
                <span className={styles.title}>{title}</span>
                {details.map((detail, _) => (
                    type === "email" ?
                        <a key={detail} className={styles.email} href={`mailto:${detail}`}>{detail}</a> :
                        <span key={detail} className={styles.number}>{detail}</span>
                ))}
            </div>
        </div >
    );
}

export default ContactDetails;

ContactDetails.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired,
    muiIcon: PropTypes.element.isRequired,
    iconStyle: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['phone', 'email']).isRequired,
};