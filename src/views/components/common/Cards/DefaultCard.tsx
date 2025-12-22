import React, { Fragment, ReactNode } from "react";


interface DefaultCardProps {
    title: string,
    subtitle: string,
    children?: ReactNode
}

export const DefaultCard: React.FC<DefaultCardProps> = (props: DefaultCardProps) => {
    const { title, subtitle,  children} = props
    return <Fragment>
        <div className='w-[495px] lg:h-[536px] rounded-xl mt-4 mb-16 border-gray-500 shadow-xl p-4'>
            <h1 className='font-bold font-heading text-t8 text-black first-word-uppercase:'>
                {title}
            </h1>
            <p className='text-gray-800  text-t6 font-heading mb-10'>
                {subtitle}
            </p>
            { 
                children
            }
        </div>
    </Fragment>
}