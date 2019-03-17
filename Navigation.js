import {
    createAppContainer, createStackNavigator,
} from 'react-navigation';

import Login from './Screens/Login';
import Role from './Screens/Role'
import Companyform from './Screens/CompanyForm'

const StackNavigator = createStackNavigator({
    Companyform: {
        screen: Companyform
    },
    Role: {
        screen: Role
    },
    Login: {
        screen: Login
    },

})

const Navigation = createAppContainer(StackNavigator)

export default Navigation;