import { FlatList, StyleSheet, Text, View } from 'react-native';
import useGetDeliveries from '../../hooks/useGetDeliveries/useGetDeliveries';
import DeliveryCard from './components/DeliveryCard/DeliveryCard';

const Home = () => {

    // const { data, isLoading, error } = useGetDeliveries()
    const { deliveries, loading} = useGetDeliveries()

    // if (error) return (
    //     <View>
    //         <Text>Ops! Something went wrong...</Text>
    //     </View>
    // )

    if (loading) return (
        <View>
            <Text>Loading...</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={deliveries}
                renderItem={({ item }) => <DeliveryCard key={item.id} delivery={item} />} 
                onScrollEndDrag={(e) => console.log(e)}
                />
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