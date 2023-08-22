import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../store/actions/ui";

const useAuthentication = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userId = useSelector(state=> state.user.userId);
    const toNavigate = useCallback(()=>{
        if (userId == null) {
            dispatch(setLoading(false))
             navigate("/login");
             return;
        }
    }, [dispatch, navigate, userId])

    useEffect(() => {
        toNavigate()
    }, [toNavigate])

    return null;
};

export default useAuthentication;