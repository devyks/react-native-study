import React, {Component} from "react";
import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Mycomponent from "./components/Mycomponent";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import TabBar from "./components/TabBar";
let todoIndex = 0

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
        this.submitTodo = this.submitTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setType = this.setType.bind(this)
    }

    setType (type) {
        this.setState({type})
    }

    deleteTodo (todoIndex) {
        let {todos} = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({todos})
    }
    toggleComplete ( todoIndex ){
        let todos = this.state.todos
        todos.forEach((todo) => {
            if( todo.todoIndex === todoIndex){
                todo.complete = !todo.complete
            }
        })
        this.setState({todos})
    }

    submitTodo () {
        if(this.state.inputValue.match(/^\s*$/)){
            return
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++
        const todos = [...this.state.todos, todo]

        this.setState({todos, inputValue: ''}, () => {
            console.log('State: ', this.state)
        })

    }

    inputChange(inputValue){
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    }

    render() {

        const { inputValue, todos, type } = this.state

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
                    <TodoList
                        type={type}
                        toggleComplete={this.toggleComplete}
                        deleteTodo={this.deleteTodo}
                        todos={todos}/>
                    <Button submitTodo={this.submitTodo}/>
                </ScrollView>
                <TabBar type={type} setType={this.setType}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
});

export default App;