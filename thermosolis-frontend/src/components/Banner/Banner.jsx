import React from "react";

// External
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components
import Button from "../Button/Button";

// Styles
import styles from "./Banner.module.scss";

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title}>Construction solution<br />
                    <span className={styles.subtitle}>for everyone</span>
                </h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id possimus beatae ipsum blanditiis assumenda, sint odit eos amet magni explicabo laborum culpa asperiores nostrum. Odit eveniet distinctio necessitatibus possimus. Asperiores minus aliquam tempore, ea a, ducimus illo atque culpa non, tempora cumque fugiat! Quia minima facere officiis ea voluptatem iusto illum asperiores. Laborum at provident voluptatum ipsum itaque! Beatae iure aliquid placeat ipsum atque aspernatur sequi ipsam est facilis sed omnis minima ducimus</p>
                <Button variant="contained" >
                    Learn More
                    <ArrowRightAltIcon />
                </Button>
            </div>
        </div>
    );
}

export default Banner;