import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './Components/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Carousel />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
