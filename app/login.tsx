import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image } from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";
import ErrorMessage from "@/components/ui/ErrorMessage";

type FormValues = {
  email: string;
  pwd: string;
};

const valdidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  pwd: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: "", pwd: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={valdidationSchema}
      >
        {/*This ensures that handleSubmit is correctly typed without needing to use as any.*/}
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          touched,
        }: FormikProps<FormValues>) => (
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
              onBlur={() => setFieldTouched("pwd")}
            />
            <ErrorMessage error={errors.pwd || ""} visible={touched.pwd} />

            <AppButton title="Login" onPress={handleSubmit} />
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
