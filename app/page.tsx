import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-bold">Welcome to MatchMyTime!</h1>
      <h2 className="text-xl font-semibold">Let's Create an Event</h2>
      <Input type="text" placeholder="Event Name" className="w-60" />
      <p>What times may work</p>
      <div id="select-time" className="flex items-center space-x-2">
        <input type="time" className="border rounded px-2 py-1" />
        <p>to</p>
        <input type="time" className="border rounded px-2 py-1" />
      </div>
      <p>What days may work?</p>
      <Calendar></Calendar>
      <Button>Create Event</Button>
    </main>

  );
}
