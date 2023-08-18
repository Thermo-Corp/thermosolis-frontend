import React from "react";
import PropTypes from 'prop-types';

// External
import { Button as MuiButton } from "@mui/material";

// Styles
import styles from "./Button.module.scss";

function Button({ variant = 'text', children, ...props }) {

    return (
        <MuiButton className={styles.button} variant={variant} {...props}>
            {children}
        </MuiButton>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']).isRequired,
    // Add other prop types here if needed
};
export default Button;