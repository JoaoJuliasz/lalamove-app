import { StyleSheet, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../../pages/Home/Home";
import DeliveryDetails from "../../pages/DeliveryDetails/DeliveryDetails";

import { RootStackParamList } from "../../types/navigation.types";
import { useEffect, useState } from "react";
import { Favorites } from "../../types/delivery.types";
import { AppProvider } from "../../context/Context";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {

    const [favorites, setFavorites] = useState<Favorites>({})

    const getIsFavorite = async () => {
        try {
            const cachedFavorites = await AsyncStorage.getItem('favorites');
            if (cachedFavorites !== null) {
                setFavorites(JSON.parse(cachedFavorites))
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getIsFavorite()
    }, [])

    return (
        <View style={styles.container}>
            <AppProvider value={{ favorites, setFavorites }}>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerBackTitleVisible: false }}>
                    <Stack.Screen name="Home" component={Home} options={{ title: 'My Deliveries' }} />
                    <Stack.Screen name="Details" component={DeliveryDetails} options={{ title: 'Delivery Details' }} />
                </Stack.Navigator>
            </AppProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default Main;