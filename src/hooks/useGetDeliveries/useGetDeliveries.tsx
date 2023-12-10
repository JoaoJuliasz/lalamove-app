import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Delivery } from '../../types/delivery.types';
const fetchDeliveriesData = async () => {
    const data = await axios.get("https://6285f87796bccbf32d6c0e6a.mockapi.io/deliveries")
    return data.data
}

const useGetDeliveries = () => {
    // return useQuery(['deliveries'], fetchDeliveriesData)
    const [loading, setLoading] = useState<boolean>(false)
    const [deliveries, setDeliveries] = useState<Delivery[]>([])

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    const fetchDeliveriesData = useCallback(async (offset: number = 0) => {
        setLoading(true)
        try {
            const data = await axios.get(`https://6285f87796bccbf32d6c0e6a.mockapi.io/deliveries?offset=${offset}`)
            const dataModified = data.data
            for (let i = 0; i < 16; i++) {
                dataModified.push({ ...dataModified[0], id: generateUUID()})
            }
            setDeliveries(dataModified)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchDeliveriesData()
    }, [])

    return { deliveries, loading, fetchDeliveriesData }
};

export default useGetDeliveries;