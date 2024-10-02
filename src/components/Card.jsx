import CardContent from "./CardContent.jsx";

export default function Card(props) {
    return (
        <section className="py-3 py-md-5">
            <div className="container overflow-hidden">
                <div className="row">
                    {props.dataProjects.map((project, index) => (
                        <div className={`col-md-${index === 0 ? 4 : 8}`} key={project.idProject}>
                            <CardContent
                                projectTitle={project.projectTitle}
                                projectDescription={project.projectDescription}
                                projectImage={project.projectImage}
                            />
                        </div>
                    ))}
                </div>
                <div className="row">

                </div>
            </div>
        </section>
    );
}