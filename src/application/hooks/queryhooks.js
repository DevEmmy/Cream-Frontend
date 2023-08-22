import { useQuery } from 'react-query';
import services from '../../ioc/services';

export const useGetUserDetails = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user
} 