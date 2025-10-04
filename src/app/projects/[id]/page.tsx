import PageTitle from "../../components/PageTitle";
import { projectsData } from "../../components/projectsData";
import Image from "next/image";

// display all details of selected program
export default function Project({ params }: { params: { id: number } }) {
    const projectId = Number(params.id);
    const project = projectsData.find(params => params.id === projectId);

    // Error handler if selected project is not found
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
                <div><Image src={project.image} alt="class" width="500" height="334" /></div>
                <p>{project.description}</p>
                <p>{project.date}</p>
            </main>
        </main>
    )
}