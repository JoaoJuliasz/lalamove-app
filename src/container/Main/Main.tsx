import { StyleSheet, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../../pages/Home/Home";
import DeliveryDetails from "../../pages/DeliveryDetails/DeliveryDetails";

import { RootStackParamList } from "../../types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'My Deliveries' }} />
                <Stack.Screen name="Details" component={DeliveryDetails} options={{ title: 'Delivery Details' }} />
            </Stack.Navigator>
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