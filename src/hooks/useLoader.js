import {useState, useMemo, useEffect} from 'react';
import Spinner from "../components/UI/Spinner/Spinner";

export const useLoader = (axios) => {

    const [loading, setLoading] = useState(false);
    const interceptorReq = axios.interceptors.request.use((req) => {
        setLoading(true);
        return req;
    }, (e) => {
        setLoading(false);
        throw e;
    })
    const loader = useMemo(() => {
        if (loading) return <Spinner/>
        else return null;
    }, [loading]) ;
    const interceptorRes = axios.interceptors.response.use((res) => {
        setLoading(false);
        return res;
    }, (e) => {
        setLoading(false);
        throw e;
    })
    useEffect(() => {
        return() => {
            axios.interceptors.response.eject(interceptorRes)
            axios.interceptors.request.eject(interceptorReq)
        }
    }, [])

    return loader;
}