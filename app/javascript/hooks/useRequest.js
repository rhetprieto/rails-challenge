import { useState, useEffect } from 'react';
import axios from 'axios'

const useRequest = ({
    url, lazy = false
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState(null);

    const handleSuccess = (res) => {
        setData(res.data);
        setLoading(false);
    };

    const handleError = (xhr, s, err) => {
        setError(err);
        setLoading(false);
    };

    const execute = () => {
        setLoading(true);
        axios.get(url)
            .then(handleSuccess)
            .catch(handleError)
    };

    useEffect(() => {
        if (!url) return;

        if (!lazy) execute();
    }, [url]);

    return [data, loading, error, execute];
};

export default useRequest;
