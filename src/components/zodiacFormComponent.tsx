import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "./ui/calenderPopover";
import { Dispatch, SetStateAction } from "react";

export default function ZodiacForm({
  setName,
  setBirthdate,
  handleFindZodiac,
}: {
  setName: Dispatch<SetStateAction<string | null>>;
  setBirthdate: Dispatch<SetStateAction<Date | null>>;
  handleFindZodiac: () => void;
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
        />
        <DatePicker setBirthdate={setBirthdate} />

        <Button
          className="bg-purple-900 text-white hover:bg-purple-500 "
          onClick={handleFindZodiac}
        >
          Find My Zodiac Sign
        </Button>
        <Button className="bg-purple-200 text-purple-900 hover:bg-purple-700 hover:text-white">
          Reset
        </Button>
      </div>
    </div>
  );
}
