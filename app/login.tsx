import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image } from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import AppTextInput from "@/components/forms/AppTextInput";
import ErrorMessage from "@/components/forms/ErrorMessage";
import SubmitButton from "@/components/forms/SubmitButton";
import AppFormField from "@/components/forms/AppFormField";
import Colors from "@/constants/Colors";

type FormValues = {
  email: string;
  pwd: string;
};

const valdidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  pwd: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/logo-red.png")}
        style={styles.logo}
      />
      <Formik
        initialValues={{ email: "", pwd: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={valdidationSchema}
      >
        {/*Used the FormikProps from formik to ensure that handleSubmit is correctly typed without needing to use as any.*/}
        {({
          handleChange,
          values,
          errors,
          setFieldTouched,
          touched,
        }: FormikProps<FormValues>) => (
          <>
            <AppFormField
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={"Email"}
              keyboardType={"email-address"}
              textContentType={"emailAddress"}
              inputName={"email"}
            />

            <AppFormField
              name="lock"
              placeholder="password"
              autoCapitalize={"none"}
              autoCorrect={false}
              secureTextEntry
              textContentType={"password"}
              inputName={"pwd"}
            />

            <SubmitButton title="Login" />
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

  pwdInfo: {
    fontSize: 12,
    color: Colors.mediumGray,
    marginBottom: 10,
  },
});

export default LoginScreen;
