import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image } from "react-native";
import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";
import Colors from "@/constants/Colors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/logo-red.png")}
        style={styles.logo}
      />
      <AppTextInput
        name="email"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={"Email"}
        keyboardType={"email-address"}
        textContentType={"emailAddress"}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <AppTextInput
        name="lock"
        placeholder="password"
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry
        textContentType={"password"}
        onChangeText={(text) => setPwd(text)}
        value={pwd}
      />
      <AppButton title={"Login"} onPress={() => console.log(email, pwd)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
