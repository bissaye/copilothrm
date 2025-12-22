import React, { Fragment } from "react";
import { LanguageSwitcher } from "../internationalisation";
import { imagesLogo } from "../../../../assets/images";
import { LinksGroup } from "./_LinksGroup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useIntl } from "react-intl";


export const FooterLandingPage : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className="w-full flex flex-col justify-center items-center mt-4 bg-gray-100 border border-gray-500">
            <div className="w-full flex flex-col md:flex-row gap-7 justify-between items-start py-s10 pl-10 pr-s12 md:pr-s17">
                <div className="flex flex-col justify-center self-center pr-s6">
                    <img src={imagesLogo.main} className="w-s20"/>
                    <p className="text-black text-t3 font-body capitalize"> &copy; 2024 Abyster Consulting.</p>
                </div>
                <div className="flex flex-col  md:flex-row justify-between gap-10 md:gap-[5vw] w-full">
                    <LinksGroup
                        title={formatMessage({id:"products"})}
                        listLinks={
                            [
                                {
                                    path: "/",
                                    text: formatMessage({id:"features"})
                                },
                                {
                                    path: "/",
                                    text: formatMessage({id:"pricing"})
                                },
                            ]
                        }
                    />
                    <LinksGroup
                        title={formatMessage({id:"resources"})}
                        listLinks={
                            [
                                {
                                    path: "/",
                                    text: formatMessage({id:"blog"})
                                },
                                {
                                    path: "/",
                                    text: formatMessage({id:"user_guide"})
                                },
                                {
                                    path: "/",
                                    text: formatMessage({id:"webinars"})
                                },
                            ]
                        }
                    />
                    <LinksGroup
                        title={formatMessage({id:"platform"})}
                        listLinks={
                            [
                                {
                                    path: "/",
                                    text: formatMessage({id:"partners_and_integration"})
                                },
                                {
                                    path: "/",
                                    text: formatMessage({id:"become_partner"})
                                },
                                {
                                    path: "/",
                                    text: formatMessage({id:"API"})
                                },
                            ]
                        }
                    />

                    <div className=" flex flex-col justify-start items-start gap-3">
                        <h1 className="font-heading font-bold text-t6 text-black capitalize mb-1">{formatMessage({id:"company"})}</h1>
                        <Link to="/" type='link' className='text-black text-t3 font-body capitalize'>
                            {formatMessage({id:"about_us"})}
                        </Link>
                        <Link to="/" type='link' className='text-black text-t3 font-body capitalize'>
                            {formatMessage({id:"join_us"})}
                        </Link>
                        <div className="flex gap-5">
                            <FontAwesomeIcon icon={faTwitter}  className=" text-bluecustom"/>
                            <FontAwesomeIcon icon={faFacebook}  className=" text-bluecustom-800"/>
                            <FontAwesomeIcon icon={faLinkedin}  className=" text-bluecustom-900"/>
                            <FontAwesomeIcon icon={faYoutube}  className=" text-primary-750"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full flex flex-row justify-end pr-s10 py-5">
                <LanguageSwitcher/>
            </div>
        </div>
    </Fragment>
}