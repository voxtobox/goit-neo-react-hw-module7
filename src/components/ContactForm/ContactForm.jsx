import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    number: Yup.string()
      .required('Required')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <br />
        <label htmlFor={numberFieldId}>Number</label>
        <Field name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <br />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
