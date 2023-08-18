import React from 'react';

// External
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        </BottomNavigation>
    );
};

export default Footer;
