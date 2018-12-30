import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:3005"

class App extends Component {

    constructor() {

        super()

        this.state = {
            userInput: "",
            currentReply: "",
            messages: [
                { user: 'bot', message: 'hello' },
                { user: 'toren', message: 'greetings' },
            ]
        }

    }

    updateUserInput(event) {
        this.setState({ userInput: event.target.value })
    }

    getBotReply(context) {

        axios.post(`${BASE_URL}/api/postmessage`, { user: 'toren', message: context.state.userInput }).then(response => {
            context.setState({ currentReply: response.data })
        }).catch(() => {
            context.setState({ currentReply: "No reply generated" })
        })

    }

    render() {
        return (
            <div>
                <input placeholder="enter your message to bot" onChange={(event) => this.updateUserInput(event)} />
                <button onClick={() => { this.getBotReply(this) }} >SEND MESSAGE</button>
                {this.state.currentReply}
            </div>
        )
    }
}

export default App