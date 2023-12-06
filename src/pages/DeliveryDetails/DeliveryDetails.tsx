import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation.types';
import { RouteProp } from '@react-navigation/native';

type Props = {
    route: RouteProp<RootStackParamList, 'Details'>
}

const DeliveryDetails = ({ route }: Props) => {
    const { delivery } = route.params;

    return (
        <View>
            <Text>{delivery.sender.name}</Text>
        </View>
    );
};

export default DeliveryDetails;