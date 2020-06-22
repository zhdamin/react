import React,{ Component} from 'react'
import Table from './Table'

class App extends Component{
    render(){

        const characters = [
            {
                name:'Charlie',
                Job:'Janitor'
            },
            {
                name:'dffdada',
                Job:'dafsaf'
            },
            {
                name:'sgsV',
                Job:'GLABVA'
            },
            {
                name:'HGVKJH',
                Job:'augova'
            }
        ]
        return(
            // <div className="App">
            //     <h1>hello React</h1>
            // </div>
            <div className="container">
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App