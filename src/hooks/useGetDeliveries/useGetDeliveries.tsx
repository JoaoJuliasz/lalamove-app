import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Delivery } from '../../types/delivery.types';

const useGetDeliveries = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [deliveries, setDeliveries] = useState<Delivery[]>([])
    const [page, setPage] = useState<number>(0)

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    const fetchDeliveriesData = useCallback(async () => {
        if (loading) {
            return;
        }
        setLoading(true);

        const nextPage = deliveries.length === 0 ? 1 : page + 1;

        try {
            const response = await axios.get(`https://6285f87796bccbf32d6c0e6a.mockapi.io/deliveries?offset=${nextPage}`);
            const newData = response.data;

            if (deliveries.length > 0) {
                const dataWithNewIds = newData.map((value: Delivery) => ({
                    ...value,
                    id: generateUUID(),
                }));
                setDeliveries(prevDeliveries => [...prevDeliveries, ...dataWithNewIds]);
                setPage(nextPage);
            } else {
                setDeliveries(newData)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, deliveries]);

    useEffect(() => {
        fetchDeliveriesData()
    }, [])

    return { deliveries, loading, fetchDeliveriesData }
};

export default useGetDeliveries;