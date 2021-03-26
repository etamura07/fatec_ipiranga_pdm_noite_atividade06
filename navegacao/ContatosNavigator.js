import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Cores from '../constantes/Cores'
import NovoContato from '../telas/NovoContato';
import ListaContatos from '../telas/ListaContatos'

const ContatosNavigator = createStackNavigator (
  {
    ListaContatos: ListaContatos,
    NovoContato: NovoContato,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
        headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
      }
    }
  }
)

export default createAppContainer(ContatosNavigator);

//<LugaresNavigator /