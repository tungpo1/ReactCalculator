import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/style';

const Display = () =>{
    const { number, storedNumber, functionType } = useContext(NumberContext);
    return (
        <DisplayStyles>
             <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
             <p>{!storedNumber ? 'ENTER NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
        </DisplayStyles>
    )
}

export default Display;