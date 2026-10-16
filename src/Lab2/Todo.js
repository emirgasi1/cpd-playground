import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Install Expo Go', done: true },
    { id: '2', title: 'Finish Lab 2', done: false },
  ]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const trimmed = text.trim();
    if (trimmed === '') return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title: trimmed, done: false },
    ]);
    setText('');
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

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{left} left</Text>

      <View style={styles.row}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="New task"
          style={[styles.input, { flex: 1 }]}
        />
        <Pressable onPress={addTodo} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      {todos.length === 0 ? (
        <Text style={styles.muted}>No tasks yet</Text>
      ) : (
        todos.map((todo) => (
          <View key={todo.id} style={styles.card}>
            <View style={styles.row}>
              <Pressable onPress={() => toggleTodo(todo.id)} style={{ flex: 1 }}>
                <Text
                  style={
                    todo.done
                      ? [styles.title, { textDecorationLine: 'line-through' }]
                      : styles.title
                  }
                >
                  {todo.title}
                </Text>
              </Pressable>
              <Pressable onPress={() => removeTodo(todo.id)} style={styles.button}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        ))
      )}
    </View>
  );
}