import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto p-4 flex justify-center items-center flex-col gap-20">
      <h1 className="text-6xl font-semibold">Hello World</h1>
      <p className="text-xl text-black/70 my-8">Welcome to my portfolio</p>
      <img
        src="https://th.bing.com/th/id/OIP.gLBS-T6KfECymRjdGszDQQHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="business man"
      />
    </section>
  );
}
