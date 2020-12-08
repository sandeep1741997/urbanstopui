import React from 'react'
import { Badge, Card, Table } from 'react-bootstrap';
function List(props) {
    return (
        <Card style={{ textAlign: "left" }}>
            <table >
                <tr>
                    <td>
                        <h5>Premium less than zero.
                <Badge variant="danger">High</Badge>{' '}</h5>
                        <p>MARKETING WORKFLOW1</p>
                    </td>
                    <td ><h5 style={{ color: "red" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5>Sum insured is less than zero <Badge variant="danger">High</Badge></h5>
                        <p>MARKETING WORKFLOW1</p>
                    </td>
                    <td ><h5 style={{ color: "red" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5>Icorrect city names & address <Badge variant="info">Med</Badge></h5>
                        <p>MARKETING WORKFLOW1</p>
                    </td>
                    <td ><h5 style={{ color: "blue" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5>Discharge before admission<Badge variant="danger">High</Badge></h5>
                        <p>MARKETING WORKFLOW1</p>
                    </td>
                    <td ><h5 style={{ color: "red" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5>Wrong telephone numbers <Badge variant="success">Low</Badge></h5>
                        <p>MARKETING WORKFLOW1</p>
                    </td>
                    <td ><h5 style={{ color: "green" }}>{props.currency}</h5></td>
                </tr>
            </table>
        </Card>
    )
}
export default List;