import React, { useEffect, useState } from "react";

// External
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useSwipeable } from "react-swipeable";

// Styles
import styles from "./SectionTestimonials.module.scss";

function SectionTestimonials({ route, name, title, testimonials }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    // Define swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const nextIndex = (activeIndex + 1) % testimonials.length;
            setActiveIndex(nextIndex);
        },
        onSwipedRight: () => {
            const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
            setActiveIndex(prevIndex);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % testimonials.length;
            setActiveIndex(nextIndex);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, testimonials.length]);

    const calculateSliderTransform = () => {
        return `translateX(calc(-${100 * activeIndex}%))`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>
                    <a href={route} className={styles.name}>{name}</a>
                </p>
                <span className={styles.title}>{title}</span>
            </div>

            <div className={styles.testimonialsContainer}>
                <img className={styles.testimonialsImage} src={process.env.PUBLIC_URL + "/images/testimonials.png"} alt="Testimonials" />
                <div className={styles.testimonialsOverlay}>

                    <div className={styles.testimonialsSlider} {...swipeHandlers}>
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.description}
                                className={`${styles.content} ${index === activeIndex ? styles.active : ""}`}
                                style={{
                                    transform: calculateSliderTransform(),
                                    transition: "transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                                }}
                            >
                                <div className={styles.testimonial}>
                                    <FormatQuoteIcon className={styles.icon} />
                                    <span className={styles.description}>{testimonial.description}</span>
                                    <span className={styles.name}>{testimonial.name}</span>
                                    <span className={styles.title}>{testimonial.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.dots}>
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.dot} ${index === activeIndex ? styles.active : ""}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTestimonials;