import Form from "./Form";

const AddBook = () => {
  return (
    <div className="w-full p-12">
      <div>
        <h3 className="text-2xl font-bold">Add Book</h3>
        <p className="text-zinc-400">
          Here's a list of your tasks for this month!
        </p>
      </div>
      <div className="flex gap-12 mt-10">
        <Form />
        <div className="flex-1">Details</div>
      </div>
    </div>
  );
};

export default AddBook;
