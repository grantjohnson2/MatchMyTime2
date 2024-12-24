// Temporary Event Creation Page
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Page: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    console.log('Input Value:', inputValue);
    // Add your logic here
  };

  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <Input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter something" 
        className="w-60"
      />
      <Button onClick={handleAddButtonClick}>Create Event</Button>
    </main>
  );
};

export default Page;