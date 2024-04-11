import { getBooks } from "@/api/book";
import DataTable from "@/components/data-table";
import Flex from "@/components/ui/flex";
import { getBooksColumns } from "@/scenes/books/book-column";
import { Book } from "@/types/book";
import { useCallback, useEffect, useMemo, useState } from "react";
import AddBookForm from "./add-book-form";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onEdit = useCallback((book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  }, []);

  const onDelete = useCallback((book: Book) => deleteBook(book), []);

  const deleteBook = async ({ id, title }: Book) => {
    await axios
      .delete(`http://localhost:3000/api/v1/books/${id}`)
      .then(function (response) {
        console.log(response.data);
        alert(`${title} Book is Deleted!`);
        toast({
          title: "Book Deleted!",
          description: `${title} is Deleted Successfully!`,
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const columns = useMemo(() => getBooksColumns({ onEdit, onDelete }), []);

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await getBooks({ limit: 10, page: 0 });
      if (response.code === "success") {
        setBooks(response.data);
      }
    };
    getAllBooks();
  }, [isDialogOpen]);

  return (
    <div className="w-full h-full p-8">
      <Flex justify="between" className="mb-6">
        <div>
          <h3 className="text-3xl font-bold">Books</h3>
          <p className="text-muted-foreground">Here's a list of all Books!</p>
        </div>
        <AddBookForm
          isOpen={isDialogOpen}
          book={selectedBook}
          onOpenChange={(value) => {
            setIsDialogOpen(value);
            if (!value) {
              setSelectedBook(null);
            }
          }}
        />
      </Flex>
      <DataTable columns={columns} data={books} />
    </div>
  );
};

export default Books;
