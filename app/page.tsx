import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Hello World!</div>
      <Link href = "/about">About Page</Link>
    </main>
  );
}
