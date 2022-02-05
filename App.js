import React, {Component} from "react";
import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Mycomponent from "./components/Mycomponent";
import Heading from "./components/Heading";
import Input from "./components/Input";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
    }

    inputChange(inputValue){
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    }

    render() {

        const { inputValue } = this.state

        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Mycomponent/>
                <StatusBar style="auto"/>
                <ScrollView keyboardShouldPersistTaps='always'
                            style={styles.content}>
                    <Heading/>
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)}/>
                </ScrollView>
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
    content: {
        flex: 1,
        paddingTop: 60
    }
});

export default App;