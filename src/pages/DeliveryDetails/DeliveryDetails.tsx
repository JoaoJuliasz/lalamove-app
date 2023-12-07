import { useState } from 'react';
import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation.types';
import { RouteProp } from '@react-navigation/native';
import { getDeliveryPrice } from '../../utils/utils';

type Props = {
    route: RouteProp<RootStackParamList, 'Details'>
}

const DeliveryDetails = ({ route: { params: { delivery } } }: Props) => {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <View style={styles.deliveryDetails}>
                <View style={styles.itemsWrapper}>
                    <View style={styles.route}>
                        <Text style={styles.itemTitle}>From: </Text>
                        <Text style={styles.itemTitle}>{delivery.route?.start}</Text>
                    </View>
                    <View style={styles.route}>
                        <Text style={styles.itemTitle}>To: </Text>
                        <Text style={styles.itemTitle}>{delivery.route?.end}</Text>
                    </View>
                </View>
                <View style={styles.itemsWrapper}>
                    <Text style={styles.itemTitle}>Goods to deliver</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: delivery.goodsPicture,
                            }}
                            style={styles.image}
                            onLoadStart={() => setLoading(true)}
                            onLoadEnd={() => setLoading(false)}
                            onError={(error) => console.log(error)} />
                        {loading ?
                            <View style={[StyleSheet.absoluteFill, styles.imageOverlay]}>
                                <ActivityIndicator/>
                            </View>
                            : null}
                    </View>
                </View>
                <View style={[styles.route, styles.itemsWrapper]}>
                    <Text style={styles.itemTitle}>Delivery fee</Text>
                    <Text style={styles.itemTitle}>${getDeliveryPrice(delivery.deliveryFee, delivery.surcharge)}</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Button title='Add to favorite' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryDetails: {
        justifyContent: 'space-evenly',
        flex: 2,
    },
    imageContainer: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        backgroundColor: '#ebebeb',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
    },
    itemsWrapper: {
        padding: 15,
        borderWidth: 1
    },
    route: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    itemTitle: {
        fontSize: 18,
        margin: 5
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 16
    }
})

export default DeliveryDetails;