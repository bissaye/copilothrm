import { toast } from 'react-toastify';

export const toastify = (
    type: 'info' | 'success' | 'warning' | 'error', 
    message: string) => {

    switch(type){
        case 'success':
            return toast.success(message, {
            className: 'border border-green-400 bg-green-400 text-white capitalize font-body font-bold'
            })
            break;
        case 'error':
            return toast.error(message, {
            className: 'border border-red-400 bg-red-400 text-white capitalize font-body font-bold'
            })
            break;
        case 'info':
            return toast.info(message, {
            className: 'border border-blue-400 bg-blue-400 text-white capitalize font-body font-bold'
            })
            break;
        case 'warning':
            return toast.warning(message, {
            className: 'border border-amber-400 bg-amber-400 text-white capitalize font-body font-bold'
            })
            break;
    }
}