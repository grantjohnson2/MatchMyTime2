import { useState } from "react";

export function DaysOfWeekPicker() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday") => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const daysOfWeek: Array<"Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"> = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];

  return (
    <div className="flex flex-col items-center space-y-2">
      <h3>Select Days of the Week</h3>
      <div className="grid grid-cols-3 gap-2">
      {daysOfWeek.map((day, index) => (
        <button
            key={day}
            className={`border rounded px-2 py-1 ${
                selectedDays.includes(day) ? "bg-blue-500 text-white" : "bg-white"
            } ${day === "Saturday" ? "col-span-3 justify-self-center" : ""}`} // Add classes for Saturday
            onClick={() => toggleDay(day)}
        >
            {day}
        </button>
  ))}
      </div>
    </div>
  );
}
