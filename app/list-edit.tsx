import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Category } from "@/components/ui/AppPicker";
import AppTextInput from "@/components/forms/AppTextInput";
import SubmitButton from "@/components/forms/SubmitButton";
import ErrorMessage from "@/components/forms/ErrorMessage";
import AppFormPicker from "@/components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories: Category[] = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListEditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, values, setFieldTouched, touched, errors }) => (
          <>
            <AppTextInput
              placeholder="Title"
              maxLength={255}
              onChangeText={handleChange("title")}
              value={values.title}
              onBlur={() => setFieldTouched("title")}
            />
            <ErrorMessage error={errors.title || ""} visible={touched.title} />

            <AppTextInput
              placeholder="Price"
              keyboardType="numeric"
              maxLength={8}
              value={values.price}
              onChangeText={handleChange("price")}
              onBlur={() => setFieldTouched("price")}
            />
            <ErrorMessage error={errors.price || ""} visible={touched.price} />

            <AppFormPicker
              items={categories}
              inputName="category"
              placeholder="Category"
            />

            <AppTextInput
              placeholder="Description"
              maxLength={255}
              multiline
              numberOfLines={2}
              value={values.description}
            />

            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

export default ListEditScreen;
