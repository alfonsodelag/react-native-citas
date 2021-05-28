/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const App: () => Node = () => {
  return (
    <>
      {/* En React Native no se usa <h1></h1> ni <p></p> etc todo se hace con <Text></Text> */}
      <Text style={styles.encabezado}>Hola Mundo</Text>
    </>
  );
};

// ! Así se crean clases en React Native. Debes usar syntaxis de CSS escrito en JAVASCRIPT
const styles = StyleSheet.create({
  encabezado: {
    textAlign: "center",
    // ! Tan solo con poner 100 se entiende que son 100px
    marginTop: 100,
  }
});

export default App;
