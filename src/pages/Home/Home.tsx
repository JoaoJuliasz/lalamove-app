import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import useGetDeliveries from '../../hooks/useGetDeliveries/useGetDeliveries';
import DeliveryCard from './components/DeliveryCard/DeliveryCard';

const Home = () => {
    const { deliveries, loading, fetchDeliveriesData } = useGetDeliveries()

    if (deliveries.length === 0) return (
        <View>
            <Text>Loading...</Text>
        </View>
    )

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={deliveries}
                renderItem={({ item }) => <DeliveryCard key={item.id} delivery={item} />}
                keyExtractor={item => item.id}
                onEndReached={fetchDeliveriesData}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
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