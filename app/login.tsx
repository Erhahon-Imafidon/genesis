import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";
import Colors from "@/constants/Colors";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: "", pwd: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
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
              onChangeText={handleChange("email")}
              value={values.email}
            />
            <AppTextInput
              name="lock"
              placeholder="password"
              autoCapitalize={"none"}
              autoCorrect={false}
              secureTextEntry
              textContentType={"password"}
              onChangeText={handleChange("pwd")}
              value={values.pwd}
            />
            <AppButton title={"Login"} onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
