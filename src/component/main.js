import React from 'react'
import "../styles.scss";
import Roadmap from './Roadmap';
import Royalsection from './Royalsection';
import Story from './Story';
import Team from './Team';
import shape14 from "../img/shape-14.1a644797.png";
import shape15 from "../img/shape-15.3aea3d93.png";
import MintRoyal from './Royalmodal';

const Main = () => {
  return (
    <div>
      <MintRoyal />
      <img src={shape14} alt="" className="shape-14" />
      <Royalsection />
      <Story />
      <img src={shape15} alt="" className="shape-15" />
      <Roadmap />
      <Team />
    </div>
  )
}

export default Main;