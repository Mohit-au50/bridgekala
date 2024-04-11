import Link from "next/link";

export default function Home() {
  return (
    <main className="container relative mx-auto grid h-screen place-items-center">
      <Link
        href={"/dashboard/new-request"}
        className="rounded-sm bg-rose-200 p-4 px-7 tracking-wide text-rose-700"
      >
        Dashboard
      </Link>
    </main>
  );
}
