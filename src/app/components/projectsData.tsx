import Image from "next/image";

type Project = {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        image: "/php.jpeg",
        title: "Travel Site",
        description: "The Travel Site that was built to learn PHP in a class",
        date: "Jan 2025 - Apr 2025",
    },
    {
        id: 2,
        image: "/class.jpeg",
        title: "Bitmap/Vector/Video/Emb Media",
        description: "The class to learn how to use Adboe Illustrator",
        date: "Sep 2025 - Present",
    },
    {
        id: 3,
        image: "/portfolio.jpeg",
        title: "Mini Portfolio",
        description: "This website that is being built for assignments",
        date: "Oct 2025 - Present",
    },
];