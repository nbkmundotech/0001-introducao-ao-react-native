/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';

class PrimeiroProjeto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: "Clica eu :D",
      texto: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.texto}</Text>

        <Image source={require('./react-logo.png')} style={styles.imagem} />

        <TextInput
          style={styles.inputText}
          placeholder="Digite alguma coisa"
          onChangeText={(texto) => this.setState({ texto })}
          value={this.state.texto}
          autoCorrect={false}
          secureTextEntry={true}
        />

        <TouchableHighlight
          style={styles.botao}
          onPress={() => this.setState({ mensagem: "Fui clicado!" })}
        >
          <Text style={styles.textoDoBotao}>{this.state.mensagem}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
    borderWidth: 1,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  mensagem: {
    backgroundColor: 'blue',
    color: 'white',
  },
  texto: {
    color: 'red',
    backgroundColor: 'yellow'
  },
  imagem: {
    width: 300,
    height: 300,
  },
  botao: {
    borderWidth: 2,
    padding: 15,
    borderColor: 'red',
    borderRadius: 16,
    backgroundColor: 'antiquewhite',
  },
  textoDoBotao: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputText: {
    height: 50,
    borderWidth: 1,
    padding: 12,
  }
});

AppRegistry.registerComponent('PrimeiroProjeto', () => PrimeiroProjeto);
