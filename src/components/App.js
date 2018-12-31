// import necessary libraries
import React, { Component } from 'react'
import axios from 'axios'

// url used for server
const BASE_URL = "http://localhost:3005"

// Main App - Root of component tree
class App extends Component {

    constructor() {

        super()

        // initialize state variables to track user & bot messages
        this.state = {

            // current user input - should update on any change to input
            userInput: "",

            // current bot reply - should update when send message button is clicked
            currentReply: "",

            // messages array - keeps track of message history
            messages: [
                { user: 'bot', message: 'hello' },
                { user: 'toren', message: 'greetings' },
            ],

        }

    }

    // function to update user input on component state
    updateUserInput(event) {
        this.setState({ userInput: event.target.value })
    }

    // function that sends an API request to the server with a message, server responds with bot's reply which is then set on state of component
    getBotReply(context) {

        axios.post(`${BASE_URL}/api/postmessage`, { user: 'toren', message: context.state.userInput }).then(response => {
            context.setState({ currentReply: response.data })
        }).catch(() => {
            context.setState({ currentReply: "No reply generated" })
        })

    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100vw",
                }}>

                <input
                    style={{
                        width: "100%",
                    }}
                    placeholder="enter your message to bot"
                    onChange={(event) => this.updateUserInput(event)} />

                <button
                    onClick={() => { this.getBotReply(this) }} >
                    SEND MESSAGE
                </button>

                {this.state.currentReply}
            </div>
        )
    }
}

export default App