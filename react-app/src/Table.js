import React,{Component} from 'react'

const TableBody = () =>{
    return <Table />
}


const TableHeader = () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
        </table>
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





