"use client";

import React from "react";
import PropTypes from "prop-types";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

WorkSliderBtns.propTypes = {
  containerStyles: PropTypes.string.isRequired,
  btnStyles: PropTypes.string.isRequired,
  iconsStyles: PropTypes.string.isRequired,
};

export default WorkSliderBtns;
