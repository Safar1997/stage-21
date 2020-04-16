/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import { Formik, Form } from 'formik';

import 'antd/dist/antd.css';
import * as actionCreators from '../actionCreators';

const Main = ({ user, logOutAction, history }) => {
  useEffect(() => {
    if (!user.loged) {
      history.push('/login');
    }
  });

  return (
    <Formik
      initialValues={{
        username: '',
      }}
      onSubmit={async (values, actions) => {
        await logOutAction();
        actions.setSubmitting(false);
      }}
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
            <span>
              Здравствуйте!
              {' '}
              {user.username}
            </span>
            <div />
            <Button
              disabled={isSubmitting}
              type="primary"
              htmlType="submit"
              style={{ display: 'block', margin: '15px', marginLeft: '5px' }}
            >
              Exit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, actionCreators)(Main);
