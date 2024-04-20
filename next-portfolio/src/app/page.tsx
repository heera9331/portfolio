import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans mx-10">
      <div className="grid grid-cols-2 my-10 h-[80vh] border-2">
        <div className="flex justify-center flex-col">
          <h1 className="text-3xl font-semibold uppercase text-[var(--main)]">
            Hello, my name is Heera Singh
          </h1>
          <h2 className="text-2xl font-semibold uppercase">
            I'm a Software Developer
          </h2>
          <div className="text-[18px] flex flex-col gap-4 justify-around my-4">
            <p className="">
              I am Heera Singh Lodhi, a passionate and dedicated fresher with a
              strong foundation in computer science and engineering.{" "}
            </p>
            <p>
              I have a keen interest in programming and possess solid knowledge
              of object-oriented programming, data structures and algorithms,
              HTML, CSS, JavaScript, WordPress, C programming, Java, and Python.
            </p>
            <p>
              With a creative mindset and strong problem-solving skills, I
              strive to contribute my skills and enthusiasm to challenging
              projects.
            </p>
          </div>
          <button className="bg-[var(--ternary)] text-white font-semibold uppercase py-2 px-3 rounded-md hover:bg-blue-600 inline w-40">
            More About Me
          </button>
        </div>
        <div className="border-2 h-full p-10 flex items-center justify-center">
          <Image
            src={`/media/images/heera-singh-bg.png`}
            width={"800"}
            height={"800"}
            alt="Heera Singh"
            className="w-[60%]"
          />
        </div>
      </div>
    </main>
  );
}
