import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import AppTextInput from "@/components/forms/AppTextInput";
import ErrorMessage from "@/components/forms/ErrorMessage";
import AppText from "@/components/ui/AppText";
import SubmitButton from "@/components/forms/SubmitButton";
import Colors from "@/constants/Colors";

type FormValues = {
  email: string;
  pwd: string;
};

const valdidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  pwd: Yup.string()
    .required()
    .min(6)
    .matches(/[a-z]/, "must contain one lowercase letter")
    .matches(/[A-Z]/, "must contain one uppercase letter")
    .matches(/[0-9]/, "must contain one number")
    .matches(/[!@#$%]/, "must contain one special character")
    .label("Password"),
});

const LoginScreen = () => {
  const [pwdFocus, setPwdFocus] = useState(false);
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
            <AppTextInput
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={"Email"}
              keyboardType={"email-address"}
              textContentType={"emailAddress"}
              onChangeText={handleChange("email")}
              value={values.email}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors.email || ""} visible={touched.email} />
            <AppTextInput
              name="lock"
              placeholder="password"
              autoCapitalize={"none"}
              autoCorrect={false}
              secureTextEntry
              textContentType={"password"}
              onChangeText={handleChange("pwd")}
              value={values.pwd}
              onBlur={() => {
                setFieldTouched("pwd");
                setPwdFocus(false);
              }}
              onFocus={() => setPwdFocus(true)}
            />
            <ErrorMessage error={errors.pwd || ""} visible={touched.pwd} />
            {pwdFocus && (
              <AppText style={styles.pwdInfo}>
                Password must Contain at least an uppercase, lowercase, a number
                and one special character (!@#$%)
              </AppText>
            )}

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
