import Image from "next/image";
import Link from "next/link";
import PageTitle from "./components/PageTitle";

export default function Home() {
  return (
    <div>
      <main>
        <PageTitle title="Home" />
        <h1>Welcome to my portfolio!</h1>
        <p>This is the main page of my portfolio website.</p>
      </main>
      <footer>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/shota0714/">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Shota0714">
              Github
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
