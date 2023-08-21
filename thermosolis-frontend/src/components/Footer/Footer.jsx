import React from 'react';

// External
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Components
import QuickLinks from '../Links/QuickLinks/QuickLinks';

// Styles
import styles from './Footer.module.scss';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.leftContainer}>
                <div className={styles.companyInfos}>
                    <span className={styles.logo}>Thermosolis</span>

                    <div className={styles.phoneContainer}>
                        <span className={styles.title}>Appelez-nous</span>
                        <a className={styles.phone} href="tel:+33 6 60 59 98 35">+33 6 60 59 98 35</a>
                    </div>
                    <div className={styles.socialMedia}>
                        <TwitterIcon className={styles.icon} />
                        <FacebookIcon className={styles.icon} />
                        <LinkedInIcon className={styles.icon} />
                        <InstagramIcon className={styles.icon} />
                    </div>

                    <span className={styles.slogan}>Créons ensemble un espace où le confort devient réalité.</span>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.footerMenu}>
                    <QuickLinks
                        title="Quick Links"
                        links={[
                            { title: "Home", href: "/" },
                            { title: "About Us", href: "/about-us" },
                            { title: "Services", href: "/services" },
                            { title: "Contact Us", href: "/contact-us" }
                        ]}
                    />

                    <QuickLinks
                        title="Clients Support"
                        links={[
                            { title: "FAQ", href: "/faq" },
                            { title: "Terms of Use", href: "/terms-of-use" },
                            { title: "Privacy Policy", href: "/privacy-policy" },
                            { title: "Sitemap", href: "/sitemap" },
                            { title: "Clients Testimonials", href: "/clients-testimonials" }
                        ]}
                    />
                    <div className={styles.footerContact}>
                        <span className={styles.title}>Contactez-nous</span>
                        <span className={styles.subtitle}>Thermosolis</span>
                        <span className={styles.address}>203 Rue de la Rive, 42320 La Grand-Croix</span>
                        <a className={styles.phone} href="tel:+33 6 60 59 98 35">+33 6 60 59 98 35</a>
                        <a className={styles.email} href="contact@thermosolis.fr">contact@thermosolis.fr</a>
                    </div>
                </div>
                <span className={styles.copyright}>© 2023 Thermosolis. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
