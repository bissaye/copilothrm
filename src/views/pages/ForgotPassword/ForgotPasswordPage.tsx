import React, { Fragment, useEffect, useState, useRef } from "react";
import { DefaultCard, DefaultIconSuccess, DefaultOtp, FooterSignInPage } from "../../components/common";
import { DefaultButton} from "../../components/ui";
import { useNavigateById } from "../../../hooks";
import { pageIds, otpLength } from "../../../utils/constantes";
import { useIntl } from "react-intl";
import { useFormik } from "formik";
import { resetPasswordSchemaOtp} from "../../../services/forms/validations";
import { ResetPassStep1 } from "./_step1";
import { ResetPassStep3 } from "./_step3";



export const ForgotPasswordPage: React.FC = () => {
    const { formatMessage } = useIntl();
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [titleStep, setTitleStep] = useState<{ title: string, subTitle: string }>({ title: formatMessage({ id: "forgot_your_password" }), subTitle: formatMessage({ id: "email_verification_for_account" }) });
    const resetPassStep1Ref = useRef<{ submitForm: () => void }>(null);
    const resetPassStep3Ref = useRef<{ submitForm: () => void }>(null);
    const [otp, setOtp] = useState<Array<string>>(new Array<string>(otpLength).fill(""))
    const navigateById = useNavigateById();

    const formikStep2 = useFormik({
        initialValues: {otp:""},
        validationSchema: resetPasswordSchemaOtp,
        onSubmit:  () => {
            console.log("otp :", otp.join(''))
            setStep(nextStep())
        }
    })

    const handleSubmitStep1 = () => {
        if (resetPassStep1Ref.current) {
            resetPassStep1Ref.current.submitForm();
        }
    };

    const handleSubmitStep3 = () => {
        if (resetPassStep3Ref.current) {
            resetPassStep3Ref.current.submitForm();
        }
    };


    const nextStep = (): 1 | 2 | 3 | 4 => {
        switch (step) {
            case 1: {
                return 2;
            }
            case 2: {
                return 3;
            }
            case 3: {
                return 4;
            }
            default: {
                return 1;
            }
        }
    }

    useEffect(() => {
        console.log("step: ", step)
        switch (step) {
            case 1: {
                setTitleStep({
                    title: formatMessage({ id: "forgot_your_password" }),
                    subTitle: formatMessage({ id: "email_verification_for_account" })
                })
                break;
            }
            case 2: {
                let subTitle = formatMessage({ id: "find_verification_code_at" }, { email: <span className="font-bold text-black">test@gmail.com</span> }) as string;
                setTitleStep({
                    title: formatMessage({ id: "enter_the_6_digit_code" }),
                    subTitle: subTitle
                })
                break;
            }
            case 3: {
                setTitleStep({
                    title: formatMessage({ id: "choose_a_new_password" }),
                    subTitle: ""
                })
                break;
            }
            case 4: {
                setTitleStep({
                    title: formatMessage({ id: "your_password_has_been_changed" }),
                    subTitle: ""
                })
                break;
            }
            default: {
                setTitleStep({
                    title: formatMessage({ id: "forgot_your_password" }),
                    subTitle: formatMessage({ id: "email_verification_for_account" })
                })
                break;
            }
        }
    }, [step])

    useEffect(() => {
        formikStep2.values['otp'] = otp.join('')
    }, [otp])


    return <Fragment>
        <div className=" flex flex-col justify-center items-center w-full h-full">
            <DefaultCard
                title={titleStep.title}
                subtitle={titleStep.subTitle}
            >
                <div className=" min-h-[300px] flex flex-col justify-between">

                    {
                        step === 1 ?
                            <ResetPassStep1
                                ref={resetPassStep1Ref}
                                nextStep={
                                    () => {
                                        setStep(nextStep())
                                    }
                                }
                            />
                            : step === 2 ?
                                <DefaultOtp 
                                    setOtp={setOtp}
                                    onResendCode={() => {console.log("resend")}}
                                />
                                : step === 3 ?
                                    <ResetPassStep3
                                        ref={resetPassStep3Ref}
                                        nextStep={
                                            () => {
                                                setStep(nextStep())
                                            }
                                        }
                                    />
                                    : step === 4 ?
                                        <DefaultIconSuccess/>
                                        : ""

                    }

                    <div className=" flex flex-col justify-start items-center gap-4 ">
                        <DefaultButton
                            type="primary"
                            text={step === 4 ? formatMessage({id:"sign_in_link"}) : step === 3 ? formatMessage({id:"send"}) : formatMessage({id:"next"})}
                            bgWhite={false}
                            typeForm='submit'
                            widthFull={true}
                            onClick={() => {
                                if (step === 4) {
                                    navigateById(pageIds.SignInPage)
                                } else if (step === 3) {
                                    handleSubmitStep3()
                                } else if (step === 2) {
                                    formikStep2.handleSubmit();
                                } else if (step === 1) {
                                    handleSubmitStep1()
                                }
                            }}
                        />
                        {
                            (step === 1 || step === 2) &&
                            <DefaultButton
                                type="primary"
                                text= {formatMessage({id:"back"})}
                                bgWhite={true}
                                typeForm='submit'
                                widthFull={true}
                                onClick={() => {
                                    if (step === 1) {
                                        navigateById(pageIds.SignInPage)
                                    } else {
                                        setStep(1)
                                    }
                                }}
                            />
                        }
                    </div>
                </div>

            </DefaultCard>
            <FooterSignInPage />
        </div>
    </Fragment>
}