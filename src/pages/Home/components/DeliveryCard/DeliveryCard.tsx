import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Delivery } from '../../../../types/delivery.types';

type Props = {
    delivery: Delivery
}

const DeliveryCard = ({ delivery }: Props) => {

    const navigation = useNavigation<any>()

    const getDeliveryPrice = (): string => {
        const deliveryFee = parseFloat(delivery.deliveryFee.replace('$', ''))
        const surcharge = parseFloat(delivery.surcharge.replace('$', ''))
        return `$${(surcharge + deliveryFee).toFixed(2)}`
    }

    const navigate = () => {
        navigation.navigate('Details', {
            delivery
        })
    }

    if (!delivery.route) return null

    return (
        <TouchableOpacity style={style.container} onPress={navigate}>
            <Image source={{
                uri: delivery.goodsPicture,
                width: 84,
                height: 84
            }} />
            <View style={style.infos}>
                <Text style={style.infoText}>From: {delivery.route?.start}</Text>
                <Text style={style.infoText}>To: {delivery.route?.end}</Text>
            </View>
            <Text style={style.price}>{getDeliveryPrice()}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 2
    },
    infos: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    infoText: {
        fontSize: 16,
        padding: 6
    },
    price: {
        fontSize: 16,
        alignSelf: 'flex-end',
        padding: 8
    }
})

export default DeliveryCard;