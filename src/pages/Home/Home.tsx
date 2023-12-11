import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import useGetDeliveries from '../../hooks/useGetDeliveries/useGetDeliveries';
import DeliveryCard from './components/DeliveryCard/DeliveryCard';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {

    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>("")

    const { deliveries, loading, fetchDeliveriesData } = useGetDeliveries()

    const navigation = useNavigation()

    const filteredDeliveries = useMemo(() => {
        return deliveries.filter(item => item.route?.start.toLowerCase().includes(searchValue.toLowerCase()))
    }, [deliveries, searchValue])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                onChangeText: (event: any) => setSearchValue(event.nativeEvent.text),
                placeholder: "Search",
                cancelButtonText: "Cancel",
                searchValue: searchValue,
                hideWhenScrolling: true,
                autoCapitalize: "words",
                shouldShowHintSearchIcon: true,
            },
            headerRight: () => (
                // !showSearch ?
                <View style={{ position: 'absolute', paddingRight: 16 }}>
                    <AntDesign name="search1" size={24} color="black" onPress={() => setShowSearch(true)} />
                </View>
                // :
                // <SearchBar />
            ),
        });
    }, [navigation])

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
                data={filteredDeliveries}
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