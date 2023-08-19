import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './InlineIconDetails.module.scss';

function InlineIconDetails({ icon, title, description }) {
    return (
        <div className={styles.inlineIconDetails}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.sectionDetails}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>

    );
}

InlineIconDetails.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default InlineIconDetails;
