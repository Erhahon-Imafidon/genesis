import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Category } from "@/components/ui/AppPicker";
import SubmitButton from "@/components/forms/SubmitButton";
import AppFormPicker from "@/components/forms/AppFormPicker";
import AppForm from "@/components/forms/AppForm";
import AppFormField from "@/components/forms/AppFormField";

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
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField placeholder="Title" inputName={"title"} maxLength={255} />

        <AppFormField
          inputName={"price"}
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width="50%"
        />

        <AppFormPicker
          items={categories}
          inputName="category"
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          inputName={"description"}
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={2}
        />

        <SubmitButton title="Post" />
      </AppForm>
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
