"use client";
import ZodiacList from "@/components/zodiacListComponent";
import ZodiacForm from "@/components/zodiacFormComponent";
import ZodiacResult from "@/components/zodiacResultComponent";
import { useState } from "react";
import convertDateToYear from "../utils/convertDateToYear";
import getZodiac from "../utils/getZodiac";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [zodiac, setZodiac] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [zodiacMessage, setZodiacMessage] = useState<string | null>("");
  const { toast } = useToast();

  const handleFindZodiac = () => {
    if (!birthdate) {
      return toast({
        title: "Something went wrong!",
        description: "Please enter your birthdate",
        variant: "destructive",
      });
    }
    if (!name) {
      return toast({
        title: "Something went wrong!",
        description: "Please enter your name",
        variant: "destructive",
      });
    }
    setDisplayName(name);
    setAge(convertDateToYear(birthdate));
    const zodiac = getZodiac(birthdate);
    setZodiac(zodiac.zodiac);
    setZodiacMessage(zodiac.message);
  };

  const resetForm = () => {
    setDisplayName(null);
    setAge(null);
    setZodiac(null);
    setZodiacMessage(null);
    setBirthdate(null);
    setName(null);
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
          resetForm={resetForm}
          name={name}
          birthdate={birthdate}
        />
        {
          // If displayName is not null, display the ZodiacResult component
          displayName ? (
            <ZodiacResult
              displayName={displayName}
              age={age}
              zodiac={zodiac}
              zodiacMessage={zodiacMessage}
            />
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
