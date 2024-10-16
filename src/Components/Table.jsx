import React, { Component } from "react";
import "../Styling/Table.css"
export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thead: [],
            tbody: []
        }
    }
    componentDidMount() {
        let api = fetch("https://jsonplaceholder.typicode.com/users");
        api.then(res => res.json()).then(val => {
            this.setState({ thead: Object.keys(val[0]).slice(0,4) })
            this.setState({ tbody: val })
        })
    }
    render() {
        console.log(this.state.thead);
        return (
            <>
                <table border={1}>
                    <thead>
                        <tr>
                            {this.state.thead.map((x,index) => <th key={index}>{x}</th>)}
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.tbody.map((x) => {
                            return (
                                <>
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.username}</td>
                                        <td>{x.email}</td>
                                    </tr>

                                </>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}