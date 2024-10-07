import CardContent from "./CardContent.jsx";

export default function Card(props) {
    return (
        <section className="py-3 py-md-5">
            <div className="container">
                <div className="row">

                    <div className="container overflow-hidden">
                        <div className="row gy-5">
                            <div className="col-12">
                                <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="img-wrapper position-relative bsb-hover-push">
                                            <a href="#!">
                                                <span
                                                    className="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Unity</span>
                                                <img className="img-fluid rounded w-100 h-100 object-fit-cover"
                                                     loading="lazy"
                                                     src="https://www.courthousenews.com/wp-content/uploads/2019/11/Fukuipteryx.prima_.jpg"
                                                     alt="Unity game"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div>
                                            <p className="text-secondary mb-1">September 2024</p>
                                            <h2 className="h1 mb-3"><a className="link-dark text-decoration-none"
                                                                       href="#!">Feed the animals game</a></h2>
                                            <p className="mb-4">A <em> space-invader</em> type of game where you have to feed the animals before they reach the bottom of the screen.</p>
                                            <a className="btn btn-primary" href="#!" target="_self">See more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="img-wrapper position-relative bsb-hover-push">
                                            <a href="#!">
                                                <span
                                                    className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">React</span>
                                                <img className="img-fluid rounded w-100 h-100 object-fit-cover"
                                                     loading="lazy"
                                                     src="https://www.courthousenews.com/wp-content/uploads/2019/11/Fukuipteryx.prima_.jpg"
                                                     alt="React website"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div>
                                            <p className="text-secondary mb-1">October 2024</p>
                                            <h2 className="h1 mb-3"><a className="link-dark text-decoration-none"
                                                                       href="#!">Bird reviewing web app</a></h2>
                                            <p className="mb-4">A single-page application to access a catalogue of different birds and review them.</p>
                                            <a className="btn btn-primary" href="#!" target="_self">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="img-wrapper position-relative bsb-hover-push">
                                            <a href="#!">
                                                <span
                                                    className="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Unity</span>
                                                <img className="img-fluid rounded w-100 h-100 object-fit-cover"
                                                     loading="lazy"
                                                     src="https://www.courthousenews.com/wp-content/uploads/2019/11/Fukuipteryx.prima_.jpg"
                                                     alt="Unity"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div>
                                            <p className="text-secondary mb-1">October 2024</p>
                                            <h2 className="h1 mb-3"><a className="link-dark text-decoration-none"
                                                                       href="#!">Sumo ball battle</a></h2>
                                            <p className="mb-4">The game is set on a central island, where you must knock down your enemies and avoid being dislodged from the island yourself for as long as possible</p>
                                            <a className="btn btn-primary" href="#!" target="_self">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="img-wrapper position-relative bsb-hover-push">
                                            <a href="#!">
                                                <span
                                                    className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Server</span>
                                                <img className="img-fluid rounded w-100 h-100 object-fit-cover"
                                                     loading="lazy"
                                                     src="https://www.courthousenews.com/wp-content/uploads/2019/11/Fukuipteryx.prima_.jpg"
                                                     alt="Food"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div>
                                            <p className="text-secondary mb-1">November 2023</p>
                                            <h2 className="h1 mb-3"><a className="link-dark text-decoration-none"
                                                                       href="#!">Simulation of a server infrastructure</a></h2>
                                            <p className="mb-4">Created from zero a server infrastructure of a fictional university. From the creation of the domain to the users rights</p>
                                            <a className="btn btn-primary" href="#!" target="_self">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}