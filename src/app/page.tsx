import Image from "next/image";
import { Button } from "@/components/ui/button";
import ZodiacList from "@/components/zodiacListComponent";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="">
        <h1>Zodiac List</h1>
        <ZodiacList />
      </section>

      <section>
        <h1>Image</h1>
        <Image
          src="/images/zodiac.jpg"
          alt="Zodiac"
          width={500}
          height={500}
        />
      </section>
    </main>
  );
}
