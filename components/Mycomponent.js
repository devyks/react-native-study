import React, {Component} from "react";
import {Text, View} from 'react-native'
import BookDisplay from "./BookDisplay";

class Mycomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2018,
            leapYear: true,
            topics: ['React', 'React Native', 'JavaScript'],
            info: {
                paperback: true,
                length: '335 pages',
                type: 'programming'
            },
            book: 'React Native in Action'
        }
    }

    UpdateYear() {
        this.setState({
            year: this.state.year + 1
        })
    }

    UpdateBook() {
        this.setState({
            book: 'Express in Action'
        })
    }

    InitBook() {
        this.setState({
            book: 'React Native in Action'
        })
    }

    render() {
        const {book} = this.state
        let leapyear = <Text>This is not a leapyear!</Text>
        if (this.state.leapYear) {
            leapyear = <Text>This is a leapyear!</Text>
        }
        return (
            <View>
                <Text
                    onPress={() => this.UpdateYear()}>
                    The year is: {this.state.year}
                </Text>
                <Text>{this.state.year}</Text>
                <Text>Length: {this.state.info.length}</Text>
                <Text>Type: {this.state.info.type}</Text>
                {leapyear}
                <Text onPress={() => this.InitBook()}>init book text</Text>
                <Text>
                {
                    "\n"
                }
                </Text>
                <BookDisplay
                    updateBook={() => this.UpdateBook()}
                    book={book}/>
            </View>
        )
    }
}

export default Mycomponent