import { ColumnDef } from "@tanstack/react-table"
import { Transacitons } from "./data"

export const columns: ColumnDef<Transacitons>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
]
