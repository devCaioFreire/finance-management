import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { BsFilterCircleFill } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';

export const Filter: React.FC = () => {

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <BsFilterCircleFill
            className="mt-1 w-6 h-6 text-zinc-100"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative z-50 flex flex-col gap-3 h-full bg-[#1E1E1E] p-2 mr-2 shadow-lg text-sm rounded">
          <DropdownMenuLabel className="flex items-center justify-center gap-2">
            <FaFilter className="w-3 h-3" />
            Filter
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-[1px] rounded-full border-[#505050]"/>
          <DropdownMenuItem>Total Earning</DropdownMenuItem>
          <DropdownMenuItem>Invoices</DropdownMenuItem>
          <DropdownMenuItem>Total Spending</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
