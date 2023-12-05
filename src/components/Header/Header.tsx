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
        justifyContent: 'center',
        height: 60,
        padding: 15,
    }, 
    text: {
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header;