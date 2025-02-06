import { memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, IconButton } from "react-native-paper";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialIcons } from "@expo/vector-icons";

const AllCards = () => {
  const insets = useSafeAreaInsets();
  const data = [
    {
      Type: "Debito",
    },
    {
      Type: "Credito",
    },
  ];

  return (
    <Animated.FlatList
      data={data}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 320,
        flexGrow: 1,
      }}
      renderItem={({ item }) => (
        <LinearGradient
          colors={
            item.Type !== "Debito"
              ? ["#0048b8", "#0072ff"]
              : ["#148A14", "#47B747"]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}>
          <View style={styles.header}>
            <IconButton icon="credit-card" iconColor="white" size={20} />
            <TouchableOpacity>
              <IconButton icon="pencil" iconColor="white" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Tarjeta de {item.Type}</Text>
          <View style={styles.dottedLine} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Visa termina en <Text style={styles.boldText}>4583</Text>
            </Text>
            <Image
              source={require("../assets/images/visa-blue-logo-19529.png")}
              style={styles.logo}
            />
          </View>
        </LinearGradient>
      )}
      ListFooterComponent={
        <Button
          mode="contained"
          buttonColor="#333333"
          icon={() => <MaterialIcons name="add-card" size={25} color="white" />}
          style={styles.containe_ButtonPagar}
          contentStyle={styles.content_button}>
          <ThemedText
            type="default"
            style={{
              color: Colors.light.text,
            }}>
            Agregar Tarjeta
          </ThemedText>
        </Button>
      }
    />
  );
};
const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
    flex: 1,
    borderRadius: 15,
    padding: 20,
    justifyContent: "space-between",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  dottedLine: {
    borderWidth: 0.5,
    borderColor: "white",
    borderStyle: "dotted",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
  containe_ButtonPagar: {
    width: "100%",
    height: 48,
    marginBottom: 10,
    borderRadius: 32,
  },
  content_button: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default memo(AllCards);
