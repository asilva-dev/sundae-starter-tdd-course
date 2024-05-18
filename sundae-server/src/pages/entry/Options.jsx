import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOptions from './ScoopOptions';
import Row from 'react-bootstrap/Row';

export default function Options ({ optionType }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3030/${optionType}`)
        .then((response) => setItems(response.data))
        .catch((error) => {
            //TODO: handle error response
        })
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : null;
    
    const optionItem = items.map((item) => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)
    );

    return <Row>{optionItem}</Row>
}