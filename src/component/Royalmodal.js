import "../styles.scss";
import base4 from "../img/base4.png";
import React from "react";
import { Modal,Button } from "react-bootstrap";
import "./Royalmodal.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-dialog p-componet p-ripple-disabled classic-modal " role="dialog" aria-modal="true" display="flex" 
    >
     
      <Modal.Header closeButton className="p-dialog-header">
        <Modal.Title id="contained-modal-title-vcenter">
        <h4 className="text-center"> Mint a Royal </h4> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-dialog-content">
<div className="pt-15">
     <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center mt-3">
      <div>
        <div className="d-flex align-items-center input-holder">
          <span className="label text-center">Max: 5</span>
          <input type="text" className="form-control" placeholder="Enter Amout" />
        </div>
        <p className="text-center text-black mt-2"> How many Royals do you want to mint?

        </p>
      </div>
      <div>
        <button type="button" className="btn btn-big btn-mute btn-cap big-resp ml-10">"Connect Wallet" </button>
      </div>

     </div>
   
        </div>
      </Modal.Body>
     
    </Modal>
  );
}

const MintRoyal =() => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    
      <section id='mint' className='glassy-wrapper x-section mt-120'>
                <h1 className='section-title'>Get a Royal</h1>
                <div className='mt-20'>
                    <div className='col-12' variant="primary" onClick={() => setModalShow(true)}>

                        <span class="pl-5 pr-5 -actiontray-actions text-center
                         d-flex justify-content-center align-items-center btn-cap">
                            <span id='Mint'>Mint a Royal</span>
                            <img src={base4} alt='opensea' />  
                        </span>
                        <p class="text-center mt-10">Join our free community airdrop</p>
                    </div>
                </div>
            
      

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </section>
   
  );
}

export default MintRoyal;

