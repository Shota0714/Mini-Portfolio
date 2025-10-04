import PageTitle from "../components/PageTitle";
import Link from "next/link";
import { projectsData } from "../components/projectsData";
import Image from "next/image";

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
                        <div><Image src={project.image} alt="class" width="500" height="334" /></div>
                    </li>
                ))}
            </ul>
        </main>
    )
}