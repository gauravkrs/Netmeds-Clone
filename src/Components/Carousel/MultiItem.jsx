import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { multiData } from "./Data";
import ShowMultiItems from "./ShowMultiItems";
import styles from "./carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} ${styles.smallLeft}`}
            onClick={onClick}
            style={{ border: "none" }}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#555", fontSize: "20px" }}
            />
        </div>
    );
};

// Next Button for carousel

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.smallRight}`} onClick={onClick}>
            <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#555", fontSize: "20px" }}
            />
        </div>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerPadding: "170px",
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            },
        },
    ],
};

const MultiItem = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.headingFlex}>

            <h1 className={styles.heading}>Trending Products</h1>
            <p>View All</p>
            </div>
            <Slider {...carouselProperties} className={styles.slider} >
                    {multiData.map((product) => {
                        return <ShowMultiItems key={product.id} {...product} />;
                    })}
            </Slider>
        </div>
    );
};

export default MultiItem;
