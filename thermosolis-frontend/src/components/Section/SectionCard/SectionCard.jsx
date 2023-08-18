import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './SectionCard.module.scss';

function SectionCard({ icon, title, description }) {
    return (
        <div className={styles.sectionCard}>
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

SectionCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SectionCard;
