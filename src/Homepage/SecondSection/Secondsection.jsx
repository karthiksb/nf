import React from "react";
import "./secondsection.css";
import guest from "./guest.png";
import loc from "./loc.png";
import building from "./building.png";
import btn from "./btn.png";
import artwork from "./artwork.png";
function Secondsection() {
  return (
    <div className="secondsection">
      <div className="auction">
        <h1>#1 IS ON AUCTION NOW!</h1>
        <h2>MOAR #1</h2>
        <p className="moartext">
          Legendary MOAR#1 is now auctioning off on OPENSEA!<br></br>
          This suited man with a gun is usually seen on the artist’s notable
          works, which makes it the most valuable and sought-after pfp from the
          5,555 NFT collection undoubtedly. Winner of this auction gets
          airdropped token of identical legendary 3D avatar in phase 2 as well
          as a painted canvas (H273 x W220mm). All proceeds will go to "MOAR"
          future DAO development.
        </p>
      </div>
      <div className="bidnowbtn">
        <h1>BID NOW ON</h1>
        <img src={btn} alt="" />
      </div>

      <section className="moarguest" id="about">
        <div className="buildingimg">
          <img src={building} alt="building" />
        </div>
        <div className="guestcontent">
          <img src={guest} alt="guest" />
          <p>
            This is the story of a mansion in the metaverse called “MOAR”. It is
            a building where 5,555 creatures with their souls minted with the
            ERC721 blockchain as NFTs. While the world is in lockdown due to the
            invasion of aliens, guests staying at the MOAR, including humans,
            zombies and cyborgs, live peacefully together. Each is unique,
            hand-drawn by Spanish artist Joan Cornellà using over 180 unique
            attributes.<br></br> MOAR is a rather unusual mansion where you can
            find shops, games and virtual exhibitions. Let us witness one of the
            greatest art and metaverse experiences together.
          </p>
          <div className="location">
            <img src={loc} alt="location" />
            <h1>0 Moar Street, METAVERSE</h1>
          </div>
        </div>
      </section>

      <section className="Artworks">
        <h1>50 LEGENDARY ARTWORKS</h1>
        <img src={artwork} alt="artworks" />
      </section>
    </div>
  );
}

export default Secondsection;
