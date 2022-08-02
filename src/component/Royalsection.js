
import base4 from "../img/base4.png";
import b3a from "../img/1.b3a6fa1a.png";
import f4fb from "../img/2.1f4fbbb6.png";
import afe from "../img/3.3afe3291.png";
import contra from "../img/contra-meno.69aa30a4.png";


const Royalsection = () => {
    return (

        <>
            <section className="glassy-wrapper x-section mt-60">
                <h1 className="section-title">Royals</h1>
                <div className="row mt-20">
                    <div className="col-sm-6 col-md-3 showcase-x">
                        <img src={b3a} alt="" />
                        <div className="d-flex mt-10 showcase-case">
                            <img
                                src={base4}
                                alt=""
                                className="showcase-case-item case-icon"
                            />
                            <h4>Ancient Royals</h4>
                            <img
                                src={base4}
                                alt=""
                                className="d-none d-sm-block showcase-case-item case-icon"
                            />
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 showcase-x">
                        <img src={f4fb} alt="" />
                        <div class="d-flex mt-10 showcase-case">
                            <img
                                src={base4}
                                alt=""
                                className="showcase-case-item case-icon"
                            />
                            <h4>Meta Royals</h4>
                            <img
                                src={base4}
                                alt=""
                                className="d-none d-sm-block showcase-case-item case-icon"
                            />
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 showcase-x">
                        <img src={afe} alt="" />
                        <div class="d-flex mt-10 showcase-case">
                            <img
                                src={base4}
                                alt=""
                                className="showcase-case-item case-icon"
                            />
                            <h4>Legendary Royals</h4>
                            <img
                                src={base4}
                                alt=""
                                className="d-none d-sm-block showcase-case-item case-icon"
                            />
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 showcase-x">
                        <img src={contra} alt="" />
                        <div class="d-flex mt-10 showcase-case">
                            <img
                                src={base4}
                                alt=""
                                className="showcase-case-item case-icon"
                            />
                            <h4>Honorary Royals</h4>
                            <img
                                src={base4}
                                alt=""
                                className="d-none d-sm-block showcase-case-item case-icon"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section

                class="mt-30 pl-5 pr-5 -actiontray-actions text-center d-flex justify-content-center align-items-center btn-cap"
            >
                <a href='#gallery'>
                    <span>

                        View Royal Gallery

                    </span>
                </a>
            </section>

        </>

    )
}

export default Royalsection