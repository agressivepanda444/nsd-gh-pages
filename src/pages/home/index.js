import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import ChannelSurf from "../../assets/videos/channelsurf.mp4";

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
          <video class="Desktop" autoPlay loop muted >
            <source src={ChannelSurf} type="video/mp4"></source>
          </video>
          <video class="Desktop" autoPlay loop muted >
            <source src={ChannelSurf} type="video/mp4"></source>
          </video>
          <video class="Desktop" autoPlay loop muted >
            <source src={ChannelSurf} type="video/mp4"></source>
          </video>
          <video class="Desktop" autoPlay loop muted >
            <source src={ChannelSurf} type="video/mp4"></source>
          </video>
        </div>
      </section>
    </HelmetProvider>
  );
};
