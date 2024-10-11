import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { categories } from "@/lib/data";
import SubmitButton from "@/components/forms/SubmitButton";
import AppFormPicker from "@/components/forms/AppFormPicker";
import AppForm from "@/components/forms/AppForm";
import AppFormField from "@/components/forms/AppFormField";
import CategoryPickerItem from "@/components/ui/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

// const categories: Category[] = [
//   {
//     backgroundColor: "#fc5c65",
//     name: "floor-lamp",
//     label: "Furniture",
//     value: 1,
//   },
//   {
//     backgroundColor: "#fd9644",
//     name: "car",
//     label: "Cars",
//     value: 2,
//   },
//   {
//     backgroundColor: "#fed330",
//     name: "camera",
//     label: "Cameras",
//     value: 3,
//   },
//   {
//     backgroundColor: "#26de81",
//     name: "cards",
//     label: "Games",
//     value: 4,
//   },
//   {
//     backgroundColor: "#2bcbba",
//     name: "shoe-heel",
//     label: "Clothing",
//     value: 5,
//   },
//   {
//     backgroundColor: "#45aaf2",
//     name: "basketball",
//     label: "Sports",
//     value: 6,
//   },
//   {
//     backgroundColor: "#4b7bec",
//     name: "headphones",
//     label: "Movies & Music",
//     value: 7,
//   },
//   {
//     backgroundColor: "#a55eea",
//     name: "book-open-variant",
//     label: "Books",
//     value: 8,
//   },
//   {
//     backgroundColor: "#778ca3",
//     name: "application",
//     label: "Other",
//     value: 9,
//   },
// ];

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
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
