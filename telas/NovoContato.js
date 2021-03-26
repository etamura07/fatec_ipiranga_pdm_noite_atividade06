import React, { Component, Fragment, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native'
import Cores from '../constantes/Cores'
import BotaoCabecalho from '../componentes/BotaoCabecalho'
import { HeaderBackButton } from 'react-navigation-stack'

const NovoContato = ({ navigation }) => {
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);
  
  const handleNome = (nome) => {
    setNome(nome);
  }
  const handleTelefone = (telefone) => {
    setTelefone(telefone);
  }

  const adicionarContato = () => {
    setContatos(contatos => {
      setContador (contador + 1);
      return [{key: contador.toString(), value: 'Nome: ' + nome + ' / ' + 'Telefone: ' + telefone}, ...contatos];
    })
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <TextInput  
          placeholder="Digite o nome..."
          style={styles.contatoTextInput}
          onChangeText={handleNome}
        />
        <TextInput 
          placeholder="Digite o telefone..."
          style={styles.contatoTextInput}
          onChangeText={handleTelefone}
        />
        <View
          style={styles.contatoInputButton}
        >
        <Button     
          style = {styles.button}     
          title="+"
          onPress={adicionarContato}
        />
        </View>
        <View
          style={styles.contatoInputButton}
        >
        <Button 
          style = {styles.button} 
          title = "Ver Lista"
          onPress={() => navigation.navigate('ListaContatos', {contatos: contatos})}
        >
        </Button>
        </View>
      </View>
    </ScrollView>
  )
}

NovoContato.navigationOptions = () => {
  return {
    headerLeft: null
  }
}


export default NovoContato

const styles = StyleSheet.create({
  contatoInputButton: {
    padding: 5
  },

  form: {
    marginHorizontal: 40,
    marginTop: 20
  },
  titulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16
  },
  contatoTextInput: {
    borderBottomColor: "#DDD",
    borderBottomWidth: 2,
    marginBottom: 8,
    padding: 12,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  }
})
