import { FlatList, StyleSheet, Text, View } from 'react-native';
import useGetDeliveries from '../../hooks/useGetDeliveries/useGetDeliveries';
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
});


export default Home;