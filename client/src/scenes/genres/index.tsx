import DataTable from "@/components/data-table";
import Flex from "@/components/ui/flex";
import { Genre } from "@/types/genre";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getGenresColumns } from "@/scenes/genres/genre-column";
import AddGenreForm from "./add-genre-form";
import { deleteGenre, getGenres } from "@/api/book";
import { toast } from "@/components/ui/use-toast";

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const onEdit = useCallback((genre: Genre) => {
    setSelectedGenre(genre);
    setIsDialogOpen(true);
  }, []);

  const onDelete = useCallback((genre: Genre) => {
    removeGenre(genre);
  }, []);

  const removeGenre = async ({ id, title }: Genre) => {
    const response = await deleteGenre(id);
    if (response.code === "success") {
      toast({
        title: "Genre Deleted!",
        description: `${title} is deleted Successfully!`,
      });
    } else {
      console.log(response.error.message);
    }
  };

  const columns = useMemo(() => getGenresColumns({ onEdit, onDelete }), []);

  useEffect(() => {
    const getAllGenres = async () => {
      const response = await getGenres({ limit: 10, page: 0 });
      if (response.code === "success") {
        setGenres(response.data);
      }
    };
    getAllGenres();
  }, [isDialogOpen]);

  return (
    <div className="w-full h-full p-8">
      <Flex justify="between" className="mb-6">
        <div>
          <h3 className="text-3xl font-bold">Genres</h3>
          <p className="text-muted-foreground">Here's a list of all Genres!</p>
        </div>
        <AddGenreForm
          isOpen={isDialogOpen}
          genre={selectedGenre}
          onOpenChange={(value) => {
            setIsDialogOpen(value);
            if (!value) {
              setSelectedGenre(null);
            }
          }}
        />
      </Flex>
      <DataTable columns={columns} data={genres} />
    </div>
  );
};

export default Genres;
