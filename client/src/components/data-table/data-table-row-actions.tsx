import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { MdMoreVert } from "react-icons/md";
import { Flex } from "../ui";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (value: TData) => void;
  onDelete: (value: TData) => void;
}

const DataTableRowActions = <TData,>({
  row,
  onEdit,
  onDelete,
}: DataTableRowActionsProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Flex className="h-10 w-10 rounded text-zinc-50 hover:bg-zinc-800/50">
          <MdMoreVert />
        </Flex>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Actions</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onEdit(row.original)}>
          Update Book
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onDelete(row.original)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;
