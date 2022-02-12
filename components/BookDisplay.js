import React, {Component} from "react";
import {View, Text} from "react-native";

class BookDisplay extends Component {
    render() {
        const { book, updateBook } = this.props
        return (
            <View>
                <Text>{ this.props.book }</Text><br/><br/><br/>
                <Text onPress={updateBook}>
                    {book}
                </Text>
            </View>
        )
    }
}

export default BookDisplay;