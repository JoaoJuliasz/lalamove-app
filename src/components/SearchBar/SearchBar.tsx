import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const texto = 'asdasdasd'

  return (
    <View style={styles.container}>
      {!showSearch ?
        <>
          <Text>My Deliveries</Text>
          <AntDesign name="search1" size={24} color="black" onPress={() => setShowSearch(true)} />
        </>
        :
        <>
          <View
            style={styles.searchBar__clicked}
          >
            {/* search Icon */}
            <Feather
              name="search"
              size={20}
              color="black"
              style={{ marginLeft: 1 }}
            />
            {/* Input field */}
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={'searchPhrase'}
            // onChangeText={setSearchPhrase}
            />
            {/* cross Icon, depending on whether the search bar is clicked or not */}
            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              // setSearchPhrase("")
            }} />
          </View>
        </>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

export default SearchBar;