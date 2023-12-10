import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    deliveryDetails: {
        justifyContent: 'space-evenly',
        flex: 2,
    },
    itemsWrapper: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    route: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    itemTitle: {
        fontSize: 18,
        margin: 5
    },
})