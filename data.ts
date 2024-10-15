export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

// Hover over TodoCreate to see the type does not have the id prop.
export type TodoCreate = Omit<Todo, "id" | "completed">; // Omit/Pick

export const mockedToDos: Todo[] = [
  {
    id: "1",
    text: "Buy groceries",
    completed: false,
  },
  {
    id: "2",
    text: "Read a book",
    completed: true,
  },
  {
    id: "3",
    text: "Write a blog post",
    completed: false,
  },
  {
    id: "4",
    text: "Write a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog post",
    completed: false,
  },
];
