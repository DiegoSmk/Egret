import React, { useState } from 'react'
import { NextPage } from 'next'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikValues
} from 'formik'
import schema from '../utils/schema'
// import { useSession, signIn } from 'next-auth/client'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { makeRequest } from '../utils/http'
import { FormGroup } from '../components/Form/styles'
import { ComponentFieldEgret } from '../components/Form'
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineFileProtect
} from 'react-icons/ai'
// import createUser from '../middleware/signUp'

const TelaLogin = styled.h1`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;

  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before,
  .container:after {
    content: '';
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #ef3b3a;
  }
  body {
    background: #d9d9d9;
    background: -webkit-#d9d9d9;
    background: -moz-#d9d9d9;
    background: -o-#d9d9d9;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
// const createUser = ({ userData: any }) => {
//   return makeRequest('POST', '/user/signup', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userData)
//   }).then(data => data)
// }

const Register: NextPage = () => {
  // const [session, loading] = useSession()
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  async function onSubmit({ username, email, password, acceptedTerms }) {
    const data = {
      name: username,
      email: email,
      password: password,
      acceptedTerms: acceptedTerms
    }
    return makeRequest('POST', '/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (!data.message) {
          return setErrorMessage(data.error)
        }
        return setSuccessMessage(data.message)
      })
  }

  const errorOrSuccess = () => {
    if (successMessage === null) {
      return (
        <>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
              username: '',
              email: '',
              password: '',
              acceptedTerms: false
            }}
          >
            {({ errors, touched }: FormikProps<FormikValues>) => (
              <Form>
                <ComponentFieldEgret
                  name="username"
                  type="text"
                  pHolder="Joãozinho"
                >
                  <AiOutlineUser /> Your Name
                </ComponentFieldEgret>
                <ComponentFieldEgret
                  name="email"
                  type="email"
                  pHolder="zinho@domain.com"
                >
                  <AiOutlineMail /> Your Email
                </ComponentFieldEgret>
                <ComponentFieldEgret
                  name="password"
                  type="password"
                  pHolder="mega secure pass: 12345"
                >
                  <AiOutlineFileProtect /> Your Password
                </ComponentFieldEgret>
                <label>
                  <Field name="acceptedTerms" type="checkbox" />
                  <ErrorMessage name="acceptedTerms" />I accept the terms of
                  service
                </label>
                <button className="btnSubmit" type="submit">
                  Register
                </button>
              </Form>
            )}
          </Formik>
          {errorMessage && (
            <label className="text-red-500 mt-4 ml-2">
              <strong>{errorMessage}</strong>
            </label>
          )}
        </>
      )
    } else {
      return (
        <>
          <label className="text-red-500 mt-4 ml-2">
            <strong>{successMessage}</strong>
          </label>
        </>
      )
    }
  }
  return (
    <Layout>
      <TelaLogin className="tela-login">
        <FormGroup>{errorOrSuccess()}</FormGroup>
      </TelaLogin>
    </Layout>
  )
}

export default Register
