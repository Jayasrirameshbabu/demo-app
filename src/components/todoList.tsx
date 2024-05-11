import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TodosCard from './TodosCard';

import {toggleIsDone} from '../redux/TodoSlice';
import {RootState} from '../redux/store';

// import {useTodosContext} from '../context/todoContext';

export function TodoList({editTodo, deleteTodo}: any) {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleToggleIsDone = (todoId: any) => {
    dispatch(toggleIsDone(todoId));
  };

  // const {todos, deleteTodo, toggleIsDone} = useTodosContext();
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={todo => (
          <View style={styles.todo}>
            <TodosCard
              todo={todo.item}
              deleteTodo={deleteTodo}
              handleDOne={handleToggleIsDone}
              editTodo={editTodo}
            />
          </View>
        )}
        keyExtractor={todo => todo.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginBottom: 8,
  },
});
