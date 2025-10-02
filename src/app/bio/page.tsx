import PageTitle from "../components/PageTitle";
import Image from "next/image";

export default function Bio() {
    return (
        <main>
            <PageTitle title="Bio" />
            <Image src="/profile.jpg" alt="profile" width="500" height="334" />
            <p>My name is Shota Uchikawa.</p>
            <p>I am a student at Georgian College studying Interactive Media Design-Web.</p>
            <p>My personal mission is to live a well-balacnced life, working as a web developer in Canada and enjoying the moment that I am living.</p>
        </main>
    );
}