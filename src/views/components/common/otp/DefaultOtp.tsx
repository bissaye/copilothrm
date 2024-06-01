import React, { Fragment, useState, useEffect, useRef } from "react";
import { InputDigit, LinkButton } from "../../ui";
import { useIntl } from "react-intl";
import { otpLength } from "../../../../utils/constantes";

interface DefaultOtpProps {
    setOtp: (newOtp: Array<string>)=>void;
    onResendCode: () => void;
}



export const DefaultOtp: React.FC<DefaultOtpProps> = (props: DefaultOtpProps) => {
    const {formatMessage}= useIntl();
    const [localOtp, setLocalOtp] = useState<Array<string>>(new Array<string>(otpLength).fill(""))
    const { setOtp, onResendCode} = props
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChangeOtp = (value: string, index: number) => {
        const newOtp = [...localOtp];
        newOtp[index] = value;
        if (value && index < otpLength-1) {
            inputRefs.current[index + 1]?.focus();
        }
        setOtp(newOtp);
        setLocalOtp(newOtp)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && index > 0 && !localOtp[index]) {
            inputRefs.current[index - 1]?.focus();
        }
    }

    useEffect(()=>{
        inputRefs.current[0]?.focus();
    }, [])

    return <Fragment>
        <div className="flex flex-col justify-center items-center gap-4">

            <div className="flex flex-row justify-center items-center gap-3">
                {
                    localOtp.map((value, index) => (
                        <InputDigit
                            key={`otp-${index}`}
                            value={value}
                            digitRef={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChangeOtp(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))
                }
            </div>

            <LinkButton
                type="primary"
                text=  {formatMessage({id:"resend_code"})}
                onClick={()=>{
                    onResendCode()
                }}
            />
        </div>
    </Fragment>
}