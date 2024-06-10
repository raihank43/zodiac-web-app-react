"use client";
import ZodiacList from "@/components/zodiacListComponent";
import ZodiacForm from "@/components/zodiacFormComponent";
import ZodiacResult from "@/components/zodiacResultComponent";
import { useState } from "react";
import convertDateToYear from "../../utils/convertDateToYear";
import getZodiac from "../../utils/getZodiac";

export default function Home() {
  const [zodiac, setZodiac] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [age, setAge] = useState<number | null>(null);

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
    setAge(convertDateToYear(birthdate));
    setZodiac(getZodiac(birthdate));
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
        {
          // If displayName is not null, display the ZodiacResult component
          displayName ? (
            <ZodiacResult displayName={displayName} age={age} zodiac={zodiac} />
          ) : (
            <div className="flex flex-col bg-purple-200 h-full rounded-lg items-center justify-center p-10">
              <h1 className="text-xl font-semibold italic text-purple-400">
                Please enter your name and birthdate
              </h1>
            </div>
          )
        }
      </section>
    </main>
  );
}
