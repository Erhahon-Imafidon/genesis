import { Formik } from "formik";
import * as Yup from "yup";

interface AppFormProps {
  initialValues: object;
  onSubmit: (values: object) => void;
  validationSchema: Yup.ObjectSchema<object>;
  children: React.ReactNode;
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
