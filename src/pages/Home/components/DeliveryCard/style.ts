import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
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