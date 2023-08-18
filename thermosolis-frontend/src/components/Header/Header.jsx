import React, { useState } from 'react';

// External
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Styles
import styles from './Header.module.scss';

function Header() {
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);

    const toggleServicesDropdown = () => {
        setServicesDropdownOpen(!servicesDropdownOpen);
    };

    const togglePagesDropdown = () => {
        setPagesDropdownOpen(!pagesDropdownOpen);
    };

    const toggleNewsDropdown = () => {
        setNewsDropdownOpen(!newsDropdownOpen);
    };

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <span>Thermosolis</span>
            </div>
            <nav className={styles.menu}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>Home</li>
                    <li className={styles.menuItem} onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                        Services
                        <KeyboardArrowDownIcon />
                        {servicesDropdownOpen && (
                            <div className={styles.dropdown}>
                                <ul className={styles.dropdownList}>
                                    <li className={styles.dropdownItem}>Service 1</li>
                                    <li className={styles.dropdownItem}>Service 2</li>
                                    <li className={styles.dropdownItem}>Service 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={styles.menuItem} onMouseEnter={togglePagesDropdown} onMouseLeave={togglePagesDropdown}>
                        Pages
                        <KeyboardArrowDownIcon />
                        {pagesDropdownOpen && (
                            <div className={styles.dropdown}>
                                <ul className={styles.dropdownList}>
                                    <li className={styles.dropdownItem}>Page 1</li>
                                    <li className={styles.dropdownItem}>Page 2</li>
                                    <li className={styles.dropdownItem}>Page 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={styles.menuItem} onMouseEnter={toggleNewsDropdown} onMouseLeave={toggleNewsDropdown}>
                        News
                        <KeyboardArrowDownIcon />
                        {newsDropdownOpen && (
                            <div className={styles.dropdown}>
                                <ul className={styles.dropdownList}>
                                    <li className={styles.dropdownItem}>News 1</li>
                                    <li className={styles.dropdownItem}>News 2</li>
                                    <li className={styles.dropdownItem}>News 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={styles.menuItem}>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
