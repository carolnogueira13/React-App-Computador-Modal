import { StyleSheet, View } from 'react-native';
import Titulo from './src/componentes/Titulo/titulo';
import Imagens from './src/componentes/Imagens/imagens';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Imagens></Imagens>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
