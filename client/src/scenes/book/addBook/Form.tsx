import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, Label, TextArea } from "../../../components/ui";
import axios from "axios";
import { BookFields, BookSchema } from "../../../types/book";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFields>({ resolver: zodResolver(BookSchema) });

  const onSubmit: SubmitHandler<BookFields> = async (formData) => {
    console.log(formData);
    axios
      .post("http://localhost:3000/api/v1/books", {
        title: formData.title,
        author: formData.author,
        language: formData.language,
        published: formData.publishedDate,
        // publishedBy: formData.publishedBy,
        descriptions: formData.description,
        genres: "Horror",
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col gap-8 "
    >
      <div className="relative">
        <Label htmlFor="title">Book Title</Label>
        <Input
          type="text"
          id="title"
          {...register("title")}
          placeholder="The Poppy War"
        />
        {errors.title && <small>{errors.title.message}</small>}
      </div>
      <div className="relative">
        <Label htmlFor="author">Author Name</Label>
        <Input
          type="text"
          id="author"
          {...register("author")}
          placeholder="Rebecca F. Kuang"
        />
        {errors.author && <small>{errors.author.message}</small>}
      </div>
      <div className="relative">
        <Label htmlFor="language">Language</Label>
        <Input
          type="text"
          id="language"
          {...register("language")}
          placeholder="English"
        />
        {errors.language && <small>{errors.language.message}</small>}
      </div>
      <div className="flex gap-8">
        <div className="relative flex-1">
          <Label htmlFor="publishedDate">Published Date</Label>
          <Input
            type="date"
            id="publishedDate"
            {...register("publishedDate")}
          />
        </div>
        <div className="relative flex-1">
          <Label htmlFor="publishedBy">Published By</Label>
          <Input
            type="text"
            id="publishedBy"
            {...register("publishedBy")}
            placeholder="Publisher Name"
          />
        </div>
      </div>
      <div className="relative">
        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          {...register("description")}
          placeholder="About book"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
