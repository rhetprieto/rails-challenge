import { useState, useEffect } from 'react';
import axios from 'axios'

const useRequest = ({
    url, lazy = false, method = 'GET'
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState(null);
    const [called, setCalled] = useState(false);

    const handleSuccess = (res) => {
        setData(res.data);
        setCalled(false)
        setLoading(false);
    };

    const handleError = (xhr, s, err) => {
        setError(err);
        setLoading(false);
        setCalled(false)
    };

    const execute = ({params = {}} = {}) => {
        setLoading(true);
        setCalled(true);
        if(method === 'GET') {
            axios.get(url).then(handleSuccess).catch(handleError)
        } else if(method === 'POST') {
            axios.post(url, params).then(handleSuccess).catch(handleError)
        }
    };

    useEffect(() => {
        if (!url) return;

        if (!lazy) execute();
    }, [url]);

    return [data, loading, error, execute, called];
};

export default useRequest;
