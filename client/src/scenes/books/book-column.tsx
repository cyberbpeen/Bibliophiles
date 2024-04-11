import DataTableColumnHeader from "@/components/data-table/data-table-column-header";
import DataTableRowActions from "@/components/data-table/data-table-row-actions";
import { Book } from "@/types/book";
import { ColumnDef } from "@tanstack/react-table";

interface BookColumnsProps {
  onEdit: (value: Book) => void;
  onDelete: (value: Book) => void;
}

export const getBooksColumns = ({
  onEdit,
  onDelete,
}: BookColumnsProps): ColumnDef<Book>[] => [
  {
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-left"
        column={column}
        title="Title"
      />
    ),
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
