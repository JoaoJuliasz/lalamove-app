import { StyleSheet, Text, TextInput } from "react-native";

const SearchBar = () => {

    const texto = 'asdasdasd'

    return (
        <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            value={texto}
            placeholder="Find your delivery"
            // keyboardType="web-search"
        />
    );
};

const styles = StyleSheet.create({
    input: {
    //   height: 40,
    //   margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default SearchBar;