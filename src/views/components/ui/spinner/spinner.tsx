import DotLoader from "react-spinners/DotLoader";

export const Spinner: React.FC = () => {
    return(
        <div className="h-screen w-screen bg-white/70 absolute top-0 lesf-0 flex flex-col justify-center items-center">
            <DotLoader 
            color={"#fc6544"}
            />
        </div>
    )
}