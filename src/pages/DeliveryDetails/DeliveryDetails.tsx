import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import ImageContainer from '../../components/ImageContainer/ImageContainer';
import Favorite from './components/Favorite/Favorite';

import { getDeliveryPrice } from '../../utils/utils';

import { RootStackParamList } from '../../types/navigation.types';

import { styles } from './styles';

type Props = {
    route: RouteProp<RootStackParamList, 'Details'>
}

const DeliveryDetails = ({ route: { params: { delivery } } }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.deliveryDetails}>
                <View style={styles.itemsWrapper}>
                    <View style={styles.route}>
                        <Text style={styles.itemTitle}>From </Text>
                        <Text style={styles.itemTitle}>{delivery.route?.start}</Text>
                    </View>
                    <View style={styles.route}>
                        <Text style={styles.itemTitle}>To </Text>
                        <Text style={styles.itemTitle}>{delivery.route?.end}</Text>
                    </View>
                </View>
                <View style={styles.itemsWrapper}>
                    <Text style={styles.itemTitle}>Goods to deliver</Text>
                    <ImageContainer
                        deliveryImage={delivery.goodsPicture}
                        containerSize={{ width: 150, height: 150 }}
                    />
                </View>
                <View style={[styles.route, styles.itemsWrapper]}>
                    <Text style={styles.itemTitle}>Delivery fee</Text>
                    <Text style={styles.itemTitle}>{getDeliveryPrice(delivery.deliveryFee, delivery.surcharge)}</Text>
                </View>
            </View>
            <Favorite deliveryId={delivery.id} />
        </View>
    );
};

export default DeliveryDetails;