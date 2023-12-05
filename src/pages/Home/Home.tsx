import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import useGetDeliveries from '../../hooks/useGetDeliveries/useGetDeliveries';
import { Delivery } from '../../types/delivery.types';
import DeliveryCard from './components/DeliveryCard/DeliveryCard';

const Home = () => {

    const { data, isLoading, error } = useGetDeliveries()

    if (error) return (
        <View>
            <Text>Ops! Something went wrong...</Text>
        </View>
    )

    if (isLoading) return (
        <View>
            <Text>Loading...</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={({ item }) => <DeliveryCard key={item.id} delivery={item} />} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    list: {
        flex: 1
    }
});


export default Home;