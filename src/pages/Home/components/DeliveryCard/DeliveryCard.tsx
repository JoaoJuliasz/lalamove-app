import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Delivery } from '../../../../types/delivery.types';
import { getDeliveryPrice } from '../../../../utils/utils';
import { style } from './style';

type Props = {
    delivery: Delivery
}

const DeliveryCard = ({ delivery }: Props) => {

    const navigation = useNavigation<any>()

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
            <Text style={style.price}>{getDeliveryPrice(delivery.deliveryFee, delivery.surcharge)}</Text>
        </TouchableOpacity>
    );
};

export default DeliveryCard;