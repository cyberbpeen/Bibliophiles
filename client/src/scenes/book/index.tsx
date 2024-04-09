import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Heading, Text } from "../../components/ui";
import { getBooksColumns } from "./book-column";
import DataTable from "../../components/data-table/data-table";
import { Book } from "../../types/book";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  const onEdit = useCallback(
    (book: Book) => alert(`On edit pressed for book with title ${book.title}`),
    []
  );

  const onDelete = useCallback(
    (book: Book) =>
      alert(`On delete pressed for book with title ${book.title}`),
    []
  );
  const columns = useMemo(() => getBooksColumns({ onEdit, onDelete }), []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/books?limit=20")
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  }, []);

  return (
    <div className="w-full h-full p-8">
      <Flex justify="between">
        <div>
          <Heading as="H5">Books</Heading>
          <Text>Here's a list of all Books!</Text>
        </div>
        <Button onClick={() => navigate("/books/add")} variant="outline">
          Add Book
        </Button>
      </Flex>
      <DataTable columns={columns} data={books} />
    </div>
  );
};

export default Books;
