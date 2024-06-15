import React , {FocusEventHandler, Fragment, MouseEventHandler, useEffect, useRef, useState} from "react";
import { InputSelectOptions, InputSelectProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const InputSelect : React.FC<InputSelectProps> = (props : InputSelectProps) => {
    const {id, name, value, placeholder, disabled, onChange, options, className, onBlur} = props

    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const selectInputRef = useRef<HTMLSelectElement>(null);
    const optionsListRef = useRef<HTMLUListElement>(null);

    const handleSelectOption = (option: InputSelectOptions) => {
        if(selectInputRef.current){
            selectInputRef.current!.value = option.value;

            const event = new Event('change', { bubbles: true});

            Object.defineProperty(event, 'target', {
                value: selectInputRef.current
            })

            Object.defineProperty(event, 'currentTarget', {
                value: selectInputRef.current
            })

            selectInputRef.current.dispatchEvent(event)
        }
        setInputValue(option.text!)
        setShowOptions(false);
    }

    const filterOptionList = (option: InputSelectOptions) => {
        return option.text.toLowerCase().includes(inputValue.toLowerCase()) ? option :  null;
    }

    const handleShowOptions: FocusEventHandler = (event) => {
        if(optionsListRef.current && !optionsListRef.current.contains(event.target as Node))
            setShowOptions(false)
    }

    useEffect(()=> {
      if(value){
        // debugger
            const option = options.find(opt => opt.value == value)
            if (option) 
                setInputValue(option?.text)
        }
    }, [])
    
    return <Fragment>
        <CustumInputContainer
            {...props}
        >
            <div 
            className=" relative w-full"
            onBlur={handleShowOptions}>
                <div className=" w-full flex flex-row items-center gap-2">
                    <input 
                        id = {`inputSelect-${id}`}
                        name = {`inputSelect-${name}`}
                        type ='text'
                        className={`default-input ${className}`} 
                        value={inputValue}
                        placeholder= {placeholder}
                        disabled={disabled}
                        onChange={(e) => setInputValue(e.target.value)}
                        // onFocus={() => setShowOptions(true)}
                        onKeyDown={() => setShowOptions(true)}
                        onClick={() => setShowOptions(prev => !prev)}
                        onBlur={(e) => {
                            if(onBlur){
                                onBlur(e);
                            }
                        }}
                        autoComplete=""
                    />
                    { showOptions ?
                        <FontAwesomeIcon 
                            icon={faChevronUp}
                            onClick={() => {
                                setShowOptions(false)
                            }}
                            className=" cursor-pointer"
                        />
                        :
                        <FontAwesomeIcon 
                            icon={faChevronDown}
                            onClick={() => {
                                setShowOptions(true)
                            }}
                            className=" cursor-pointer"
                        />
                    }
                </div>
                {
                    showOptions &&
                    <ul ref={optionsListRef} className="absolute -left-[8px] top-8 w-full max-h-[300px] bg-white border border-gray-400 shadow-md overflow-y-scroll z-30">
                    {
                        options?.filter((option) => filterOptionList(option)).map((option, key) => (
                            <li 
                                key={key}
                                className="w-full px-7 py-3 hover:bg-primary hover:text-white cursor-pointer"
                                onClick={() => handleSelectOption(option)}
                                >
                                {option.text}
                            </li>
                            
                        ))
                    }
                </ul>}
            </div>
            <select 
                id = {id}
                name = {name}
                className={`hidden`}
                value={value}
                disabled={disabled}
                onChange={(e) => {
                    if(onChange){
                        onChange(e)
                    }
                }}
                autoComplete=""
                ref={selectInputRef}
            >
                {
                    placeholder &&
                    <option value={""}>{placeholder}</option>
                }
                {
                    options.map((option, key) => (
                        <option value={option.value} key={`${name}-${key}`}>
                            {option.text}
                        </option>
                    ))
                }
            </select>
        </CustumInputContainer>
    </Fragment>
}