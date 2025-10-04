import PageTitle from "../../components/PageTitle";
import { projectsData } from "../../components/projectsData";

export default function Project({ params }: { params: { id: number } }) {
    const projectId = Number(params.id);
    const project = projectsData.find(params => params.id === projectId);

    if (!project) {
        return (
            <h2>Project Not Found</h2>
        );
    }

    return (
        <main>
            <PageTitle title="project" />
            <main key={project.id}>
                <h1>{project.title}</h1>
                <div>{project.image}</div>
                <p>{project.description}</p>
                <p>{project.date}</p>
            </main>
        </main>
    )
}