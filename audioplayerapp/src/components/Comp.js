import React, { useRef, useState } from "react";
import {
  FaAngleUp,
  FaHeart,
  FaRegHeart,
  FaSpotify,
  FaYoutube,
  FaShare,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles.css";
import { Pagination, Navigation } from "swiper";
import { Slide } from "./Slide";
import aud from "../audiofiles/test1.mp3";
import { FaPlayCircle, FaItunesNote } from "react-icons/fa";
import up from "./up.png";
import b1 from "./Asset 1.png";
import b2 from "./Asset 2.png";
import b3 from "./Asset 3.png";
import b4 from "./Asset 4.png";
import b5 from "./Asset 5.png";
import { Similiar } from "./Similiar";

export const Comp = (props) => {
  const [slide, setSlide] = useState(false);
  const [heart, setHeart] = useState(false);
  const [pla, setPlay] = useState(true);
  const [lyricsPage, setlyricsPage] = useState(false);

  return (
    <>
      <div className="each-slide">
        <div
          className="full-lyrics"
          style={
            lyricsPage
              ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }
              : {
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                }
          }
        >
          <p
            id="style-4"
            className="fl dsdx"
            onClick={() =>
              lyricsPage ? setlyricsPage(false) : setlyricsPage(true)
            }
          >
            {props.datas.lyrics}
          </p>
        </div>
        <div className="upper-side">
          <div className="social-items">
            {props.datas.spotify ? (
              <div className="social spotify">
                <p className="spot">Listen on Spotify</p>
                <FaSpotify />
              </div>
            ) : null}
            {props.datas.youtube ? (
              <div className="social youtube">
                <p className="spot l">Listen on youtube</p>
                <FaYoutube />
              </div>
            ) : null}
          </div>
          <div className="aditional-buttons">
            <FaShare id="dsc" />
          </div>

          <div className="circle-icon">
            <img src={props.datas.icon} />
          </div>
          <div className="circle-ovarlay">
            <img src={up} />
          </div>
        </div>
        <div
          className="cover"
          style={
            !slide
              ? { transform: "translateY(130px)" }
              : { transform: "translateY(260px)" }
          }
        >
          <div className="down-side">
            <div className="controls">
              {heart ? (
                <FaRegHeart
                  onClick={() => (heart ? setHeart(false) : setHeart(true))}
                  id="ds"
                />
              ) : (
                <FaHeart
                  onClick={() => (heart ? setHeart(false) : setHeart(true))}
                  id="ds"
                />
              )}
              <img src={b2} className="left s" />
              <img
                src={pla ? b1 : b5}
                className="play-btn"
                onClick={() => (pla ? setPlay(false) : setPlay(true))}
              />
              <img src={b2} className="right s" />
              <img src={b3} className="dsx" />
            </div>
            <div
              className="toggler-icon"
              onClick={() => (slide ? setSlide(!slide) : setSlide(true))}
            >
              <FaAngleUp
                style={
                  !slide
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0)" }
                }
              />
            </div>
            <div className="lyrics-box">
              <p className="title">{props.datas.name}</p>
              <div className="line"></div>
              <p
                id="style-4"
                onClick={() =>
                  lyricsPage ? setlyricsPage(false) : setlyricsPage(true)
                }
              >
                {!props.datas.lyrics ? (
                  <FaItunesNote id="note" />
                ) : (
                  props.datas.lyrics
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="similiars">
          {props.datas.similiars.length == 0 ? null : (
            <p className="dsk">You may also like</p>
          )}
          <div className="sim-slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper_2"
            >
              {props.datas.similiars.map((single) => {
                return (
                  <SwiperSlide className="each">
                    <img src={single} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
