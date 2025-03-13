import { apiLogin, LoginForm } from "@/api/auth.service";
import authStyles from "@/components/auth/authStyles";
import MyInputText from "@/components/auth/MyInputText";
import SimpleButton from "@/components/auth/SimpleButton";
import ThemedLink from "@/components/auth/ThemedLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors, ColorsBase } from "@/constants/Colors";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import LoadingScreen from "../loading";
import { useAuthStore } from "@/hooks/useAuthStore";
import { AUTH_STATUS } from "@/constants/enums/AuthStatus";

const loginFormDefaultValues: LoginForm = {
  userEmail: "",
  userPassword: "",
};

export default function LoginView() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isValid, isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: loginFormDefaultValues,
  });
  const [hidePassword, setHidePassword] = useState(true);
  const {errorMessage, startLogin, status} = useAuthStore();

  const passwordRef = useRef<TextInput>(null);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleSubmitForm = async() => {
      await startLogin(getValues());
  };

  return (
    <ThemedView style={{ height: "100%", width: "100%" }}>
      <LoginHeader />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ maxHeight: 900 }}
        contentContainerStyle={baseStyle.scrollContainer}>
        <View>
          <ThemedText style={baseStyle.title}>Ingresa a tu cuenta</ThemedText>
          <ThemedText style={baseStyle.subtitle}>
            ¡Y paga tus servicios cuando quieras!
          </ThemedText>
        </View>
        <SafeAreaView style={[authStyles.form, baseStyle.form]}>
        {!!errorMessage.on && errorMessage.on == "auth"&& <ThemedView style={authStyles.formBackError}>
          <ThemedText>
            {errorMessage.message}
          </ThemedText>
        </ThemedView>}
          <MyInputText<LoginForm>
            control={control}
            id="userEmail"
            name="userEmail"
            inputMode="email"
            keyboardType="email-address"
            placeholder="Email"
            iconName="person.2"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef?.current?.focus();
            }}
            rules={{ required: "Requerido" }}
          ></MyInputText>
          <MyInputText<LoginForm>
            control={control}
            id="password"
            name="userPassword"
            inputMode="text"
            placeholder="Password"
            iconName="shield"
            secureTextEntry={hidePassword}
            iconAction={hidePassword ? "eye.slash" : "eye"}
            handleIconAction={handleHidePassword}
            onSubmitEditing={handleSubmit(handleSubmitForm)}
            rules={{ required: "Requerido" }}
            myref={passwordRef}
          ></MyInputText>

          <SimpleButton
            onPress={handleSubmit(handleSubmitForm)}
            style={{ backgroundColor: Colors.light.text }}
          >
            <ThemedText style={{ fontWeight: 700, color: Colors.dark.tint }}>
              Iniciar sesión
            </ThemedText>
          </SimpleButton>
        </SafeAreaView>
        <View style={{ alignItems: "center", gap: 16 }}>
          <ThemedText>
            ¿No Tienes Cuenta?{" "}
            <ThemedLink href={"/auth/(register)/register/personal"}>
              ¡Créala aquí!
            </ThemedLink>
          </ThemedText>
          <ThemedText>
            <ThemedLink href={"/"}>¿Olvidaste tu Contraseña?</ThemedLink>
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

function LoginHeader() {
  return (
    <View
      style={{
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={require("@/assets/images/app-icon.png")}
        style={{ height: 19, width: 63 }}
      />
    </View>
  );
}

export const baseStyle = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    flex: 1,
    padding: 15,
    justifyContent: "space-around",
  },
  form: {
    gap: 30,
    flex: undefined,
  },
  title: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 38,
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: ColorsBase.neutral500,
  },
});
