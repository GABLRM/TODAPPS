import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/utils/Colors";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";

const BottomNavigationBar = ({ navigation, state }: BottomTabBarProps) => {
  const screens = state.routes;

  const getTabIcon = (name: string, isFocused: boolean) => {
    switch (name) {
      case "Home":
        return (
          <Ionicons
            name={isFocused ? "home" : "home-outline"}
            size={30}
            color={isFocused ? Colors.BLACK : Colors.BLACK}
          />
        );
      case "Profile":
        return (
          <Ionicons
            name={isFocused ? "person" : "person-outline"}
            size={30}
            color={isFocused ? Colors.BLACK : Colors.BLACK}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.navbarContainer}>
        <View style={styles.navbarInnerContainer}>
            {screens.map((route, index) => (
                <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.navigate(route.name)} key={index}>
                    {getTabIcon(route.name, index === state.index)}
                    <Text style={styles.navbarText}>{route.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);
};

const styles = StyleSheet.create({
navbarContainer: {
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    bottom: 0,
    paddingBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
},
navbarInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
},
navbarButton: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
},
navbarText: {
    color: Colors.WHITE,
    fontSize: 15,
}
});

export default BottomNavigationBar;
