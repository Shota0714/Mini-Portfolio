import PageTitle from "../components/PageTitle";
import Image from "next/image";

export default function Skills() {
    return (
        <main>
            <PageTitle title="Skills" />
            <h1>Skills</h1>
            <ul>
                <li>Programming Languages: C#, JavaScript, and PHP</li>
                <Image src="/launguages.jpeg" alt="profile" width="500" height="334" />
                <li>Frameworks: React, Next.js, and ASP.net</li>
                <Image src="/frameworks.jpeg" alt="profile" width="500" height="334" />
                <li>Software: WordPress and Bootstrap</li>
                <Image src="/software.jpeg" alt="profile" width="500" height="334" />
            </ul>
        </main>
    )
}