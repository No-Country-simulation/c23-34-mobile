import { Colors, ColorsBase } from "@/constants/Colors";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Divider, ProgressBar } from "react-native-paper";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { router } from "expo-router";

interface PaymentProps {
  progress: number;
  totalDebt: string;
  totalPagados: string;
}
const TotalPayment: React.FC<PaymentProps> = ({
  progress,
  totalDebt,
  totalPagados,
}) => {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <Card
        mode="contained"
        style={[
          styles.container,
          {
            backgroundColor:
              theme === "light"
                ? Colors.light.background
                : Colors.dark.background,
          },
        ]}>
        <Card.Content style={{ gap: 8 }}>
          <ThemedText type="subtitle" style={{ color: ColorsBase.cyan400 }}>
            Total Restante
          </ThemedText>
          <ThemedView style={styles.priceRestante}>
            <ThemedText type="title" style={{ fontSize: 40, lineHeight: 40 }}>
              $ {totalDebt}
            </ThemedText>
            <ThemedText style={{ fontSize: 20 }}> ARS</ThemedText>
          </ThemedView>
          <ProgressBar progress={progress} color={ColorsBase.neutral600} />
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}>
            <ThemedView style={{ flexDirection: "row", gap: 5 }}>
              <ThemedText
                type="defaultSemiBold"
                style={{
                  color: ColorsBase.neutral700,
                }}>
                {progress * 100}%
              </ThemedText>
              <ThemedText style={{ color: ColorsBase.neutral700 }}>
                Pagado
              </ThemedText>
            </ThemedView>
            <ThemedView
              style={{
                flexDirection: "row",
                gap: 5,
                borderWidth: 1,
                borderRadius: 4,
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderColor: ColorsBase.neutral500,
              }}>
              <ThemedText
                type="defaultSemiBold"
                style={{ color: ColorsBase.neutral700 }}>
                $ {totalPagados}
              </ThemedText>
              <ThemedText
                type="default"
                style={{ color: ColorsBase.neutral700 }}>
                Pagado
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        buttonColor="#333333"
        style={{
          width: "100%",
          height: 48,
          marginBottom: 10,
          borderRadius: 16,
          alignItems: "flex-start",
        }}
        contentStyle={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() =>
          router.push("/auth/(dashboard)/(screens)/addServicio/AddNewService")
        }>
        <ThemedText
          type="default"
          style={{
            color: theme !== "light" ? Colors.light.text : Colors.dark.text,
          }}>
          Ir a pagar ${totalDebt}
        </ThemedText>
      </Button>
      <Divider style={{ backgroundColor: ColorsBase.cyan400, height: 1 }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: Colors.light.background,
    borderWidth: 0.5,
    borderColor: ColorsBase.cyan500,
  },
  priceRestante: {
    flexDirection: "row",
    alignItems: "baseline",
    alignSelf: "flex-start",
    marginVertical: 7,
  },
});

export default memo(TotalPayment);
