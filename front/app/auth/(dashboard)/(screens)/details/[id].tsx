import React, { memo } from "react";
import HeaderApp from "@/components/HeaderApp";
import IconStatus from "@/components/IconStatus";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView, StyleSheet} from "react-native";
import { Colors, ColorsBase } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";

const viewDetails = () => {
  const { Client, Empresa, FechaVen, TotalPagar, Type, status } =
    useLocalSearchParams();
    const totalPagar = Number(TotalPagar).toLocaleString('es-ES')
  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <ThemedView style={{ gap: 10 }}>
        <HeaderApp />
        <ThemedText
          style={{ color: ColorsBase.cyan500, marginTop: 20 }}
          type="title">
          Detalles del Servicio
        </ThemedText>
        <ThemedView
          style={{
            maxWidth: 110,
            maxHeight: 120,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <IconStatus status={status.toString()} />
        </ThemedView>
        <ThemedView style={styles.N_cliente_Container}>
          <ThemedText type="default" style={styles.constainer_Text_N_cliente}>
            <MaterialIcons
              name="receipt-long"
              size={15}
              color={ColorsBase.cyan400}
            />
            {"  "}
            N° Cliente{"  "}
            <ThemedText
              type="defaultSemiBold"
              style={{ color: ColorsBase.cyan500 }}>
              {Client}
              {"  "}
            </ThemedText>
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ gap: 10 }}>
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <ThemedText>Fecha de emision</ThemedText>
            <ThemedText type="defaultSemiBold">{FechaVen}</ThemedText>
          </ThemedView>
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <ThemedText>Compañia</ThemedText>
            <ThemedText type="defaultSemiBold">{Empresa}</ThemedText>
          </ThemedView>
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <ThemedText>Servicio</ThemedText>
            <ThemedText type="defaultSemiBold">{Type}</ThemedText>
          </ThemedView>
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <ThemedText>Fecha de vencimiento</ThemedText>
            <ThemedText type="defaultSemiBold">{FechaVen}</ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView
          style={{
            borderColor: ColorsBase.red400,
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: ColorsBase.red50,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <ThemedText
            style={{ color: ColorsBase.red400, marginBottom: 12 }}
            type="subtitle">
            Total a pagar
          </ThemedText>
          <ThemedText style={{ color: ColorsBase.red400 }} type="title">
            $ {totalPagar}
          </ThemedText>
          <ThemedText style={{ color: ColorsBase.red400 }}>
            + Impuestos
          </ThemedText>
        </ThemedView>
        <Button
          mode="contained"
          buttonColor="#333333"
          style={styles.containe_ButtonPagar}
          contentStyle={styles.content_button}>
          <ThemedText
            type="default"
            style={{
              color: Colors.dark.text,
            }}>
            Pagar ${totalPagar}
          </ThemedText>
        </Button>
      </ThemedView>
    </ScrollView>
  );
};

export default memo(viewDetails);

const styles = StyleSheet.create({
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
  containe_ButtonPagar: {
    width: "100%",
    height: 48,
    marginBottom: 10,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  content_button: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
