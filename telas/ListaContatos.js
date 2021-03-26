import React from 'react'
import { StyleSheet, Text, View , Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Cores from '../constantes/Cores'

import BotaoCabecalho from '../componentes/BotaoCabecalho'

const ListaContatos = ({ navigation }) => {
  return (
    <View>
          <View
      style={{width: '80%', alignSelf: 'center'}}
    >
     <FlatList 
        data={navigation.getParam('contatos')}
        renderItem = {contato => (
          <View style={styles.itemNaLista}>
            <Text>{contato.item.value}</Text>
          </View>
        )}
      />
    </View>
    </View>
  )
}

ListaContatos.navigationOptions = dadosNav => {
  return {
    headerTitle: "Lista Contatos",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
          <Item
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => dadosNav.navigation.navigate ("NovoContato")}
          />
        </HeaderButtons>
      )
    }
  }
}


export default ListaContatos

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})
