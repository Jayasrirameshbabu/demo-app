import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {todoCardProps} from '../types/types';
import {colors} from '../themes/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {toggleIsDone} from '../redux/TodoSlice';

const TodosCard = ({todo, deleteTodo, editTodo}: todoCardProps) => {
  const dispatch = useDispatch();

  const handleToggleIsDone = () => {
    dispatch(toggleIsDone(todo.id));
  };

  return (
    <View style={styles.todoContainer}>
      <Pressable style={styles.todo} onPress={handleToggleIsDone}>
        {todo.isDone ? (
          <AntDesign size={20} name="checkcircle" color={colors.purple} />
        ) : (
          <Entypo size={20} name="circle" color={colors.gray[300]} />
        )}
        <Text style={[styles.todoName]}>{todo.name}</Text>
      </Pressable>
      <Pressable
        onPress={() => editTodo(todo.id, todo.name)}
        style={styles.delete}>
        <AntDesign name="edit" size={20} color={colors.gray[300]} />
      </Pressable>
      <Pressable onPress={() => deleteTodo(todo.id)} style={styles.delete}>
        <AntDesign name="delete" size={20} color={colors.gray[300]} />
      </Pressable>
    </View>
  );
};

export default TodosCard;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: colors.gray[500],
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    padding: 12,
  },
  todoName: {
    color: colors.gray[100],
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginLeft: 8,
  },
  isDone: {
    textDecorationColor: colors.gray[300],
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',

    color: colors.gray[300],
  },
  delete: {
    padding: 12,
  },
});
