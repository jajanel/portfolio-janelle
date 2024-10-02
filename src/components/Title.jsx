export default function Title() {

    return (

        <>
            <div className="container title-container">
                <div className="row">
                    <div className="col ">
                        <h1 className="main-title">hi, i&#39;m janelle</h1>
                        <h2 className="sub-title"> a third year student in app development</h2>
                    </div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/janellebed/" className="icon-socials"> <i className="bi bi-linkedin mx-4 fs-4"/> </a>
                        <a href="https://github.com/jajanel" className=" icon-socials"><i className="bi bi-github mx-4 fs-4 icon-socials"/></a>
                        <a href="mailto:janellebedard@gmail.com?subject=Contact%20from%20portfolio"
                           className="icon-socials"><i className="bi bi-envelope-fill mx-4 fs-4"/> </a>
                    </div>

                </div>
            </div>
        </>
    )
}