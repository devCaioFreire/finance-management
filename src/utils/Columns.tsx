import { ColumnDef } from "@tanstack/react-table";

interface Transacitons {
  ID: string;
  Category: string;
  Description: string;
  Value: number;
  Date: string;
}

export const columns: ColumnDef<Transacitons>[] = [
  {
    accessorKey: "ID",
    header: "ID",
    cell: (context) => context.row.original.ID
  },
  {
    accessorKey: "Category",
    header: "Category",
    cell: (context) => context.row.original.Category
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: (context) => context.row.original.Description
  },
  {
    accessorKey: "Value",
    header: "Value",
    cell: (context) => context.row.original.Value
  },
  {
    accessorKey: "Date",
    header: "Date",
    cell: (context) => context.row.original.Date
  },
]
