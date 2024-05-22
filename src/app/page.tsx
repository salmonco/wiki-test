import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <Link href={"/edit"}>편집하기</Link>
    </main>
  );
}
