import React from "react";

// Styles
import styles from "./SquareContainer.module.scss";

function Square({ children, dimension = '150px', backgroundColor = '#fff' }) {
    return (
        <div className={styles.square} style={{ width: dimension, height: dimension, backgroundColor: backgroundColor }}>
            {children}
        </div>
    );
}

export default Square;