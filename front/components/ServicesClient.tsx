import React, { memo, useEffect } from "react";
import { Colors, ColorsBase } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Divider, Icon } from "react-native-paper";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import IconWater from "@/assets/svgs/icon-water";
import IconElectricity from "@/assets/svgs/icon-electricity";
import IconFlame from "@/assets/svgs/icon-flame";
import { ThemedView } from "./ThemedView";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import IconStatus from "./IconStatus";
import useServices from "@/hooks/useServices";

interface ServicesClientItem {
  id: number;
  type: string;
  Empresa: string;
  Client: string;
  status: string;
  fechVen: string;
  totalPagar: string;
}
interface ServicesClientProps {
  data: ServicesClientItem[];
}

const ServicesClient: React.FC<ServicesClientProps> = ({ data = [] }) => {
  const { calculateDate } = useServices();
  const theme = useColorScheme() ?? "light";
  return (
    <Animated.FlatList
      entering={FadeInUp}
      keyExtractor={(item, index) => item.id?.toString() || index.toString()}
      exiting={FadeOutUp}
      data={data}
      ListEmptyComponent={() => (
        <ThemedView style={styles.container_Empty}>
          <Icon source={"check-decagram-outline"} size={40} color={"#75C975"} />
          <ThemedText type="title" style={styles.colorText_Empty}>
            ¡Parece que estas al dia!
          </ThemedText>
          <ThemedText type="default" style={styles.colorText_Empty}>
            ¿Tienes algún otro servicio que agregar?
          </ThemedText>
        </ThemedView>
      )}
      scrollEnabled
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => (
        <Card
          mode="contained"
          style={[
            styles.container_renderItem,
            {
              backgroundColor:
                theme === "light"
                  ? Colors.light.background
                  : Colors.dark.background,
            },
          ]}>
          <Card.Content style={{ gap: 10 }}>
            <ThemedView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <View
                style={{
                  flexDirection: "row",
                }}>
                {item.type === "Agua" ? (
                  <IconWater
                    bgColor={ColorsBase.blue50}
                    color={ColorsBase.blue400}
                    size={32}
                    scale={1.4}
                  />
                ) : item.type === "Electricidad" ? (
                  <IconElectricity
                    scale={1.4}
                    size={32}
                    color={ColorsBase.yellow400}
                    bgColor={ColorsBase.yellow50}
                  />
                ) : item.type === "Gas" ? (
                  <IconFlame
                    bgColor={ColorsBase.red50}
                    color={ColorsBase.red400}
                    size={32}
                    scale={1.5}
                  />
                ) : (
                  <MaterialIcons
                    name="wifi"
                    color={"#834E9C"}
                    size={30}
                    style={{
                      backgroundColor: "#e2cced",
                      padding: 8,
                      borderRadius: 10,
                    }}
                  />
                )}

                <ThemedView style={{ marginLeft: 10 }}>
                  <ThemedText type="defaultSemiBold">{item.type}</ThemedText>
                  <ThemedText
                    type="default"
                    style={{
                      color:
                        item.type == "Agua"
                          ? ColorsBase.blue400
                          : item.type === "Gas"
                          ? ColorsBase.red400
                          : item.type === "Internet"
                          ? "#834E9C"
                          : ColorsBase.yellow400,
                    }}>
                    {item.Empresa}
                  </ThemedText>
                </ThemedView>
              </View>
              <IconStatus status={item.status} />
            </ThemedView>

            <ThemedView style={styles.N_cliente_Container}>
              <ThemedText
                type="default"
                style={styles.constainer_Text_N_cliente}>
                N° Cliente{"  "}
                <ThemedText
                  type="defaultSemiBold"
                  style={{ color: ColorsBase.cyan500 }}>
                  {item.Client}
                  {"  "}
                </ThemedText>
                <MaterialCommunityIcons
                  name="content-copy"
                  size={18}
                  color={ColorsBase.cyan500}
                />
              </ThemedText>
            </ThemedView>
            <View
              style={[
                styles.container_vencimiento,
                {
                  backgroundColor:
                    item.status === "Atrasado"
                      ? ColorsBase.red400
                      : "transparent",
                },
              ]}>
              <ThemedText
                style={{
                  color: item.status === "Atrasado" ? "white" : "black",
                }}>
                Vencimiento
              </ThemedText>
              <ThemedText
                type="defaultSemiBold"
                style={{
                  color:
                    item.status === "Atrasado"
                      ? "white"
                      : item.status === "Pendiente"
                      ? ColorsBase.yellow400
                      : ColorsBase.green400,
                }}>
                {item.status === "Pagado"
                  ? `Pagado el ${item.fechVen}`
                  : calculateDate(item.fechVen)}
              </ThemedText>
            </View>
            <View style={styles.container_TotalPagar}>
              <ThemedText type="defaultSemiBold">Total a pagar</ThemedText>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <ThemedText>ARS</ThemedText>
                  <ThemedText type="title"> $ {parseInt(item.totalPagar).toLocaleString('es-ES')}</ThemedText>
                </View>
                <ThemedText style={styles.text_impuestos}>
                  + Impuestos Incluidos
                </ThemedText>
              </View>
            </View>
            <View style={styles.container_Buttons_pagar}>
              <Button
                mode="outlined"
                textColor={ColorsBase.cyan500}
                style={{
                  borderColor: ColorsBase.cyan500,
                  marginEnd: 10,
                }}
                onPress={() =>
                  router.push({
                    pathname: `/auth/(dashboard)/(screens)/details/[id]`,
                    params: {
                      id: item.id,
                      Client: item.Client,
                      Empresa: item.Empresa,
                      FechaVen: item.fechVen,
                      TotalPagar: parseInt(item.totalPagar),
                      Type: item.type,
                      status: item.status,
                    },
                  })
                }>
                <ThemedText
                  type="default"
                  style={{ color: ColorsBase.cyan500 }}>
                  Ver Detalles
                </ThemedText>
              </Button>
              <Button mode="contained" buttonColor={ColorsBase.cyan500}>
                <ThemedText
                  type="default"
                  style={{ color: Colors.light.background }}>
                  Pagar ahora
                </ThemedText>
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default ServicesClient;

const styles = StyleSheet.create({
  container_Empty: {
    backgroundColor: "transparent",
    alignItems: "center",
    gap: 10,
  },
  colorText_Empty: {
    color: ColorsBase.cyan400,
  },
  container_renderItem: {
    borderWidth: 0.2,
    borderColor: "black",
    marginBottom: 16,
  },
  N_cliente_Container: {
    flexDirection: "row",
    gap: 5,
    borderRadius: 4,
    paddingVertical: 2,
  },
  constainer_Text_N_cliente: {
    color: ColorsBase.cyan500,
    backgroundColor: ColorsBase.cyan100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: ColorsBase.cyan500,
  },
  container_vencimiento: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.4,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: "center",
    borderRadius: 8,
    flexWrap: "wrap",
  },
  container_TotalPagar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text_impuestos: {
    fontSize: 14,
    color: ColorsBase.blue400,
    textAlign: "right",
  },
  container_Buttons_pagar: {
    justifyContent: "center",
    gap: 10,
    alignSelf: "center",
    width: "98%",
    marginTop: 10,
  },
});
