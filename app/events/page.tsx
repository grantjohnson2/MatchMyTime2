// Temporary Event Creation Page with Time Slot Selection
"use client"

import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MOCK_PREV_PAGE_DATA = {
  startTime: '17:00', // 4 PM
  endTime: '20:00',   // 8 PM
  selectedDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

const EventCreationPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  // Generate time slots every 30 minutes
  const timeSlots = useMemo(() => {
    const slots = [];
    const start = new Date(`2024-01-01 ${MOCK_PREV_PAGE_DATA.startTime}`);
    const end = new Date(`2024-01-01 ${MOCK_PREV_PAGE_DATA.endTime}`);

    while (start <= end) {
      slots.push(start.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }));
      start.setMinutes(start.getMinutes() + 30);
    }
    return slots;
  }, []);

  // Get current 3 days to display
  const currentDays = useMemo(() => {
    const allDays = MOCK_PREV_PAGE_DATA.selectedDays;
    return allDays.slice(currentDayIndex, currentDayIndex + 3);
  }, [currentDayIndex]);

  const handleNextDays = () => {
    if (currentDayIndex + 3 < MOCK_PREV_PAGE_DATA.selectedDays.length) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const handlePrevDays = () => {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  const toggleCell = (dayTime: string) => {
    const newSelected = new Set(selectedCells);
    if (newSelected.has(dayTime)) {
      newSelected.delete(dayTime);
    } else {
      newSelected.add(dayTime);
    }
    setSelectedCells(newSelected);
  };


  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-bold text-custom-lightblue">MatchMyTime!</h1>
      <h2 className="text-xl font-semibold text-custom-lightgrey">Title...</h2>

      <div className="relative">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="pr-8"
        />
        {username && (
          <button
            onClick={() => setUsername('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Select your Time Zone:</label>
        <Select defaultValue="PST">
          <SelectTrigger>
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="PST">PST</SelectItem>
            <SelectItem value="MST">MST</SelectItem>
            <SelectItem value="CST">CST</SelectItem>
            <SelectItem value="EST">EST</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Group&apos;s Availability:</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevDays}
              disabled={currentDayIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextDays}
              disabled={currentDayIndex + 3 >= MOCK_PREV_PAGE_DATA.selectedDays.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="border rounded-lg">
          <div className="grid grid-cols-[auto_repeat(3,1fr)]">
            <div className="border-b bg-gray-50 p-2"></div>
            {currentDays.map((day) => (
              <div
                key={day}
                className="border-b border-l bg-gray-50 p-2 text-center font-medium"
              >
                {day}
              </div>
            ))}

            {timeSlots.map((time) => (
              <>
                <div
                  key={time}
                  className="border-b p-2 text-sm text-gray-600"
                >
                  {time}
                </div>
                {currentDays.map((day) => {
                  const dayTime = `${day}-${time}`;
                  const isSelected = selectedCells.has(dayTime);
                  return (
                    <div
                      key={dayTime}
                      onClick={() => toggleCell(dayTime)}
                      className={`border-b border-l p-2 hover:bg-gray-50 cursor-pointer transition-colors ${isSelected ? 'bg-blue-100' : ''
                        }`}
                    >
                      <div className="h-6"></div>
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => alert('Link copied to clipboard!')}
          className="bg-[#2D4356] hover:bg-[#435B66] text-white px-6"
        >
          Copy Link
        </Button>
      </div>
    </main>
  );
};

export default EventCreationPage;
