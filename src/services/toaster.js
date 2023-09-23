import toast, { Toaster } from 'react-hot-toast';

export let success = (message)=>{
    toast.success(message);
}

export let error = (message)=>{
    toast.error(message)
}

export let loading = (message = "Loading...") => {
    return toast.loading(message)
}