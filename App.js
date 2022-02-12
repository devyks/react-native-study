import React, {Component} from "react";
import {Animated, Easing, StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';
import Mycomponent from "./components/Mycomponent";
import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TabBar from "./components/TabBar";
import Button from "./components/Button";
import Parent from "./components/Parent";

let todoIndex = 0

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
            loading: true
        }
        this.SubmitTodo = this.SubmitTodo.bind(this)
        this.ToggleComplete = this.ToggleComplete.bind(this)
        this.DeleteTodo = this.DeleteTodo.bind(this)
        this.SetType = this.SetType.bind(this)
    }

    SetType(type) {
        this.setState({type})
    }

    DeleteTodo(todoIndex) {
        let {todos} = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({todos})
    }

    ToggleComplete(todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
        this.setState({todos})
    }

    SubmitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
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

    InputChange(inputValue) {
        console.log(' TodoInput Value: ', inputValue);
        this.setState({inputValue});
    }

    componentDidMount() {
        this.Animate();
        setTimeout(() => this.setState({loading: false}), 2000)
    }

    AnimatedRotation = new Animated.Value(0);

    Animate = () => {
        Animated.timing(
            this.AnimatedRotation,
            {
                toValue: 1,
                duration: 1800,
                easing: Easing.linear
            }
        ).start()
    }

    render() {
        const Rotation = this.AnimatedRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const {loading, inputValue, todos, type} = this.state

        if (loading) {
            return (
                <View style={styles.container2}>
                    <Animated.Image
                        source={require('./assets/35633-200.png')}
                        style={{width: 40, height: 40, transform: [{rotate: Rotation}]}}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Parent/>
                    <Text>Open up App.js to start working on your app!</Text>
                    <Mycomponent/>
                    <StatusBar style="auto"/>
                    <ScrollView keyboardShouldPersistTaps='always'
                                style={styles.content}>
                        <Heading/>
                        <TodoInput
                            inputValue={inputValue}
                            inputChange={(text) => this.InputChange(text)}/>
                        <TodoList
                            type={type}
                            toggleComplete={this.ToggleComplete}
                            deleteTodo={this.DeleteTodo}
                            todos={todos}/>
                        <Button submitTodo={this.SubmitTodo}/>
                    </ScrollView>
                    <TabBar type={type} setType={this.SetType}/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container2: {
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