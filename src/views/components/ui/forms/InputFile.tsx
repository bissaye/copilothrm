import React, { Fragment, useState, useRef } from "react";
import { useIntl } from "react-intl";
import { InputTextProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";
import { DefaultButton } from "../buttons";
import './style.css'
import { faFile } from "@fortawesome/free-regular-svg-icons";


export const InputFile: React.FC<InputTextProps> = (props: InputTextProps) => {

    const {formatMessage} = useIntl();
    const { id, name, placeholder = formatMessage({id:"import_pic"}), disabled, onChange, fileType } = props
    const [fileName, setFileName] = useState<string>("")
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {className} = props;
    const handleImportClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
    };

    return <Fragment>
        <CustumInputContainer
            bgNone = {true}
            {...props}
        >
            <div className="w-full flex flex-row justify-between items-center gap-2">
                <div className="bg-gray-200 w-full h-[44px] rounded-m p-2">
                    <input
                        id="fileName"
                        name="fileName"
                        type='text'
                        className={`default-input ${className}`}
                        value={fileName}
                        placeholder={fileName === "" ? placeholder : fileName}
                        readOnly
                        onClick={()=>{
                            handleImportClick()
                        }}
                        autoComplete=""
                    />
                </div>


                <DefaultButton
                    type="primary"
                    icon={faFile}
                    text= {formatMessage({id:'import_pic'})}
                    bgWhite={false}
                    widthFull= {true}
                    disabled={disabled}
                    onClick={()=>{
                        handleImportClick()
                    }}
                />

                <input
                    id={id}
                    name={name}
                    type="file"
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e)
                        }
                        if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name)
                        }
                    }}
                    className=" hidden"
                    accept={fileType ? fileType : ""}
                    ref={fileInputRef}
                />

            </div>
        </CustumInputContainer>
    </Fragment>
}