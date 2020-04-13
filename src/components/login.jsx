/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { Formik, Field, Form } from 'formik';
import 'antd/dist/antd.css';
import * as Yup from 'yup';
import * as actionCreators from '../actionCreators';

const Login = ({ logIn, email, password }) => {
  const defaultField = (name, type, placeholder, Type) => (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        meta,
      }) => (
        <div>
          <Type
            type={type}
            placeholder={placeholder}
            {...field}
            style={{ width: '200px', margin: '5px' }}
          />
          {meta.touched && meta.error && (
            <div className="error" style={{ color: 'red', margin: '5px' }}>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );

  const validSchema = Yup.object({
    name: Yup.string()
      .max(50, 'Must 50 characters or less')
      .required('You must enter Name'),
    password: Yup.string()
      .matches(/^[a-zA-Z0-9]{0,}$/, 'Password have only latin letters and digits')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .max(40, 'Must be 40 characters or less')
      .matches(/[0-9]+/, 'Password must contain at least one digit')
      .matches(/[A-Z]+/, 'Password must contain an one uppercase character')
      .required('You must enter password'),
  });

  return (
    <Formik
      initialValues={{
        password: 'qweqwe1Q',
        email: 'qweqw@mail.ru',
      }}
      onSubmit={async (values, actions) => {
        // logIn(email, password);
        //     await axios
        //       .post('http://localhost:3001/sign-up', values)
        //       .then((res) => {
        //         if (res.status === 200) {
        //           alert('Вы успешно зарегестрированы');
        //           console.log(res);
        //         }
        //       })
        //       .catch((err) => {
        //         actions.setFieldError('email', 'this email is already exist');
        //         console.log(err.response);
        //       });
        // alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validationSchema={validSchema}
    >
      {(props) => {
        const { isSubmitting } = props;
        return (
          <Form
            onSubmit={props.handleSubmit}
            style={{
              boxSizing: 'borderBox',
              width: '300px',
              margin: 'auto',
              marginTop: '200px',
              border: '1px solid gray',
              padding: '10px',
              borderRadius: '15px',
            }}
          >
            {defaultField('email', 'email', 'email', Input)}
            {defaultField('password', 'password', 'Input password', Input.Password)}
            <div />
            <Button
              disabled={isSubmitting}
              type="primary"
              htmlType="submit"
              style={{ display: 'block', margin: '15px', marginLeft: '5px' }}
            >
              Log in
            </Button>
            <Link
              to="/SignUp"
            >
              <Button style={{ margin: '5px' }} type="dashed" htmlType="button">SignUp</Button>
            </Link>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
});

export default connect(mapStateToProps, actionCreators)(Login);
