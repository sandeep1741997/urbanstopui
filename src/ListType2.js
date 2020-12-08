import React from 'react'
import { Badge, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faHome, faList, faPlayCircle, faPlus, faProjectDiagram, faSearch } from '@fortawesome/free-solid-svg-icons'

function ListType2(props) {
    return (
        <Card style={{ textAlign: "left" }}>
            <table >
                <tr>
                    <td>
                        <h5><FontAwesomeIcon icon={faProjectDiagram} color="blue"/>
                        &nbsp; Workflow - Marketing data 1</h5>
                        <p>finished running and 10,000 data has been detected</p>
                    </td>
                    <td ><h5 style={{ color: "red" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5> <FontAwesomeIcon icon={faList} color="blue"/> Data Library earthquakes.csv added
                </h5>
                        <p>earthquakes.csv added and data gathering begun</p>
                    </td>
                    <td ><h5 style={{ color: "red" }}>{props.currency}</h5></td>
                </tr>
                
                <tr>
                    <td>
                        <h5><FontAwesomeIcon icon={faCommentDots} color="blue"/> @deleeps tagged you in a comment</h5>
                        <p>have a look this dataset</p>
                    </td>
                    <td ><h5 style={{ color: "blue" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5><FontAwesomeIcon icon={faSearch} color="blue"/> Error 10,000 errors detected</h5>
                        <p>New error begun in marketing data 1</p>
                    </td>
                    <td ><h5 style={{ color: "red" }}>{props.currency}</h5></td>
                </tr>
                <tr>
                    <td>
                        <h5><FontAwesomeIcon icon={faPlayCircle} color="blue"/> Job - Marketing Data 1 successfully run</h5>
                        <p>finished running and 10,000 data has been detected</p>
                    </td>
                    <td ><h5 style={{ color: "green" }}>{props.currency}</h5></td>
                </tr>
            </table>
        </Card>
    )
}
export default ListType2;