import {
  Button,
  Heading,
  Input,
  Label,
  Text,
  TextArea,
} from "../../../components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { GenreFields, GenreSchema } from "../../../types/genre";

const AddGenre = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenreFields>({
    resolver: zodResolver(GenreSchema),
  });

  const onSubmit: SubmitHandler<GenreFields> = (formData) => {
    axios
      .post("http://localhost:3000/api/v1/genres", {
        title: formData.title,
        descriptions: formData.descriptions,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col gap-10 border border-zinc-800 p-8 rounded-lg">
      <div>
        <Heading as="H5">Create Genre</Heading>
        <Text>Add a new genre.</Text>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="relative">
          <Label htmlFor="title">Title</Label>
          <Input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Fiction"
          />
          {errors.title && <small>{errors.title.message}</small>}
        </div>
        <div className="relative">
          <Label htmlFor="description">Description</Label>
          <TextArea
            {...register("descriptions")}
            id="description"
            placeholder="About genre"
            className="h-[120px]"
          />
        </div>
        <Button type="submit">Add Genre</Button>
      </form>
    </div>
  );
};

export default AddGenre;
