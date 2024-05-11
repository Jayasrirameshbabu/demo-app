import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {colors} from '../themes/colors';
import {TextInputComponent} from '../components/TextInputComponent';
import {AddButton} from '../components/AddButton';

import {TodosCountHeader} from '../components/TodosCountHeader';
import {TodoList} from '../components/todoList';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useDispatch} from 'react-redux';
import {deleteTodo, addNewTodo, editTodo, todoUpdate} from '../redux/TodoSlice';

const Home = () => {
  // get Todos from store

  const [isEdit, setIsEdit] = useState(false);
  const todos = useSelector((state: RootState) => state.todos);

  const hasNoTodos = !todos.length ?? [];
  const TodoTotal = todos.length;
  const todosDoneTotal = todos.filter(todo => todo.isDone).length;

  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [currentTodoId, setCurrentTodoId] = useState('');

  const handleAddNewTodo = () => {
    dispatch(addNewTodo(todoName));

    setTodoName('');
  };

  const handleDeleteTodo = (todoId: any) => {
    dispatch(deleteTodo(todoId));
  };

  const handleEditTodo = (todoId: string, name: string) => {
    dispatch(editTodo({todoId, name}));
    setIsEdit(true);

    setTodoName(name);
    setCurrentTodoId(todoId);
  };

  const handleUpdateTodo = () => {
    dispatch(todoUpdate({todoId: currentTodoId, name: todoName}));

    setIsEdit(false);
    setTodoName('');
    setCurrentTodoId('');
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <SafeAreaView style={styles.safeView}>
          <View style={styles.content}>
            <View style={styles.searchForm}>
              <View style={styles.inputContainer}>
                <TextInputComponent
                  value={todoName}
                  returnKeyLabel="Save"
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    handleAddNewTodo();
                  }}
                  onChangeText={value => setTodoName(value)}
                />
              </View>
              {isEdit ? (
                <AddButton iconName="checkcircle" onPress={handleUpdateTodo} />
              ) : (
                <AddButton iconName="pluscircle" onPress={handleAddNewTodo} />
              )}
            </View>
            <TodosCountHeader
              todosCount={TodoTotal}
              todosDone={todosDoneTotal}
            />
            {hasNoTodos ? (
              <View style={styles.board}>
                <Text style={{color: colors.blue}}>No todos yet !</Text>
              </View>
            ) : (
              <View style={styles.todoList}>
                <TodoList
                  deleteTodo={handleDeleteTodo}
                  editTodo={handleEditTodo}
                />
              </View>
            )}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    backgroundColor: colors.gray[600],
  },
  content: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: colors.gray[600],
  },
  board: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  todoList: {
    marginTop: 20,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    marginRight: 4,
  },
  searchForm: {
    flexDirection: 'row',
    marginTop: -27,
  },
});
