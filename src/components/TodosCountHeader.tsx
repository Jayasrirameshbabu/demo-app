import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {todoCounterProps} from '../types/types';
import {colors} from '../themes/colors';
import Line from './Line';
export function TodosCountHeader({todosCount, todosDone}: todoCounterProps) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.text}>Total Todos :{todosCount}</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.text}>Todos Done :{todosDone}</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Line />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: colors.blue,
    marginRight: 8,
  },
  count: {
    backgroundColor: colors.gray[400],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  countText: {
    color: colors.gray[400],
    fontSize: 12,
  },
});
