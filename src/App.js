import React from "react";
import Header from "./component/header";
import heroImage from "./Assets/images/image-hero-mobile.png";
import heroImagedesktop from "./Assets/images/image-hero-desktop.png";
import makerIcon from "./Assets/images/client-maker.svg";
import audiopileIcon from "./Assets/images/client-audiophile.svg";
import dataIcon from "./Assets/images/client-databiz.svg";
import meetIcon from "./Assets/images/client-meet.svg";

const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <section className="hero-wrapper">
        <div className="hero-image">
          <img id="mobile" src={heroImage} alt="hero " />
          <img id="desktop" src={heroImagedesktop} alt="hero " />
        </div>
        <div className="hero-content">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matteryour location. Streamline processes,
            create team rituals, and watch productivity soar
          </p>
          <button>Learn more</button>
          <div className="logos">
            <span>
              <img src={dataIcon} alt="dataIcon" />
            </span>
            <span>
              <img src={audiopileIcon} alt="dataIcon" />
            </span>
            <span>
              <img src={meetIcon} alt="dataIcon" />
            </span>
            <span>
              <img src={makerIcon} alt="dataIcon" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
