export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item nav-button">
                            <a className="nav-link">About me</a>
                        </li>
                        <li className="nav-item nav-button">
                            <a className="nav-link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}