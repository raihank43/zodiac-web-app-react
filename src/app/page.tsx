"use client";
import ZodiacList from "@/components/zodiacListComponent";
import ZodiacForm from "@/components/zodiacFormComponent";
import ZodiacResult from "@/components/zodiacResultComponent";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export default function Home() {
  const [zodiac, setZodiac] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [birthdate, setBirthdate] = useState<Date | null>(null);

  const handleFindZodiac = () => {
    if (!birthdate) {
      alert("Please enter your birthdate");
      return;
    }
    if (!name) {
      alert("Please enter your name");
      return;
    }
    setDisplayName(name);
    console.log({ name, birthdate, zodiac });
  };

  return (
    <main className="flex min-h-screen p-10 gap-2">
      <section className="flex flex-col gap-10 p-10 bg-purple-100 rounded-lg w-1/2">
        <h1 className="text-3xl font-bold text-purple-900">Zodiac List</h1>
        <ZodiacList />
      </section>

      <section className="flex flex-col rounded-lg border-purple-200 border-2 w-1/2 p-10 gap-10">
        <ZodiacForm
          setName={setName}
          setBirthdate={setBirthdate}
          handleFindZodiac={handleFindZodiac}
        />
        <ZodiacResult displayName={displayName} />
      </section>
    </main>
  );
}
