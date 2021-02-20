import React from 'react';
import {
  // useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import './style.scss';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumber: ['']
}

const onSubmit = values => {
  console.log(values);
}

// const validate = values => {
//   let errors = {};
  
//   if (!values.name) {
//     errors.name = 'Required'
//   }
//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format';
//   }
//   if (!values.phone) {
//     errors.phone = 'Required'
//   }

//   return errors;
// }

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  phone: Yup.string().required('Required')
})

const SimpleForm = () => {
  
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema
  // })

  // console.log(formik.touched);

  return (
  <div className="formBlock">
    <h1>Simple Form</h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
        <Form
        //  onSubmit={formik.handleSubmit}
        >
            <div className="inputBlock">
                <label htmlFor="name" className="label">Имя</label>
                <Field
                  type="text"
                  className="input"
                  id="name"
                  name="name"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.name}
                  // {...formik.getFieldProps('name')}
                  placeholder="Введите Ваше имя" />
                  <ErrorMessage name='name' component={TextError} />
                {/* {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null} */}
            </div>
            
            <div className="inputBlock">
                <label htmlFor="email" className="label">Еmail</label>
                <Field
                  type="email"
                  className="input"
                  id="email"
                  name="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.email}
                  // {...formik.getFieldProps('email')}
                  placeholder="Введите Ваш email" />
                <ErrorMessage name='email'>
                  {(ErrorMessage) => <div className="error">{ErrorMessage}</div>}
                </ErrorMessage>
                {/* {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null} */}
            </div>
            
            <div className="inputBlock">
                <label htmlFor="phone" className="label">Номер телефона</label>
                <Field
                  type="text"
                  className="input"
                  id="phone"
                  name="phone"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.phone}
                  // {...formik.getFieldProps('phone')}
                  placeholder="Введите ваш телефон" />
                  <ErrorMessage name='phone' component={TextError} />
                {/* {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null} */}
            </div>
            
            <div className="inputBlock">
              <label htmlFor="comments" className="label">Комментарии</label>
              <Field as="textarea" id="comments" name="comments"/>
            </div>

            <div className="inputBlock">
              <label htmlFor="address" className="label">Адрес</label>
              <FastField name="address">
                {props => {
                  const {field, form, meta} = props;
                  // console.log('props: ', props);
                  return (
                  <div>
                    <input type="text" className="input" id="address" { ... field} />
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>)
                }}
              </FastField>
            </div>

            <div className="inputBlock">
              <label htmlFor="facebook" className="label">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" className="input" />
            </div>
            <div className="inputBlock">
              <label htmlFor="twitter" className="label">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" className="input" />
            </div>

            <div className="inputBlock">
              <label htmlFor="primaryPh" className="label">Первый телефон</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" className="input" />
            </div>
            <div className="inputBlock">
              <label htmlFor="secondaryPh" className="label">Второй телефон</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" className="input" />
            </div>

            <div className="inputBlock">
              <label htmlFor="phNumber" className="label">Список телефонов</label>
              <FieldArray name="phNumber">
                {(fieldArrayProps) => {
                    console.log('props: ', fieldArrayProps);
                    const {push, remove, form} = fieldArrayProps;
                    const {values} = form;
                    const {phNumber} = values;
                    return (
                    <div>
                      {phNumber.map((elem, index) => 
                      (<div key={index}>
                        <Field type="text" id="phNumber" name={`phNumber[${index}]`} className="input" />
                        {index > 0 && <button type="button" onClick={() => remove(index)}> - </button>}
                        <button type="button" onClick={() => push('')}>
                          {''}
                          +{''}
                        </button>
                      </div>)
                    )}
                    </div>
                    )
                }}
              </FieldArray>
            </div>

            <button type="submit" className="btn">Зарегистрироваться</button>
        </Form>
      </Formik>
  </div>
)} 

export default SimpleForm;

// const FormikForm = () => (
//   <div className="formBlock">
//      <h1>Anywhere in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <input
//              type="email"
//              name="email"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}
//            />
//            {errors.email && touched.email && errors.email}
//            <input
//              type="password"
//              name="password"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}
//            />
//            {errors.password && touched.password && errors.password}
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </form>
//        )}
//      </Formik>
//    </div>
// )

// export default FormikForm;