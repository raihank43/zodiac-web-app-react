"use client";
export default function ZodiacResult({
  displayName,
  age,
  zodiac,
  zodiacMessage,
}: {
  displayName: string | null;
  age: number | null;
  zodiac: string | null;
  zodiacMessage: string | null;
}) {
  return (
    <div className="flex flex-col bg-purple-200 h-full rounded-lg">
      <div className="bg-purple-300 p-10 rounded-lg">
        <h1 className="text-4xl font-black text-purple-800">
          Hello, {displayName}
        </h1>
        <h1 className="text-2xl font-bold text-purple-800">
          Your Zodiac Sign is: {zodiac}
        </h1>
        <h1 className="text-xl font-semibold text-purple-800">
          You are {age} years old.
        </h1>
      </div>

      <p className="text-lg text-purple-700 p-10">{zodiacMessage}</p>
    </div>
  );
}
