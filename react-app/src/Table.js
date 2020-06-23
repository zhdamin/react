import React /*,{Component}*/ from 'react'


const TableBody = props =>{
    // return <tbody />
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    
return <tbody>{rows}</tbody>
}


const TableHeader = () => {
    return(
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
    )
}



// class Table extends Component{
//     render(){
//         const { characterData } = this.props
//         return(
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }


const Table = (props) => {

    const {characterData,removeCharacter} = props

    return(     
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter = {removeCharacter}/>
        </table>        
    )
}

export default Table





