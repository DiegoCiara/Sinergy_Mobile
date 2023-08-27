import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PublicationsList } from './components/PublicationsList';

export default function App() {
  return (
    <View style={styles.container}>
      <PublicationsList/>
      <StatusBar backgroundColor='#6343EF'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
