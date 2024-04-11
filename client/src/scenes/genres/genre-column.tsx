import DataTableRowActions from "@/components/data-table/data-table-row-actions";
import { Genre } from "@/types/genre";
import { ColumnDef } from "@tanstack/react-table";

interface BookColumnsProps {
  onEdit: (value: Genre) => void;
  onDelete: (value: Genre) => void;
}

export const getGenresColumns = ({
  onEdit,
  onDelete,
}: BookColumnsProps): ColumnDef<Genre>[] => [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "description",
    accessorKey: "descriptions",
  },
  {
    header: "status",
    accessorKey: "genres",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
