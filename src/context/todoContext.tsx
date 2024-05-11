import React, {createContext, useContext, useState} from 'react';
import uuid from 'react-native-uuid';
export interface Todo {
  id: string;
  name: string;
  isDone: boolean;
  createdAt: Date;
}

export type TodoContextProps = {
  todos: Todo[];
  addNewTodo: (todoName: string) => void;
  deleteTodo: (todoId: string) => void;
  toggleIsDone: (todoId: string) => void;
};

type TodoProviderProps = {
  children: React.ReactNode;
};

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (todoName: string) => {
    setTodos(currentTodos => [
      ...currentTodos,
      {
        name: todoName,
        createdAt: new Date(),
        id: uuid.v4().toString(),
        isDone: false,
      },
    ]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId));
  };

  const toggleIsDone = (todoId: string) => {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === todoId) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      }),
    );
  };

  return (
    <TodoContext.Provider value={{todos, addNewTodo, deleteTodo, toggleIsDone}}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodosContext = () => {
  const context = useContext(TodoContext);
  return context;
};
