import React, {Component} from 'react';

import Table from './Table';
import Form from './Forms';

class App extends Component {
    state = {
        characters: []
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    render () {
        const {characters} = this.state;

        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }

    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((c, i) => {
                return i != index;
            })
        })
    }
}

export default App