'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { ComboboxDemo } from "@/components/ui/combobox"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { DaysOfWeekPicker } from "@/components/ui/daysOfWeekPicker"; // Import the component
import { useRouter } from "next/navigation"; // For Next.js 13+, use 'next/navigation' instead
import { useState } from "react";
import "@/app/globals.css";

export default function Home() {
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeZone, setTimezone] = useState("");
  const [viewType, setViewType] = useState("dates"); // To toggle between views
  const [date, setDate] = useState<Date | undefined>(new Date())



  const handleCreateEventClick = () => {
    console.log("Event Name:", eventName);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Time Zone:", timeZone);
    console.log("View Type:", viewType);
    console.log("Selected Date:", date);

    // if un commented will go to a new page that i already created
    // router.push("/events"); // Navigate to the events page
  };

  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-bold text-custom-lightblue">Welcome to MatchMyTime!</h1>
      <h2 className="text-xl font-semibold text-custom-lightgrey">Let's Create an Event</h2>

      {/* Event Name Input */}
      <Input 
        type="text" 
        placeholder="Event Name" 
        className="w-60 text-custom-lightblue" 
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      {/* Time Selection */}
      <p className="text-custom-lightgrey">What times may work</p>
      <ComboboxDemo 
         value={timeZone} 
         setValue={setTimezone}
      />
      <div id="select-time" className="flex items-center space-x-2 text-custom-lightgrey">
        <input 
          type="time" 
          className="border rounded px-2 py-1 text-custom-lightblue" 
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <p>to</p>
        <input 
          type="time" 
          className="border rounded px-2 py-1 text-custom-lightblue" 
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      {/* Toggle View Between Dates and Days of Week */}
      <p className="text-custom-lightgrey">What days may work?</p>
      <ToggleGroup 
        type="single"        
        value={viewType} 
        onValueChange={(value) => setViewType(value || "dates")} // Handle view toggle
      >
        <ToggleGroupItem value="dates" className={viewType === "dates" ? "bg-blue-500 text-white" : ""}>
          Dates
        </ToggleGroupItem>
        <ToggleGroupItem value="daysOfWeek" className={viewType === "daysOfWeek" ? "bg-blue-500 text-white" : ""}>
          Days of Week
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Conditional Calendar Based on Selected View */}
      {viewType === "dates" ? (
        <Calendar 
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
      ) : (
        <DaysOfWeekPicker />
      )}

      {/* Create Event Button */}
      <Button onClick={handleCreateEventClick}>Create Event</Button>
    </main>
  );
}

