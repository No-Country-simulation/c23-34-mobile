import {
  AddService,
  apiAddService,
} from "@/api/providers.service";
import authStyles from "@/components/auth/authStyles";
import MyInputText from "@/components/auth/MyInputText";
import SimpleButton from "@/components/auth/SimpleButton";
import HeaderApp from "@/components/dashboard/HeaderApp";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";

export default function ServiceAdd() {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(true);
  const { serviceId, servName } = useLocalSearchParams<{
    serviceId: string;
    servName: string;
  }>();
  const { user } = useAuthStore();
  const { control, handleSubmit, getValues } = useForm<AddService>({
    defaultValues: {
      clientId: "88888888",
      serviceId: serviceId,
      userId: user.id,
    },
  });

  const onHandleSubmit = async () => {
    setServerError("");
    setLoading(true);
    const { data, ok } = await apiAddService(getValues());
    if (ok) {
      console.log(data);
      return;
    }
    setServerError(data.message);
    setLoading(false);
  };

  return (
    <ScrollView
      style={{ padding: 15, flex: 1 }}
      contentContainerStyle={{ justifyContent: "space-between" }}
    >
      <HeaderApp />
      <ThemedText type="subtitle" style={{ paddingTop: 20 }}>
        Ingresa tu número de cliente
      </ThemedText>
      <Text>{servName}</Text>
      <ThemedText
        style={{
          color: ColorsBase.cyan500,
          paddingVertical: 15,
          paddingHorizontal: 5,
          fontWeight: 500,
        }}
      >
        Número de cliente:
      </ThemedText>
      {!!serverError && (
        <View style={[authStyles.formBackError, { marginVertical: 12 }]}>
          <Text>{serverError}</Text>
        </View>
      )}
      <MyInputText
        name="clientId"
        iconName="person.2"
        control={control}
        placeholder="Ej: 123123123123"
      />
      <SimpleButton
        onPress={handleSubmit(onHandleSubmit)}
        style={{
          marginVertical: 15,
          borderRadius: 32,
          backgroundColor: ColorsBase.neutral800,
        }}
      >
        <ThemedText style={{ color: ColorsBase.neutral50, fontWeight: 700 }}>
          Agregar Servicio
        </ThemedText>
      </SimpleButton>
    </ScrollView>
  );
}

function StatusSnack({ type }: { type: "retarded" | "pending" | "payed" }) {
  return <View></View>;
}
