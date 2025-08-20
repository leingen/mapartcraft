import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import IMG_Wubby from "../images/wubby.png";

class Header extends Component {
  render() {
    const { getLocaleString } = this.props;
    return (
      <div className="header">
        <h3>
          <Link to={`/${![undefined, "en"].includes(this.props.countryCode) ? this.props.countryCode + "/" : ""}faq`}>
            <span className="FAQTextButton">{getLocaleString("FAQ/FAQ")}</span>
          </Link>
          <span> | </span>
          <a href="https://youtu.be/j-4RXPkJKU8" target="_blank" rel="noopener noreferrer">
            {getLocaleString("FAQ/VIDEO-TUTORIAL")}
          </a>
          <span> | </span>
          <a href="https://github.com/leingen/mapartcraft" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span> | </span>
          <a href="https://discord.gg/r7Tuerq" target="_blank" rel="noopener noreferrer">
            2b2t Mapart Discord
          </a>
        </h3>
        <p>
          <div style={{ display: "flex", alignItems: "center" }}>
          <img 
            alt="wubby.png" 
            src={IMG_Wubby} 
            style={{ maxWidth: "120px", marginRight: "20px" }} 
          />
          
          <div>
            <mark><b>I've made changes to the transparency implementation, PLEASE TEST IN CREATIVE BEFORE USING IT FOR REAL.</b></mark> 
            <br />
            <mark><b>It is very likely that Classic/Valley staircasing don't work properly with transparency.</b></mark> 
            <br />
            <mark><b>DM Leingen in Discord if there are any problems.</b></mark> 
          </div>
        </div>
        <br></br>
          {getLocaleString("DESCRIPTION/1")}
          <a href="https://www.reddit.com/r/2b2t/" target="_blank" rel="noopener noreferrer">
            2b2t
          </a>
          {getLocaleString("DESCRIPTION/2")}
          <br></br>
          {getLocaleString("DESCRIPTION/3")}
          <a href="https://redd.it/2yck3f" target="_blank" rel="noopener noreferrer">
            {getLocaleString("DESCRIPTION/4")}
          </a>
          {getLocaleString("DESCRIPTION/5")}
          <br></br>
          {getLocaleString("DESCRIPTION/6")}
          <a href="https://rebane2001.com/mapartcraft" target="_blank" rel="noopener noreferrer">
            MapartCraft
          </a>
          {getLocaleString("DESCRIPTION/7")}
          <a href="https://github.com/leingen/mapartcraft/issues" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {"."}
          <br></br>
          <b>
            {getLocaleString("FAQ/PLEASE-READ-1")}
            <Link to={`/${![undefined, "en"].includes(this.props.countryCode) ? this.props.countryCode + "/" : ""}faq`}>
              <span className="FAQTextButton">{getLocaleString("FAQ/FAQ")}</span>
            </Link>
            {getLocaleString("FAQ/PLEASE-READ-2")}
          </b>
        </p>
      </div>
    );
  }
}

export default Header;
