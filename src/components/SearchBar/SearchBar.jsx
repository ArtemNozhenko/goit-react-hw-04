import { Formik, Field, Form } from "formik";
import toast from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim() === "") {
          toast.error("Fill in the input field!");
        } else {
          onSearch(values.query.trim());
        }
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
