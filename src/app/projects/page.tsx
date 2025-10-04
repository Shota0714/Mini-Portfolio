import PageTitle from "../components/PageTitle";
import Link from "next/link";
import { projectsData } from "../components/projectsData";


export default function Projects() {
    return (
        <main>
            <PageTitle title="Projects" />
            <h1>Projects</h1>
            <ul>
                {projectsData.map((project) => (
                    <li key={project.id}>
                        <Link href={`/projects/${project.id}`}>
                            {project.title}
                        </Link>
                        <div>{project.image}</div>
                    </li>
                ))}
            </ul>
        </main>
    )
}