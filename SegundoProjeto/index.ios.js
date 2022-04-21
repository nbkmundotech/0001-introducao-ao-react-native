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
  TextInput,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

class SegundoProjeto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      idade: null,
      avatar_url: "",
    };
  }
  // Lifecycle method
  componentDidMount() {
    this.atualizarInfo();
  }
  atualizarInfo() {
    fetch('http://localhost:3000/pessoas/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          nome: responseJson.nome,
          idade: '' + responseJson.idade,
          avatar_url: responseJson.avatar_url,
        });
      });
  }
  criarPessoa() {
    fetch('http://localhost:3000/pessoas', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: this.state.nome,
        idade: this.state.idade,
        avatar_url: 'https://ziluolan.files.wordpress.com/2014/09/4615c-avatar-dog-so-cute17.jpg'
      })
    });
  }
  editarPerfil() {
    console.log("Função editarPerfil() chamada");

    fetch('http://localhost:3000/pessoas/1', {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: this.state.nome,
        idade: this.state.idade,
        avatar_url: this.state.avatar_url,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson))
    ;
  }
  deletarPerfil() {
    fetch('http://localhost:3000/pessoas/1', {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({
          nome: '',
          idade: null,
          avatar_url: '',
        });
      })
    ;
  }
  render() {
    return (
      <View style={styles.container}>

        {/*

        <Text>Perfil</Text>
        <Image source={{ uri: this.state.avatar_url}} style={styles.avatar} />

        <Text style={styles.label}>Nome</Text>
        <Text>{this.state.nome}</Text>

        <Text style={styles.label}>Idade</Text>
        <Text>{this.state.idade}</Text>

        <TouchableHighlight
          style={styles.botao}
          onPress={this.atualizarInfo.bind(this)}
        >
          <Text style={styles.textoDoBotao}>Atualizar</Text>
        </TouchableHighlight>

        */}

        <Text>Criar Perfil</Text>
        <Image source={{ uri: this.state.avatar_url}} style={styles.avatar} />

        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome"
          style={styles.campoDeTexto}
          value={this.state.nome}
          onChangeText={nome => this.setState({ nome })}
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          placeholder="Quantos anos você tem?"
          style={styles.campoDeTexto}
          value={this.state.idade}
          onChangeText={idade => this.setState({ idade })}
        />

        {/*
        <TouchableHighlight
          style={styles.botao}
          onPress={this.criarPessoa.bind(this)}
        >
          <Text style={styles.textoDoBotao}>Criar</Text>
        </TouchableHighlight>
        */}

        <View style={styles.botoesDeBaixo}>
          <TouchableHighlight
            style={styles.botao}
            onPress={() => this.editarPerfil()}
          >
            <Text style={styles.textoDoBotao}>Editar</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.botao}
            onPress={this.deletarPerfil.bind(this)}
          >
            <Text style={styles.textoDoBotao}>Deletar</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  botao: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 12,
    backgroundColor: 'gray',
  },
  textoDoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
  },
  campoDeTexto: {
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    margin: 12,
  },
  botoesDeBaixo: {
    flexDirection: 'row',
    alignSelf: 'stretch', // main axis
    justifyContent: 'space-around'
  }
});

AppRegistry.registerComponent('SegundoProjeto', () => SegundoProjeto);
