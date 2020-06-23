import React,{ Component} from 'react'
import Table from './Table'
import From from './From'

class App extends Component{

    state = {
        characters: []
    }

    removeCharacter = index => {
        const {characters} = this.state

        this.setState(
            {
                characters:characters.filter((character,i) => {
                    return i !== index
                }),
            }
        )
    }

    //提交数据
    handleSubmit = character => {
        this.setState({characters:[...this.state.characters,character]})
    }

    

    render(){

        const {characters} = this.state

        return(
            // <div className="App">
            //     <h1>hello React</h1>
            // </div>
            <div className="container">
                <Table characterData={characters}
                removeCharacter={this.removeCharacter}/>
                <From handleSubmit={this.handleSubmit}/>
                {/* <input type="button" value="Submit" onClick={this.submitForm}></input> */}
            </div>
        )
    }
}

export default App