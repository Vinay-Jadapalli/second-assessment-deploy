import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import './PrintData.css'

const  PrintData = ()  =>{
    const [state,setState]=useState([]);
    const [data,setData]=useState(30);

    const fetchData = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=35")
        setState(response.data.results)
    }
    const loadMore =()=>{
        setData(data + 30)
    }

    useEffect (() =>{
        fetchData()
    },[])

    const renderData =(person, index) => {
        return(
            <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={person.picture.large} />
                <Card.Body>
                    <Card.Title>
                        {person.name.first} {person.name.last}
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{person.email}</li>
                            <li>{person.cell}</li>
                            <li>{person.gender}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="printdata">
            {state.slice(30, data).map(renderData)}
            {data<state.length&&(
                <button class="btn btn-primary" onClick={loadMore}>Get Data</button>
            )}

        </div>
    )
}
export default PrintData;