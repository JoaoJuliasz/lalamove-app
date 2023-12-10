import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        // paddingBottom: 12
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16
    },
    buttonText: {
        fontSize: 18,
    }
})