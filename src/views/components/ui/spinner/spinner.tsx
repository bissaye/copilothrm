import DotLoader from "react-spinners/DotLoader";
import { useSpinnerStore } from "../../../../services/store";

export const Spinner: React.FC = () => {
    const {text} = useSpinnerStore()
    return(
        <div className="h-screen w-screen bg-white/70 z-50 absolute top-0 lesf-0 flex flex-col justify-center items-center">
            <DotLoader 
            color={"#fc6544"}
            />
            {text && <p className="text-t7">{text}</p> }
        </div>
    )
}