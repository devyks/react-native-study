import React, {Component} from "react";
import {Animated, StyleSheet, TextInput, View} from "react-native";

class TodoInput extends Component {

    constructor(props) {
        super(props);
    }

    animatedWidth = new Animated.Value(200);

    Animate = (value) => {
        Animated.timing(
            this.animatedWidth,
            {
                toValue: value,
                duration: 750
            }
        ).start();
    }

    render() {
        const {inputValue, inputChange} = this.props

        return (
            <View style={styles.inputContainer}>
                <Animated.View style={{width: this.animatedWidth}}>
                    <TextInput
                        value={inputValue}
                        style={styles.input}
                        onBlur={() => this.Animate(200)}
                        onFocus={() => this.Animate(325)}
                        placeholder={'What needs to be done?'}
                        placeholderTextColor={'#CACACA'}
                        selectionColor={'#666666'}
                        onChangeText={inputChange}
                        ref={input => this.input = input}
                    />
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // shadowColor: '#000000',
        // shadowOffset: {width: 2, height: 2}
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default TodoInput