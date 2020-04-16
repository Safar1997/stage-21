/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { Formik, Field, Form } from 'formik';
import 'antd/dist/antd.css';
import * as Yup from 'yup';
import * as actionCreators from '../actionCreators';

const Login = ({
  user, logIn, logInAction, history,
}) => {
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
        password: '',
        email: '',
        loged: false,
      }}
      onSubmit={(values, actions) => {
        const { email, password } = values;
        logIn(values)
          .then((res) => {
            if (res.status === 200) {
              logInAction(email, password);
              values.loged = true;
            }
            console.log(res);
          })
          .then(() => {
            console.log(user.loged);
            if (values.loged) {
              history.push('/');
            }
          })
          .catch((err) => {
            alert('Incorrect email or password');
            console.log(err);
          });
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
            Пожалуйста, залогиньтесь!
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
              style={{ margin: '15px' }}
              to="/SignUp"
            >
              SignUp
            </Link>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, actionCreators)(Login);
