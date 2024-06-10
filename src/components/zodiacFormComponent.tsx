import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

export default function ZodiacForm({
  setName,
  setBirthdate,
  handleFindZodiac,
  resetForm,
  name,
  birthdate,
}: {
  setName: Dispatch<SetStateAction<string | null>>;
  setBirthdate: Dispatch<SetStateAction<Date | null>>;
  handleFindZodiac: () => void;
  resetForm: () => void;
  name: string | null;
  birthdate: Date | null;
}) {
  return (
    <div className="flex flex-col ">
      <h1 className="text-4xl font-bold text-purple-800">
        What Zodiac Sign Am I?
      </h1>
      <p className="text-lg text-purple-700">
        Enter your birthdate to find out your zodiac sign.
      </p>

      <div className="flex gap-2 flex-col mt-5">
        <Input
          type="text"
          className="p-2 border border-black rounded-lg "
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <Input
          type="date"
          className="p-2 border border-black rounded-lg"
          onChange={(e) => setBirthdate(new Date(e.target.value))}
          value={birthdate ? birthdate.toISOString().split("T")[0] : ""}
        />

        <Button
          className="bg-purple-900 text-white hover:bg-purple-500 "
          onClick={handleFindZodiac}
        >
          Find My Zodiac Sign
        </Button>
        <Button
          className="bg-purple-200 text-purple-900 hover:bg-purple-700 hover:text-white"
          onClick={resetForm}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
