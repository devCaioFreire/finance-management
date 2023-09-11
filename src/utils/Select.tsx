import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

interface SelectCategoryProps {
  onCategoryChange: (category: string) => void;
}

export const SelectCategory: React.FC<SelectCategoryProps> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  }

  return (
    <Select onValueChange={(value) => handleSelect(value as string)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="earning">Earning</SelectItem>
        <SelectItem value="spending">Spending</SelectItem>
      </SelectContent>
    </Select>
  );
};
