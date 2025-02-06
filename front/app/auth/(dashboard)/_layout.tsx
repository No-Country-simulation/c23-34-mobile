import { NavigationContainer } from "@react-navigation/native";
import { router, Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Animated, StyleSheet, View } from "react-native";
import { Colors, ColorsBase } from "@/constants/Colors";

export default function DashboardLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: ColorsBase.cyan500,
          sceneStyle: {
            flex: 1,
            backgroundColor:
              route.name == "(tabs)/notifications" ||
              route.name == "(screens)/details/[id]"
                ? "#f7f7f7"
                : ColorsBase.cyan100,
            paddingHorizontal: 15,
          },
          tabBarStyle: styles.barStyles,
          tabBarIconStyle: { marginTop: 10 },
          tabBarIcon: ({ focused }) => {
            const scale = focused ? 1.2 : 1;
            return (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: focused ? ColorsBase.cyan500 : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ scale }],
                }}>
                <MaterialIcons
                  name={
                    route.name === "(tabs)/home"
                      ? "home-filled"
                      : route.name === "(tabs)/history"
                      ? "receipt-long"
                      : route.name === "(tabs)/notifications"
                      ? "notifications-none"
                      : "account-circle"
                  }
                  size={30}
                  color={Colors.light.background}
                />
              </View>
            );
          },
        })}>
        <Tabs.Screen
          name="(tabs)/home"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(tabs)/history"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(tabs)/notifications"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(tabs)/perfil"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(screens)/details/[id]"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: () => null,
            tabBarItemStyle: { display: "none" },
          }}
        />
        <Tabs.Screen 
        name="(screens)/addServicio/AddNewService"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => null,
          tabBarItemStyle: { display: "none" },
        }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  barStyles: {
    borderRadius: 24,
    backgroundColor: "#333333",
    justifyContent: "center",
    height: 64,
    marginHorizontal: 10,
  },
});
