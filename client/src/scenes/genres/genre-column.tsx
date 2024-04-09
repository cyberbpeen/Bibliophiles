import { ColumnDef } from "@tanstack/react-table";
import { Genre } from "../../types/genre";
import DataTableRowActions from "../../components/data-table/data-table-row-actions";

interface GenreColumnsProps {
  onEdit: (value: Genre) => void;
  onDelete: (value: Genre) => void;
}

export const getGenresColumns = ({
  onEdit,
  onDelete,
}: GenreColumnsProps): ColumnDef<Genre>[] => [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "description",
    accessorKey: "descriptions",
  },

  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
