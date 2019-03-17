import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Role extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        return {
            headerTitle: 'Role',
            headerRight: <Button title="Save" onPress={() => state.params.handleSave()} />,
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            role: null
        }
    }

    render() {
        const { role } = this.state;
        return (
            <View style={styles.container}>
                <CheckBox
                    center
                    title='Are you a company?'
                    checked={role === 'company'}
                    onPress={() => this.setState({ role: 'company' })}
                />
                <CheckBox
                    center
                    title='Are you finding/waiting for tokens?'
                    checked={role === 'user'}
                    onPress={() => this.setState({ role: 'user' })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
