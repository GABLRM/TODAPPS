import { Colors } from "@/utils/Colors";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text style={{ color: Colors.BLACK }}>Home Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;