import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
    <Calendar></Calendar>
    <Button>Create Event</Button>
    </main>
  );
}
