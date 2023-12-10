import { useState } from "react";
import { Image, View, ActivityIndicator, StyleSheet } from "react-native";

import { styles } from './styles'

type Props = {
    deliveryImage: string
    containerSize: {
        width: number
        height: number
    }
}

const ImageContainer = ({ deliveryImage, containerSize }: Props) => {

    const [loading, setLoading] = useState<boolean>(true);

    return (
        <View style={[styles.imageContainer, containerSize]}>
            <Image
                source={{
                    uri: deliveryImage,
                }}
                style={styles.image}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
                onError={(error) => console.log(error)} />
            {loading ?
                <View style={[StyleSheet.absoluteFill, styles.imageOverlay]}>
                    <ActivityIndicator />
                </View>
                : null}
        </View>
    );
};

export default ImageContainer;