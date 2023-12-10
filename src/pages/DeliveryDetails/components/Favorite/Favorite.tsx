import { useContext } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { AppContext } from '../../../../context/Context';
import { styles } from './favorite.styles';

type Props = {
    deliveryId: string
}

const Favorite = ({ deliveryId }: Props) => {

    const context = useContext(AppContext)

    const setFavorite = async () => {
        try {
            const updtFavorites = JSON.parse(JSON.stringify(context?.favorites))
            updtFavorites[deliveryId] = !updtFavorites[deliveryId]
            context?.setFavorites(prev => updtFavorites)
            const jsonValue = JSON.stringify(updtFavorites);
            await AsyncStorage.setItem('favorites', jsonValue);
        } catch (e) {
            // saving error
            console.log(e)
        }
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={setFavorite}>
                <Text style={styles.buttonText} onPress={setFavorite}>
                    {`${context?.favorites[deliveryId] ? 'Remove from' : 'Add to'} favorite`}
                </Text>
                <AntDesign name={context?.favorites[deliveryId] ? 'heart' : 'hearto'} size={24} color="#f01f1f" />
            </TouchableOpacity>
        </View>
    );
};

export default Favorite;