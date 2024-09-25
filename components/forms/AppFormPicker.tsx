import { DimensionValue } from "react-native";
import AppPicker, { Category } from "@/components/ui/AppPicker";
import ErrorMessage from "@/components/forms/ErrorMessage";
import { FormikErrors, useFormikContext } from "formik";
import React from "react";

type AppFormPickerProps = {
  items: any[];
  inputName: string;
  placeholder: string;
  width?: DimensionValue;
  PickerItemComponent?: React.FC<any>;
};

// Type guard to check if an object is of type Category
const isCategory = (item: any): item is Category => {
  return item && typeof item === "object" && "label" in item && "value" in item;
};

const AppFormPicker = ({
  items,
  inputName,
  placeholder,
  width,
  PickerItemComponent,
}: AppFormPickerProps) => {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormikErrors<any>>();

  const error = typeof errors[inputName] === "string" ? errors[inputName] : "";
  const visible =
    typeof touched[inputName] === "boolean" ? touched[inputName] : false;
  const selectedItem = isCategory(values[inputName])
    ? values[inputName]
    : undefined;

  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(inputName, item)}
        selectedItem={isCategory(selectedItem) ? selectedItem : undefined}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={error || ""} visible={visible} />
    </>
  );
};

export default AppFormPicker;
