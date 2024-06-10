import ZodiacList from "@/components/zodiacListComponent";
import ZodiacForm from "@/components/zodiacFormComponent";
export default function Home() {
  return (
    <main className="flex min-h-screen p-10 gap-2">
      <section className="flex flex-col gap-10 p-10 bg-purple-100 rounded-lg w-1/2">
        <h1 className="text-3xl font-bold text-purple-900">Zodiac List</h1>
        <ZodiacList />
      </section>

      <section className="flex flex-col rounded-lg border-purple-200 border-2 w-1/2 p-10">
        <ZodiacForm />
      </section>
    </main>
  );
}
