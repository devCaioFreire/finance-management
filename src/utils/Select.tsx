import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export const SelectCategory: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Earning</SelectItem>
        <SelectItem value="dark">Spending</SelectItem>
      </SelectContent>
    </Select>
  );
};
