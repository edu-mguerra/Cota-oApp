import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerStyle: { backgroundColor: "#1976d2" },
                    headerTintColor: "#fff",
                    drawerActiveTintColor: "#1976d2",
                    drawerLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Dólar Americano",
                        drawerLabelStyle: {
                            color: "#1e88e5",
                            fontWeight: "bold",
                        }
                    }}
                />
                <Drawer.Screen
                    name="cad"
                    options={{
                        title: "Dólar Canadense",
                        drawerLabelStyle: {
                            color: "#ff7043",
                            fontWeight: "bold",
                        }
                    }}
                />
                <Drawer.Screen
                    name="eur"
                    options={{
                        title: "Euro",
                        drawerLabelStyle: {
                            color: "#388e3c",
                            fontWeight: "bold",
                        }

                    }}
                />
                <Drawer.Screen
                    name="btc"
                    options={{
                        title: "Bitcoin",
                        drawerLabelStyle: {
                            color: "#f7931a",
                            fontWeight: "bold",
                        },
                    }}
                />
                <Drawer.Screen
                    name="eth"
                    options={{
                        title: "Ethereum",
                        drawerLabelStyle: {
                            color: "#6e5494", 
                            fontWeight: "bold",
                        },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
