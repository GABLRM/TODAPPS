import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import ProfileScreen from '@/screens/ProfileScreen';

const Tabs = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false, }} tabBar={(props) => {
        return <BottomNavigationBar {...props} />
    }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}
export default NavigationBar;
