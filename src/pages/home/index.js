import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import HomeVideo1 from "../../assets/videos/nsdwebsitevideo5.mp4";
import HomeVideo2 from "../../assets/videos/nsdwebvid2.mp4";
import HomeVideo3 from "../../assets/videos/nsdwebvid3.mp4";
import HomeVideo4 from "../../assets/videos/nsdwebsite4.mp4";
import HomeVideo1w from "../../assets/videos/nsdwebvid5.webm";
import HomeVideo2w from "../../assets/videos/nsdwebvid2.webm";
import HomeVideo3w from "../../assets/videos/nsdwebvid3.webm";
import HomeVideo4w from "../../assets/videos/nsdwebsite4.webm";

export const Home = () => {
    return (
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            {/* <div dangerouslySetInnerHTML={{
              __html: `
              <video autoplay loop muted >
              <source src="../../assets/videos/channelsurf.mp4" />
              </video>`
              
            }}
            /> */}
            <video class="Desktop"  preload="auto" autoPlay loop muted playsInline >
              <source src={HomeVideo1w} type="video/mp4"></source>
              {/* <source src={HomeVideo1} type="video/mp4"></source> */}
            </video>
            <video class="Desktop"   preload="auto" autoPlay loop muted playsInline>
              <source src={HomeVideo2w} type="video/mp4"></source>
              {/* <source src={HomeVideo2} type="video/mp4"></source> */}
            </video>
            <video class="Desktop"  preload="auto" autoPlay loop muted playsInline >
              <source src={HomeVideo3w} type="video/mp4"></source>
              {/* <source src={HomeVideo3} type="video/mp4"></source> */}
            </video>
            <video class="Desktop"  preload="auto" autoPlay loop muted playsInline>
              <source src={HomeVideo4w} type="video/mp4"></source>
              {/* <source src={HomeVideo4} type="video/mp4"></source> */}
            </video>
          </div>
        </section>
      </HelmetProvider>
    );
  };