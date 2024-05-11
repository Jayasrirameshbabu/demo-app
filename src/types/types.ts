export interface Todo {
  id: string | any;
  name: string;
  isDone: boolean;
  createdAt: string;
}

export type TodosState = {
  Todos: Todo[];
};
export type todoCounterProps = {
  todosCount: number;
  todosDone: number;
};

export type todoCardProps = {
  todo: Todo;
  handleDOne: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, name: string) => void;
};

export type homeProps = {
  id: string;
  name: string;
};
