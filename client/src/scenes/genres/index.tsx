import axios from "axios";
import { Text, Heading, Flex, Button } from "../../components/ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import DataTable from "../../components/data-table/data-table";
import { getGenresColumns } from "./genre-column";
import { Genre } from "../../types/genre";

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onEdit = useCallback(
    (book: Genre) => alert(`On edit pressed for book with title ${book.title}`),
    []
  );

  const onDelete = useCallback(
    (book: Genre) =>
      alert(`On delete pressed for book with title ${book.title}`),
    []
  );
  const columns = useMemo(() => getGenresColumns({ onEdit, onDelete }), []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/genres?limit=30")
      .then(function (response) {
        setGenres(response.data);
      })
      .catch(function (error) {
        setError(error.message);
      });
  }, [genres, error]);
  return (
    <div className="w-full h-full p-8">
      <Flex justify="between">
        <div>
          <Heading as="H5" weight="bold">
            Genres
          </Heading>
          <Text>Here's a list of all genres!</Text>
        </div>
        <Button type="button" variant="outline">
          Add Genre
        </Button>
      </Flex>
      <DataTable columns={columns} data={genres} />
    </div>
  );
};

export default Genres;
