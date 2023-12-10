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
    wrapper: {
        justifyContent: 'flex-end',
        height: '100%',
        alignItems: 'center'
    },
    favorite: {
        padding: 10
    },
    price: {
        alignSelf: 'flex-end',
        fontSize: 16,
        padding: 8,
    },
})