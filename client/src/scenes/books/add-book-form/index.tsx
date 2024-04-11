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
import { Book, BookFormFields, BookSchema } from "@/types/book";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddBookFormProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  book: Book | null;
}

const AddBookForm = ({ isOpen, book, onOpenChange }: AddBookFormProps) => {
  const form = useForm<BookFormFields>({
    resolver: zodResolver(BookSchema),
    defaultValues: {
      title: "",
      author: "",
      language: "",
      publishedDate: "",
      publishedBy: "",
      description: "",
    },
    mode: "onChange",
  });

  const addForm = (value: BookFormFields) => {
    axios
      .post("http://localhost:3000/api/v1/books", {
        title: value.title,
        author: value.author,
        language: value.language,
        published: value.publishedDate,
        // publishedBy: value.publishedBy,
        descriptions: value.description,
        genres: "Horror",
      })
      .then(function (response) {
        console.log(response.data);
        toast({
          title: "Book Added!",
          description: `${response.data.title} is added Successfully!`,
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
    onOpenChange(false);
  };
  const updateBook = (value: BookFormFields) => {
    const { id } = book;
    axios
      .put(`http://localhost:3000/api/v1/books/${id}`, {
        title: value.title,
        author: value.author,
        language: value.language,
        published: value.publishedDate,
        descriptions: value.description,
      })
      .then(function (response) {
        console.log(response.data);
        toast({
          title: "Book Updated!",
          description: `${response.data.title} is Updated Successfully!`,
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
    onOpenChange(false);
  };

  const onSubmit: SubmitHandler<BookFormFields> = (value) => {
    console.log(value);

    if (book) {
      updateBook(value);
      console.log(book.id);
    } else {
      addForm(value);
    }
  };

  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        language: book.language,
        description: book.descriptions,
        publishedBy: "",
      });
    } else {
      form.reset();
    }
  }, [isOpen, book]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg p-12">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl">Create a new Book</DialogTitle>
          <DialogDescription>
            Here's a list of your tasks for this month!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-7">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="The Poppy War" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="author"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Rebecca F. Kuang" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="language"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <Input placeholder="English" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="publishedBy"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Published By</FormLabel>
                  <FormControl>
                    <Input placeholder="Publisher name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="description"
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
            // disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            Add Book
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookForm;
