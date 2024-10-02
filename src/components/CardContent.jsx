export default function CardContent(props) {
    return (
        <div className="custom-card border-0 text-white ">
            <div className="custom-card-bg"> </div>
            <div className="text-">
                <h5 className="card-title">{props.projectTitle}</h5>
                <p>  lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem iplorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumsumlorem ipsum</p>
                <p className="card-text">
                    {props.projectDescription}
                </p>
            </div>
        </div>
    );
}