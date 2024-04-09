import { ColumnDef } from "@tanstack/react-table";
import DataTableRowActions from "../../components/data-table/data-table-row-actions";
import { Book } from "../../types/book";

interface BookColumnsProps {
  onEdit: (value: Book) => void;
  onDelete: (value: Book) => void;
}

export const getBooksColumns = ({
  onEdit,
  onDelete,
}: BookColumnsProps): ColumnDef<Book>[] => [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "author",
    accessorKey: "author",
  },
  {
    header: "genres",
    accessorKey: "genres",
  },
  {
    header: "language",
    accessorKey: "language",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
