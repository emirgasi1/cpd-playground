import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const likeLabel = liked ? 'Liked' : 'Like';
  const likeCount = liked ? 13 : 12;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Count: {count}</Text>

      <View style={styles.row}>
        <Pressable
          disabled={count === 0}
          onPress={() => setCount((c) => c - 1)}
          style={[styles.button, count === 0 && { opacity: 0.4 }]}
        >
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount((c) => c + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>

        <Pressable
          onPress={() => setCount(0)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => setLiked((l) => !l)}
        style={[styles.button, liked && { backgroundColor: '#B23A48' }]}
      >
        <Text style={styles.buttonText}>
          {likeLabel} ({likeCount})
        </Text>
      </Pressable>
    </View>
  );
}