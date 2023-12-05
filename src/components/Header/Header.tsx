import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    const homePage = true
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{homePage ? 'My Deliveries' : 'Delivery Detais'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#ccc',
        maxHeight: 100
    }, 
    text: {
        fontSize: 24,
        textAlign: 'center',
        padding: 10
    }
})

export default Header;