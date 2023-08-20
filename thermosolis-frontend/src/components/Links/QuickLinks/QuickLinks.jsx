import React from "react";

// Styles
import styles from "./QuickLinks.module.scss";

function QuickLinks({ title, links }) {
    return (
        <div className={styles.quickLinks}>
            <span className={styles.title}>{title}</span>
            <div className={styles.links}>
                {links.map((link, _) => (
                    <a key={link} className={styles.link} href={link.href}>{link.title}</a>
                ))}
            </div>
        </div>
    );
}

export default QuickLinks;