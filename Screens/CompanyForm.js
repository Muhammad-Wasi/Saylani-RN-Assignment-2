import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import { ImagePicker } from 'expo';
import DatePicker from 'react-native-datepicker';


export default class Companyform extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        return {
            headerTitle: 'Form',
            headerRight: <Button title="Save" onPress={() => navigation.navigate('CompanyForm')} />,
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            image: [],

            cond: false,
            name: '',
            email: '',
            password: '',
            ConfPassword: ''
        }

        this.signup = this.signup.bind(this);

    }

    signup() {
        const { cond, name, email, password, ConfPassword } = this.state;
        if (name && email && password && password === ConfPassword) {
            this.setState({ cond: true })
            this.props.actions.signupAction({ name, email, password })
                .then(success => {
                    this.setState({ cond: false })
                    this.props.navigation.navigate('Signup')
                    console.log('success*****', success)
                })
                .catch(error => {
                    this.setState({ cond: false })
                    console.log('error********', error)
                })
        }
        else {
            if (!name) {

            }
            else if (name && !email) {

            }
            else if (name && email && !password) {

            }
            else if (name && email && password && !ConfPassword) {

            }
            else if (name && email && password && password === ConfPassword) {

            }
        }
    }


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);
        if (!result.cancelled) {
            console.log('result.uri', result.uri)
            this.setState({ image: [...image, result.uri] });
        }
    };

    render() {
        const { cond, name, image } = this.state;
        return (
            // <LinearGradient
            //     colors={['#ffffff', '#ffffff', '#ffffff']}
            //     style={{ height: '100%', justifyContent: 'center' }}
            // >
            <View style={{ position: 'relative' }}>
                <View>
                    <Text style={styles.label}>Company Name</Text>
                    <TextInput
                        style={styles.Inputs}
                        placeholder="Username"
                        value={name}
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                    <Text style={styles.label}>Since</Text>

                    <Button
                        title="Pick an image from camera roll"
                        onPress={this._pickImage}
                    />
                    {
                        image.length ?
                        image.map(item => {
                            return <Image source={{ uri: item }} style={{ width: 200, height: 200 }} />
                        })
                        :
                        null
                    }

                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        // maxDate="2016-06-01"
                        maxDate={new Date().toDateString()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                    {
                        cond ?
                            <TouchableOpacity disabled style={styles.button}>
                                <Text style={styles.login}>Add</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this.signup} style={styles.button}>
                                <Text style={styles.login}>Add</Text>
                            </TouchableOpacity>
                    }
                </View>

                <View style={styles.loader}>
                    {
                        cond &&
                        <ActivityIndicator size="large" color="#57b847" />

                    }
                </View>
            </View>

            // </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    LinearGradient: {
        justifyContent: 'center'
    },
    label: {
        fontSize: 20,
        margin: 5,
        paddingLeft: 15,
        marginHorizontal: 40,
    },
    Inputs: {
        height: 45,
        fontSize: 18,
        paddingLeft: 18,
        margin: 5,
        marginHorizontal: 40,
        borderRadius: 100,
        backgroundColor: '#ebebeb',
        color: 'black',
    },

    button: {
        height: 45,
        marginTop: 25,
        marginHorizontal: 40,
        borderRadius: 100,
        backgroundColor: '#57b847',
        justifyContent: 'center',
    },

    login: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center'
    },
    loader: {
        position: 'absolute',
        left: '45%',
        top: '45%'
    }
});
