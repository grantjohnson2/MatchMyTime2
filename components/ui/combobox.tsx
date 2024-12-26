"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define the timezone options
const frameworks = [
  { value: "est", label: "EST" },
  { value: "cst", label: "CST" },
  { value: "mst", label: "MST" },
  { value: "pst", label: "PST" },
  { value: "ast", label: "AST" },
  { value: "hst", label: "HST" },
];

// Define the expected props type
interface ComboboxDemoProps {
  value: string;  // This is the selected timezone
  setValue: React.Dispatch<React.SetStateAction<string>>;  // Setter function to update timezone
}

export function ComboboxDemo({ value, setValue }: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-custom-lightblue"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select timezone..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search timezone..." />
          <CommandList>
            <CommandEmpty>No timezone found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
