import { StyleSheet, View } from "react-native"
import Header from "../../components/Header/Header";
import Home from "../Home/Home";

const Main = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Home />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default Main;