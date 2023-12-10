import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { AppContext } from '../../../../context/Context';
import ImageContainer from '../../../../components/ImageContainer/ImageContainer';
import { getDeliveryPrice } from '../../../../utils/utils';
import { Delivery } from '../../../../types/delivery.types';
import { style } from './style';

type Props = {
    delivery: Delivery
}

const DeliveryCard = ({ delivery }: Props) => {

    const navigation = useNavigation<any>()

    const context = useContext(AppContext)

    const navigate = () => {
        navigation.navigate('Details', {
            delivery
        })
    }

    if (!delivery.route) return null

    return (
        <TouchableOpacity style={style.container} onPress={navigate}>
            <ImageContainer
                deliveryImage={delivery.goodsPicture}
                containerSize={{
                    width: 84,
                    height: 84
                }}
            />
            <View style={style.infos}>
                <Text style={style.infoText}>From: {delivery.route?.start}</Text>
                <Text style={style.infoText}>To: {delivery.route?.end}</Text>
            </View>
            <View style={style.wrapper}>
                {context?.favorites[delivery.id] ? <AntDesign name='heart' size={24} color="#f01f1f" style={style.favorite}/> : null}
                <Text style={style.price}>{getDeliveryPrice(delivery.deliveryFee, delivery.surcharge)}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default DeliveryCard;