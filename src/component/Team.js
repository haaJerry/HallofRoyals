import React from 'react'
import shape17 from "../img/shape-17.58a722d7.png"
import manAdo from "../img/1.b918d60d.png" ;
import Surrealyst from "../img/2.d6131e49.png";
import Syndicated from "../img/3.f9f0df9f.png";
import Hives from "../img/4.1076d486.png";
import Dreamer from "../img/5.8d11e03f.png";
import Hopkins from "../img/6.50ef08e4.png";


const Team = () => {
  return (

  <section id="team" className="glassy-wrapper x-section mt-60">
    <div className="container x-container position-relative">
      <img src={shape17} alt="" className="shape-17" />
      <h1 id='Team' className="section-title mb-25">Team</h1>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
            <img
              src={manAdo}
              alt=""
              className="team-photo"
            />
            <div className="team-desc mt-10">Man from Ado</div>
            <div className="team-desc">(Product Manager)</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
            <img
              src={Surrealyst}
              alt=""
              className="team-photo"
            />
            <div className="team-desc mt-10">The Surrealyst</div>
            <div className="team-desc">(Product Designer)</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
            <img
              src={Syndicated}
              alt=""
              className="team-photo"
            />
            <div className="team-desc mt-10">Syndicated Art</div>
            <div className="team-desc">(3D Artist)</div>
          </div>
        </div>
      </div>
      <div className="row mt-25">
        <div className="col-sm-6 col-md-4">
          <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
            <img
              src={Hives}
              alt=""
              className="team-photo"
            />
            <div className="team-desc mt-10">King of the Hives</div>
            <div className="team-desc">(Software Engineer)</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
            <img
              src={Dreamer}
              alt=""
              className="team-photo"
            />
            <div className="team-desc mt-10">Ancient Dreamer</div>
            <div className="team-desc">(3D, 2D Artist)</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
            <img
              src={Hopkins}
              alt=""
              className="team-photo"
            />
            <div className="team-desc mt-10">Hopkins</div>
            <div className="team-desc">(AR/VR/Software Dev)</div>
          </div>
        </div>
      </div>
      <p className="text-center mt-30">
        Hall of Royals is a project by Klynox labs - a multinational tech
        company specialized in blockchain development, SaaS, AR and VR
        development, 3D design etc.
      </p>
      <div className="text-center mt-35">
        
      </div>
    </div>
  </section>
 
  )
}

export default Team;