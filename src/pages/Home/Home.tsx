import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import useGetDeliveries from '../../hooks/useGetDeliveries/useGetDeliveries';
import DeliveryCard from './components/DeliveryCard/DeliveryCard';
import SearchBar from '../../components/SearchBar/SearchBar';

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
                contentContainerStyle={styles.list}
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
    list: {
        // paddingTop: 150
    }
});


export default Home;