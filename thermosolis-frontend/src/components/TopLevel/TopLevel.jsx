import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Styles
import styles from "./TopLevel.module.scss";

function TopLevel() {
    return (
        <div className={styles.topLevel}>
            <div className={styles.link}>
                <span className={styles.linkItem}>Support</span>
                <span className={styles.linkItem}>Partenaires</span>
                <span className={styles.linkItem}>Devis gratuit</span>
            </div>
            <div className={styles.social}>
                <FacebookIcon className={styles.icon} />
                <TwitterIcon className={styles.icon} />
                <InstagramIcon className={styles.icon} />
                <YouTubeIcon className={styles.icon} />
            </div>
        </div>
    );
}

export default TopLevel;