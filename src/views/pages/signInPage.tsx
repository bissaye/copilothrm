import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';
import { FooterSignInPage } from '../components/common';
import { DefaultButton, InputPassword, InputText, LinkButton } from '../components/ui';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FieldsInfo } from '../../utils/interfaces/type';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserAuthData } from '../../utils/interfaces/DTO/request';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { userSignInSchema } from '../../services/forms/validations';
import { useNavigateById } from '../../hooks';
import { useAuthStore } from '../../services/store';
import { pageIds } from '../../utils/constantes';


export const SignInPage : React.FC = () => {

    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();
    const {signIn} = useAuthStore();
    const fields : Record<string, FieldsInfo> = {
        email :{
            id : "email",
            name : "email",
        },
        password :{
            id : "password",
            name : "password",
        }
    }

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] ="";
        return field
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignInSchema,
        onSubmit: async (values) => {
            const body : UserAuthData = {...values};
            console.log(body) // ce log sera enlevé des que l'authentification sera complète
            signIn().then(
                ()=>{
                    navigateById(pageIds.ChooseOrg)
                }
            );
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik

    return <Fragment>
        <div className='min-h-svh w-full flex flex-col justify-start items-center'>
            <div className='w-[495px] lg:min-h-[536px] rounded-xl mt-4 mb-16 border-gray-500 shadow-xl p-4'>
                <h1 className='font-bold font-heading text-t8 text-black capitalize'>
                    Hello.
                </h1>
                <p className='text-gray-800  text-t6 font-heading capitalize mb-6'>
                    {formatMessage({id:"happy_to_see_you_again"})}
                </p>
                <form onSubmit={handleSubmit} >
                    <div className='mb-4'>
                        <InputText
                            id = {fields.email.id}    
                            name =  {fields.email.name}  
                            label='Email'
                            placeholder = {formatMessage({id: "enter_your_email_address"})}
                            icon = {faEnvelope}  
                            value={values[fields.email.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.email ? errors.email.toString() : undefined}
                        />
                    </div>

                    <div className=''>
                        <InputPassword
                            id = {fields.password.id}    
                            name =  {fields.password.name}  
                            label={formatMessage({id:"password"})}
                            placeholder = {formatMessage({id: "enter_your_password"})}
                            icon = {faLock}  
                            value={values[fields.password.name]} 
                            onChange={handleChange}  
                            errorMessage={ errors.password ? errors.password.toString() : undefined}
                        />
                    </div>

                    <div className='w-full flex flex-row justify-end items-end'>
                        <LinkButton
                            text={formatMessage({id:"forgot_your_password"})}
                            type='primary'
                        />
                    </div>
                    
                    <DefaultButton
                        type = "primary"
                        text = {formatMessage({id: "sign_in_link"})}
                        bgWhite = {false}
                        typeForm='submit'
                        widthFull = {true}
                        marginY={30}
                    />
                </form>

                <div className=' w-full flex flex-col justify-center items-center'>
                    <p className=' uppercase font-bold font-body text-t2 text-gray-800'>{formatMessage({id:"or_continue_with"})}</p>
                    <div className="flex gap-5 mb-4 mt-4 text-t8">
                        <FontAwesomeIcon icon={faGoogle}  className=" text-danger"/>
                        <FontAwesomeIcon icon={faFacebook}  className=" text-bluecustom-800"/>
                        <FontAwesomeIcon icon={faApple}  className=" text-bluecustom-900"/>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <p className='font-bold font-body text-t4 text-gray-800'>{formatMessage({id:"no_account_yet"})}</p>
                        
                        <LinkButton
                            text= {formatMessage({id:"sign_up_link"})}
                            type='primary'
                            className='font-bold'
                            onClick={() => {navigateById(pageIds.SignUpPage)}}
                        />
                        
                    </div>
                </div>

            </div>
            <FooterSignInPage/>
        </div>
    </Fragment>
}