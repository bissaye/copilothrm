import { Fragment } from "react/jsx-runtime"
import { InputText } from "../ui";

interface SummaryBoxProps {
    infos: {
        id: string,
        name: string,
        value: string | undefined
    }[],
    title: string
}

export const SummaryBox : React.FC<SummaryBoxProps> = (props: SummaryBoxProps) => {

    const {infos, title} = props;
    
    return(
        <Fragment>
            <div className="h-[470px] w-[350px] md:w-[400px] pt-3 pb-7 border border-primary rounded rounded-[8px] flex flex-col items-center gap-3 relative overflow-hidden">
                <h1 
                    className="text-primary font-heading font-extrabold mb-5 absolute text-center bg-white w-full py-3"
                >{title}
                </h1>
                    <form
                    className="w-full overflow-scroll flex flex-col justify-start items-center mt-10"
                    >
                        {
                            infos.map((val, index) => (
                                <div className="w-2/3" key={index}>
                                    <InputText
                                        id = {val.id}    
                                        name = {val.name}
                                        label={val.name}
                                        value={val.value}
                                        disabled = {true}
                                    />
                                </div>
                            ))
                        }
                    </form>
                </div>
        </Fragment>
    )
}