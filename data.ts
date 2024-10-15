export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const mockedToDos: Todo[] = [
  {
    id: 1,
    text: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    text: "Read a book",
    completed: true,
  },
  {
    id: 3,
    text: "Write a blog post",
    completed: false,
  },
  {
    id: 4,
    text: "Write a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog postWrite a blog post",
    completed: false,
  },
];
