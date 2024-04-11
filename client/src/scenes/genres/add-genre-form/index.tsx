import { postGenre, putGenre } from "@/api/book";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Genre, GenreFormFields, GenreSchema } from "@/types/genre";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddGenreProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  genre: Genre | null;
}

const AddGenreForm = ({ isOpen, genre, onOpenChange }: AddGenreProps) => {
  const form = useForm<GenreFormFields>({
    resolver: zodResolver(GenreSchema),
    defaultValues: {
      title: "",
      descriptions: "",
    },
    mode: "onChange",
  });

  const createGenreSuccess = async ({
    title,
    descriptions,
  }: GenreFormFields) => {
    const response = await postGenre({ title, descriptions });
    if (response.code === "success") {
      console.log(response.data);
      toast({
        title: "Genre Added!",
        description: `${response.data.title} is added Successfully!`,
      });
    } else if (response.code === "error") {
      console.log(response);
      toast({
        description: `${response.error.message}!`,
      });
    }
    onOpenChange(false);
  };

  const updateGenreSuccess = async ({ id, title, descriptions }: Genre) => {
    const response = await putGenre({ id, title, descriptions });
    if (response.code === "success") {
      console.log(response.data);
      toast({
        title: "Genre Updated!",
        description: `${response.data.title} is updated Successfully!`,
      });
    } else if (response.code === "error") {
      console.log(response);
      toast({
        description: `${response.error.message}!`,
      });
    }
    onOpenChange(false);
  };

  const onSubmit: SubmitHandler<GenreFormFields> = async (value) => {
    if (genre) {
      const { title, descriptions } = value;
      updateGenreSuccess({ id: genre.id, title, descriptions });
    } else {
      createGenreSuccess(value);
    }
  };

  useEffect(() => {
    if (genre) {
      form.reset({
        title: genre.title,
        descriptions: genre.descriptions,
      });
    } else {
      form.reset();
    }
  }, [isOpen, genre]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Genre</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-10">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl">
            {genre ? "Update a new genre" : "Create a new genre"}
          </DialogTitle>
          <DialogDescription>
            Here's a list of your tasks for this month!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Horror" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="descriptions"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            variant="secondary"
            type="button"
            className="w-full"
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            Add Genre
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddGenreForm;
