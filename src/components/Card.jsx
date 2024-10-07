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
                                            <p className="mb-4">Before the first photo was captured in the 18th century,
                                                lifelike images of what the eyes can see could only be made by talented
                                                artists.</p>
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
                                                    className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Food</span>
                                                <img className="img-fluid rounded w-100 h-100 object-fit-cover"
                                                     loading="lazy"
                                                     src="https://www.courthousenews.com/wp-content/uploads/2019/11/Fukuipteryx.prima_.jpg"
                                                     alt="Food"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div>
                                            <p className="text-secondary mb-1">Aug 23, 2022</p>
                                            <h2 className="h1 mb-3"><a className="link-dark text-decoration-none"
                                                                       href="#!">Benefits of Having a Heavy Breakfast
                                                Every Morning</a></h2>
                                            <p className="mb-4">Running late for work or school? "Let’s skip the
                                                breakfast!" Well, this might sound like the most ideal idea to save time
                                                when you are on the run.</p>
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