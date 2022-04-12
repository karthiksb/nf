import React from "react";
import "./biosection.css";
import face from "./face.png";
import roadmap from "./roadmap.png";
import road from "./road.png";
import flex1 from "./flex1.png";
import flex2 from "./flex2.png";
import dist1 from "./dist.png";
import dist2 from "./dist2.png";
import rights from "./rights.png";

import teamlogo from "./teamlogo.svg";
import Faq from "./Faq";

function Biosection() {
  return (
    <div className="biosection">
      <div className="distribution">
        <h1>DISTRIBUTION</h1>
        <img src={dist2} alt="distribution" />
        <img src={dist1} alt="distribution" />
      </div>
      <div className="roadmap" id="roadmap">
        <h1>ROADMAP</h1>
        <img className="horizontal" src={road} alt="roadmap" />
        <img className="verical" src={roadmap} alt="roadmap" />
      </div>

      <div className="benefit">
        <h1>HOLDERS' BENEFIT</h1>
        <div className="benefit-flex">
          <div className="flex1">
            <img src={flex1} alt="flex1" />
            <h2>
              RAFFLE TICKET airdrop to holders, to win a 3D AVATAR in the
              metaverse
            </h2>
          </div>
          <div className="flex2">
            <img src={flex2} alt="flex1" />
            <h2>ACCESS to Joan Cornellà's physical and virtual exhibition</h2>
          </div>
        </div>
      </div>
      <div className="rights">
        <img src={rights} alt="rights" />
        <div className="rights-content">
          <h2>
            EXCLUSIVE PURCHASING RIGHTS to <br></br>Joan Cornellà's physical &
            digital artworks
          </h2>
          <p>Incl. Toys, Sculptures, Paintings and NFTs</p>
          <p></p>
        </div>
      </div>
      <div className="artistbio">
        <h1>ARTIST'S BIO</h1>
        <img src={face} alt="" />
      </div>
      <div className="biocontent">
        <p>
          Joan Cornellà Vázquez (born 1981, Barcelona) is a Spanish cartoonist
          and illustrator known for using powerful black humour in his iconic
          artwork and comics. Cornellà's creations are light-hearted and playful
          on the surface, featuring a cheerful palette and figures with generic
          grins. Upon deeper contemplation, however, his works communicate a
          potent, astute and nuanced satire on the nature of human existence.
          Poking fun at sensitive and taboo topics with a fluid hand and minimal
          visual clues, Cornellà cuts to the core of the unnerving essence of
          our times. With over eight million followers on social media, Cornellà
          is highly-regarded on the international stage. His works have graced
          the art scenes from Hong Kong, Tokyo, Seoul and Beijing to London,
          Paris and New York. With a simple visual language and cheerful
          palette, Cornellà uses satire to comment on the bleak side of human
          nature, creating works that are honest, entertaining and stimulating.
        </p>
      </div>

      <div className="Team">
        <h1>TEAM</h1>

        <div className="Team-content">
          <div className="Team-content-image">
            <img src={teamlogo} alt="team logo" />
          </div>
          <div className="Team-content-text">
            <p>
              Creative and digital collectible expert. With a 20+ years
              understanding of the impact of art, FWENCLUB collaborates with
              artists and brands to capture previously unthinkable
              opportunities.<br></br> From physical, to now digital
              collectibles, FWENCLUB creates art that can traverse between both
              worlds, and shape a new digital culture. Dropped “People In The
              Place They Love” by Yusuke Hanai NFT collection in FEB 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biosection;
