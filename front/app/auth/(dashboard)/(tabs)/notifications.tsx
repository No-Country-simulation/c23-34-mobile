import React, { useState } from "react";
import HeaderApp from "@/components/HeaderApp";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import Notification from "@/components/Notification";

const notifications = () => {
  const [selected, setSelected] = useState("Todos");
  const data = [
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Pendiente",
    },
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Atrasado",
    },
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Atrasado",
    },
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Atrasado",
    },
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Pagado",
    },
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Atrasado",
    },
    {
      title: "!Tu factura del gas esta por vencer",
      subtitle:
        "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
      time: "Hace 2 horas",
      status: "Atrasado",
    },
  ];
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View style={{ gap: 20 }}>
          <HeaderApp />
          <TouchableOpacity style={styles.ButtonMarcar}>
            <View style={styles.textWrapper}>
              <ThemedText type="defaultSemiBold">Marcar como leído</ThemedText>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <MaterialIcons name="announcement" size={30} color="black" />
            <ThemedText type="title">Notificaciones</ThemedText>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}>
            <View style={styles.ButtonMarcarButtons}>
              {["Todos", "No leídos", "Leídos"].map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterLeidos,
                    selected === filter && styles.selectedButton,
                  ]}
                  onPress={() => setSelected(filter)}>
                  <ThemedText
                    style={
                      selected === filter ? styles.selectedText : styles.text
                    }>
                    {filter}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <FlatList
            data={data}
            style={{ gap: 10 }}
            renderItem={({ item }) => <Notification item={item} />}
          />
        </View>
      }
    />
  );
};

export default notifications;

const styles = StyleSheet.create({
  ButtonMarcar: {
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
  textWrapper: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
    borderRadius: 8,
    backgroundColor: "white",
  },
  filterLeidos: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: ColorsBase.cyan500,
  },
  ButtonMarcarButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  selectedButton: {
    backgroundColor: ColorsBase.cyan500,
  },
  text: {
    color: "black",
  },
  selectedText: {
    color: "white",
  },
});
