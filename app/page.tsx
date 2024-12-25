'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { ComboboxDemo } from "@/components/ui/combobox"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useRouter } from "next/navigation"; // For Next.js 13+, use 'next/navigation' instead
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeZone, setTimezone] = useState("");

  const handleCreateEventClick = () => {
    console.log("Event Name:", eventName);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Time Zone:", timeZone);
    // if un commented will go to a new page that i already created
    // router.push("/events"); // Navigate to the events page
  };

  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-bold">Welcome to MatchMyTime!</h1>
      <h2 className="text-xl font-semibold">Let's Create an Event</h2>
      <Input 
        type="text" 
        placeholder="Event Name" 
        className="w-60" 
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <p>What times may work</p>
      <ComboboxDemo 
         value={timeZone} 
         setValue={setTimezone}
      />
      <div id="select-time" className="flex items-center space-x-2">
        <input 
          type="time" 
          className="border rounded px-2 py-1" 
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <p>to</p>
        <input 
          type="time" 
          className="border rounded px-2 py-1" 
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <p>What days may work?</p>
      <ToggleGroup type="single">
        <ToggleGroupItem value="dates">
          Dates
        </ToggleGroupItem>
        <ToggleGroupItem value="daysOfWeek">
          Days of Week
        </ToggleGroupItem>
      </ToggleGroup>
      <Calendar></Calendar>
      <Button onClick={handleCreateEventClick}>Create Event</Button>
    </main>
  );
}