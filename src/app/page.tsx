import Image from "next/image";
import { Button } from "@/components/ui/button";
import ZodiacList from "@/components/zodiacListComponent";
export default function Home() {
  return (
    <main className="flex min-h-screen p-10 gap-2">
      <section className="flex flex-col gap-10 p-10 bg-purple-100 rounded-lg w-1/2">
        <h1 className="text-3xl font-bold text-purple-900">Zodiac List</h1>
        <ZodiacList />
      </section>

      <section className="flex flex-col rounded-lg border-purple-200 border-2 w-1/2 p-10">
        <h1 className="text-4xl font-bold text-purple-800">
          What Zodiac Sign Am I?
        </h1>
        <p className="text-lg text-purple-700">
          Enter your birthdate to find out your zodiac sign.
        </p>

        <div className="flex gap-4">
          <input
            type="text"
            className="p-2 border border-black rounded-lg w-1/2"
            placeholder="Enter your name"
          />
          <input
            type="date"
            className="p-2 border border-black rounded-lg w-1/2"
            placeholder="Enter your birthdate"
          />
          <Button className="bg-purple-900 text-white">
            Find My Zodiac Sign
          </Button>
        </div>
      </section>
    </main>
  );
}
