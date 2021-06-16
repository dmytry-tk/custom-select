import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import OptionsList from "./options-list/options-list";
import "./custom-select.sass"
import arrow from '../../src/down-arrow.png'

const CustomSelect = (props) => {
    const {
        onChange, onBlur, onFocus, value, defaultValue, id, name,
        disabled, placeholder, options, className,
    } = props;

    const [selectedOption, setSelectedOption] = useState(value? value : defaultValue? defaultValue : "")
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        if(value !== undefined) setSelectedOption(value)
    }, [value])

    const localOnChange = (obj) => {
        if(disabled) return;
        if(!value) setSelectedOption(obj?.value);
        onChange(obj);
    }

    const localOnBlur = () => {
        if(disabled) return;
        setShowOptions(false);
        onBlur();
    }

    const localOnFocus = () => {
        if(disabled) return;
        setShowOptions(true);
        onFocus();
    }

    const findValue = (val) => {
        const res = options.find(({value, name}) => {
            return value === val? name : false;
        })
        return res?.value? res.name : "";
    }

    return(
        <>
            <div
                className={`custom-select ${className} ${disabled? "disabled" : ""}`}
                id={id}
                name={name}>
                <div className="custom-select-input">
                    <label htmlFor={'custom-select-input'} className="select-arrow"><img src={arrow} alt=""/></label>
                    <input
                        id={"custom-select-input"}
                        type="text"
                        readOnly={true}
                        onChange={() => {}}
                        onBlur={localOnBlur}
                        value={selectedOption? findValue(selectedOption) : ""}
                        onFocus={localOnFocus}
                        placeholder={placeholder}
                        className="input"/>
                </div>
                <div className={`custom-select-options ${showOptions? "" : "hide"}`}>
                    <OptionsList
                        options={options}
                        onChange={localOnChange}/>
                </div>

            </div>
        </>

    )
}

export default CustomSelect

CustomSelect.defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    options: [],
    value: undefined,
    defaultValue: undefined,
    disabled: false,
    placeholder: "Select option",
    className: "",
    id: "",
    name: "",
}

CustomSelect.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
};
