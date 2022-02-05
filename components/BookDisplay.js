import React, {Component} from "react";
import {Text} from "react-native";

class BookDisplay extends Component {
    render() {
        const { book, updateBook } = this.props
        return (
            <>
                <Text>{ this.props.book }</Text>
                <Text onPress={updateBook}>
                    {book}
                </Text>
            </>
        )
    }
}

export default BookDisplay;