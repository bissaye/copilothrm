import React, { Fragment } from "react";
import { Link } from "react-router-dom";


interface LinksGroupProps {
    title : string,
    listLinks : {path: string, text: string}[],
}
export const LinksGroup : React.FC<LinksGroupProps> = (props: LinksGroupProps) => {
    const {title, listLinks} = props;
    return <Fragment>
        <div className=" flex flex-col justify-start items-start gap-3">
            <h1 className="font-heading font-bold text-t6 text-black capitalize mb-1">{title}</h1>

            {
                listLinks.map((link, index) =>(
                    <Link key={index} to={link.path} type='link' className='text-black text-t3 font-body capitalize'>
                        {link.text}
                    </Link>
                ))
            }
        </div>
    </Fragment>
}