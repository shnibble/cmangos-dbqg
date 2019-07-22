import React from 'react'
import Styled from 'styled-components'
import newId from '../utils/newId'

const Container = Styled.div`
    position: relative;
    width: 100%;
    height: 44px;
    margin: 5px 0;
`
const Input = Styled.input`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 15px;
    padding: 18px 5px 5px 10px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.09);

    &:focus {
        outline: none;
        border-color: rgba(0,148,255,0.15);
    }

    &:focus + label, &.entered + label {
        top: 3px;
        left: 5px;
        color: #000;
        font-size: 10px;
    }

    &:disabled {
        color: transparent;
        background: #e6e6e6;

        + label {
            top: 18px;
            left: 10px;
            font-size: 15px;
            color: #ccc;
        }
    }
`
const Label = Styled.label`
    position: absolute;
    top: 18px;
    right: 15px;
    left: 10px;
    height: 15px;
    font-size: 15px;
    color: #ccc;
    transition: all .15s ease-in;
`

const NumberField = ({ label, val, enabled=true, readonly=false, onChangeFunction }) => {
    const uniqueId = newId()
    return (
        <Container>
            <Input type='number' id={`labelForNumberField_${uniqueId}`} className={(val.length > 0)?'entered':null} value={val} disabled={!enabled} readOnly={readonly} onChange={onChangeFunction}  />
            <Label htmlFor={`labelForNumberField_${uniqueId}`}>{label}</Label>
        </Container>
    )
}

export default NumberField