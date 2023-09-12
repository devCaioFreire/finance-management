import { ColumnDef } from "@tanstack/react-table";

interface Transacitons {
  id: string;
  category: string;
  description: string;
  value: number;
  date: string;
}

export const columns: ColumnDef<Transacitons>[] = [
  {
    accessorKey: "ID",
    header: "ID",
  },
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Value",
    header: "Value",
  },
  {
    accessorKey: "Date",
    header: "Date",
  },
]
