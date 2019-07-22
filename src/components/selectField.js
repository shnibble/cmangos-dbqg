import React from 'react'
import Styled from 'styled-components'
import newId from '../utils/newId'

const Container = Styled.div`
    position: relative;
    width: 100%;
    height: 44px;
    margin: 5px 0;
`
const Input = Styled.select`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 15px;
    padding: 18px 5px 5px 5px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.09);
    background: transparent;

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
            z-index: 1;
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
    z-index: -1;
`
const ReadOnlyInput = Styled.input`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 15px;
    padding: 18px 5px 5px 5px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.09);
    background: transparent;

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
            z-index: 1;
        }
    }
`

const SelectField = ({ label, val, options, enabled=true, readonly=false, onChangeFunction }) => {
    const uniqueId = newId()
    let valueName = ''
    if (readonly) {
        options.map((item) => {
            if (item.id === Number(val)) {
                valueName = item.value
                return true
            } else {
                return false
            }
        })
    }
    return (
        <Container>
            {(!readonly)
            ?
            <Input id={`labelForSelectField_${uniqueId}`} className={(val.length > 0)?'entered':null} value={val} disabled={!enabled} onChange={onChangeFunction}>
                {(enabled)?(options.map((item, index) => <option key={`item_option_${label}_${uniqueId}_${index}`} data-index={index} value={item.id}>{item.value}</option> )):null}
            </Input>
            :
            <>
                <input type='hidden' value={val} onChange={onChangeFunction} readOnly />
                <ReadOnlyInput type='text' id={`labelForSelectField_${uniqueId}`} className={(val.length > 0)?'entered':null} value={valueName} disabled={!enabled} readOnly />
            </>
            }
            <Label htmlFor={`labelForSelectField_${uniqueId}`}>{label}</Label>
        </Container>
    )
}

export default SelectField