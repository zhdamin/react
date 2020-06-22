import React,{Component} from 'react'

const TableBody = props =>{
    // return <tbody />
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.Job}</td>
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
                </tr>
            </thead>
    )
}



class Table extends Component{
    render(){
        const { characterData } = this.props
        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}


export default Table





