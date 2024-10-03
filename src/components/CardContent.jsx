


export default function CardContent(props) {
    return (<div className="custom-card border-0 text-white  ">
        <div className="custom-card-bg">
            <h5 className="card-title text-center">{props.projectTitle}</h5>

            <div className="col col-8 d-flex float-end">
                <p className="project-description">
                    {props.projectDescription}
                </p>
            </div>
            <img src={props.projectImage} className="card-img-top" alt="Project Image"/>
        </div>
    </div>);
}