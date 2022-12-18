import React from "react";
import "./style.css";
import {
  FaInstagram,
  FaSpotify,
  FaEnvelope,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.spotify && (
          <li>
            <a href={socialprofils.spotify}>
              <FaSpotify />
            </a>
          </li>
        )}
      {socialprofils.instagram && (
        <li>
          <a href={socialprofils.instagram}>
            <FaInstagram />
          </a>
        </li>
      )}
      {socialprofils.instagram && (
          <li>
            <a href="mailto:nsd.prov@gmail.com">
              <FaEnvelope />
            </a>
          </li>
        )}
        
      </ul>
      <p>Connect With Us</p>
    </div>
  );
};
