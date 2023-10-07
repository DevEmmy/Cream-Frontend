import toast from "react-hot-toast"
import { error, loading, success } from "./toaster"
import { useRouter } from "next/router"
import { client } from "@gradio/client";

const app = await client("https://binaryy-cream-prototype.hf.space/");


export const sendQuery = async (text)=> {
    const result = await app.predict("/predict", [    
        text
    ]);

    console.log(result.data);
}

const { default: axiosRequest } = require("./axiosConfig")

export const login = async (email, password, router)=>{
    const toastId = loading("Logging in...")
    await axiosRequest.post("/users/sign-in", {email, password})
    .then(response => {
        toast.dismiss(toastId)
        let token = response.data.token;
        if(token){
            success(response.data.message)
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            router.push("/")
        }
        else{
            error(response.data.message)
        }
        console.log(response)
    })
    .catch(err => {
        toast.dismiss(toastId)
        if(err.response){
            error(err.response.data.message)
        }
        else{
            error("An Error Occured")
        }
        
        console.log(err)
    })
}

export const register = async (details, router)=>{
    const toastId = loading("Registered...")
    await axiosRequest.post("/users/sign-up", details)
    .then(response => {
        toast.dismiss(toastId)
        let token = response.data.token;
        if(token){
            success(response.data.message)
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            router.push("/")
        }
        else{
            error(response.data.message)
        }
        console.log(response)
    })
    .catch(err => {
        toast.dismiss(toastId)
        if(err.response){
            error(err.response.data.message)
        }
        else{
            error("An Error Occured")
        }
        
        console.log(err)
    })
}

export const validateLoggedIn = ()=>{
    const token = localStorage.getItem("token")
    if(token){
        return true
    }
    return false
}

export const getAllListings = async (cat)=>{
    let data = []
    await axiosRequest.get(`/listings/all?category=${cat}`)
    .then(response =>{
        data = response.data;
    })
    .catch(err => {
        if(err.response){
            error(err.response.data.message)
        }
        else{
            error("An Error Occured")
        }
        
        console.log(err)
    })
    return data.listings
}

export const getAListing = async (id)=>{
    let data;
    await axiosRequest.get(`/listings/each/${id}`)
    .then(response =>{
        data = response.data;
    })
    .catch(err => {
        if(err.response){
            error(err.response.data.message)
        }
        else{
            error("An Error Occured")
        }
        
        console.log(err)
    })
    return data
}

export const getDetails = ()=>{
    let data = JSON.parse(localStorage.getItem("user"))
    return data;
}