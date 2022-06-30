import { Comp } from "./components/Comp";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import test1 from './audiofiles/test1.mp3'
import test2 from './audiofiles/Ludwig van Beethoven_ Ode an die Freude_Ode to Joy 1.mp3'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination,autoplay } from "swiper";
import me from './components/Database'

function App() {
  const handleAudio = (myMusic) => {
    if (myMusic) {
      console.log("playing",myMusic)
    }
    else {
      console.log("not playing")
    }
  }
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2,
          disableOnInteraction: false,
        }}
        navigation={true}
        centeredSlides={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {me.map((single) => {
          return (
            <SwiperSlide className="main-slider">
              <Comp datas={single} playButton = {handleAudio} />
            </SwiperSlide>
          );
        })}
      </Swiper>

    </>
  );
}

export default App;
