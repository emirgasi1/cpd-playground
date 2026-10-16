import { useState } from 'react';
import { Text, View } from 'react-native';
import AddTodo from './AddTodo';
import FilterBar from './FilterBar';
import { styles } from './styles';
import TodoItem from './TodoItem';

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);
  const [filter, setFilter] = useState('all');

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title, done: false },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const left = todos.filter((t) => !t.done).length;

  const visible = todos.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{left} left</Text>

      <AddTodo onAdd={addTodo} />

      <FilterBar filter={filter} onChange={setFilter} />

      {todos.length === 0 ? (
        <Text style={styles.muted}>No tasks yet</Text>
      ) : visible.length === 0 ? (
        <Text style={styles.muted}>No tasks yet</Text>
      ) : (
        visible.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))
      )}
    </View>
  );
}