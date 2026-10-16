import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const FILTERS = ['all', 'active', 'done'];

export default function FilterBar({ filter, onChange }) {
  return (
    <View style={styles.row}>
      {FILTERS.map((f) => (
        <Pressable
          key={f}
          onPress={() => onChange(f)}
          style={[styles.button, filter === f && { backgroundColor: '#B23A48' }]}
        >
          <Text style={styles.buttonText}>{f}</Text>
        </Pressable>
      ))}
    </View>
  );
}