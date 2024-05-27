import React , {Fragment} from "react";
import { imagesLogo } from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useIntl } from "react-intl"; 

export const FooterSignInPage : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className="flex-grow w-full h-full py-7 flex flex-col justify-start items-center gap-1 bg-gray-100 border border-gray-500">
            <div className="flex gap-5 mb-4">
                <FontAwesomeIcon icon={faTwitter}  className=" text-bluecustom"/>
                <FontAwesomeIcon icon={faFacebook}  className=" text-bluecustom-800"/>
                <FontAwesomeIcon icon={faLinkedin}  className=" text-bluecustom-900"/>
                <FontAwesomeIcon icon={faYoutube}  className=" text-primary-750"/>
            </div>
            <p className="text-gray-800  text-t3 font-body capitalize"> &copy; 2024 Abyster Consulting. {formatMessage({id:"All_rights_reserved"})}</p>
            <img src={imagesLogo.main} className="lg:w-s20" />
        </div>
    </Fragment>
}