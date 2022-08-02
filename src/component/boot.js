import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../styles.scss";
import "./boot.scss";
import binance from "../img/binance.png";
import trust from "../img/trust.svg";
import walletconnect from "../img/walletconnect-circle.8ec0ff12.svg";
import metamask from "../img/metamask.svg"
const Boot = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a variant="primary" onClick={handleShow} href="#" class="btn btn-primary btn-cap" >
                Connect Wallet
            </a>

            <Modal show={show} onHide={handleClose} className="s-modal-card">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>
                        <span>Connect Wallet</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div classsName="s-card-body mt-4" >
                        <div className="s-provider-wrapper">
                            <div className="s-provider-container">
                                <div className="si-icon">
                                    <img src={walletconnect} alt="walletconnect" />
                                </div>
                                <div className="si-name">WalletConnect</div>
                            </div>
                        </div>
                        <div className="s-provider-wrapper">
                            <div className="s-provider-container">
                                <div className="si-icon">
                                    <img src={metamask} alt="metamask" />
                                </div>
                                <div className="si-name">MetaMask</div>
                            </div>
                        </div>
                        <div className="s-provider-wrapper">
                            <div className="s-provider-container">
                                <div className="si-icon"><img src={trust} alt="trustwallet" /> </div>
                                <div className="si-name">TrustWallet</div>
                            </div>
                        </div>
                        <div className="s-provider-wrapper">
                            <div className="s-provider-container">
                                <div className="si-icon"><img src={binance} alt="binance" /> </div>
                                <div className="si-name">Binance Chain Wallet</div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <div
                    className="d-flex justify-content-center align-items-center flex-column mt-4 mb-3"
                >
                    <span href="https://crypto.com" className="text-default text-center"
                    >Haven't got a crypto wallet yet?</span>
                    <a
                        href="https://docs.pancakeswap.finance/get-started/connection-guide"
                        className="bg-dim h icon-container p-3 rounded-all text-default mt-4 w-75">
                        <i className="bi bi-question-circle mr-2"></i> Learn how to
                        connect</a>
                </div>
            </Modal>

            {/* <a href="#" class="btn btn-primary btn-cap" onClickCapture={isconnectWallet }  >Logout</a>
            <a href="#" class="btn btn-primary btn-cap" onClickCapture={logOut}
                onClick={Connect}  >Connect Wallet </a>
    */}
        </>
    );
}

export default Boot;