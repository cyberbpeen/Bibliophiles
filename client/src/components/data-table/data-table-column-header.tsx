import { HTMLAttributes } from "react";
import { Button } from "../ui/button";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  const renderSortIcon = () => {
    const sort = column.getIsSorted();
    if (!sort) {
      return <ChevronsUpDown className="ml-2 h-4 w-4" />;
    }
    return sort === "desc" ? (
      <ArrowDown className="ml-2 h-4 w-4" />
    ) : (
      <ArrowUp className="ml-2 h-4 w-4" />
    );
  };

  if (!column.getCanSort()) {
    return <div className={className}>{title}</div>;
  }

  if (!column.getCanSort()) {
    return <div>{title}</div>;
  }

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="h-8"
        onClick={column.getToggleSortingHandler()}
      >
        <span>{title}</span>
        {renderSortIcon()}
      </Button>
    </div>
  );
};

export default DataTableColumnHeader;
