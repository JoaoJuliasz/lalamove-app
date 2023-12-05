import axios from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
const fetchDeliveriesData = async () => {
    const data = await axios.get("https://6285f87796bccbf32d6c0e6a.mockapi.io/deliveries")
    return data.data
}

const useGetDeliveries = () => {
    return useQuery(['deliveries'], fetchDeliveriesData)
};

export default useGetDeliveries;