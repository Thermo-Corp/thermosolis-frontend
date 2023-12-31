import React from "react";

// Styles
import styles from "./RectangleContainer.module.scss";

function RectangleContainer({ children, width = '290px', height = '235px', backgroundColor = '#fff', style }) {
    return (
        <div className={styles.square} style={{ width: width, height: height, backgroundColor: backgroundColor, ...style }}>
            {children}
        </div>
    );
}

export default RectangleContainer;