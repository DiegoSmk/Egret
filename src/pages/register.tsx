// IMPORT React
import React, { useState } from 'react'
// IMPORT Next
import { NextPage } from 'next'
import Link from 'next/link'
import Router from 'next/router'
// IMPORT NextAuth
import { getSession, useSession } from 'next-auth/client'
// IMPORT Formik
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikValues
} from 'formik'
// IMPORT StyledComponents
import styled from 'styled-components'
// IMPORT ReactIcons
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineFileProtect
} from 'react-icons/ai'
// IMPORT Local
import schema from '../utils/schema'
import Layout from '../components/Layout'
import { makeRequest } from '../utils/http'
import { FormGroup } from '../components/Form/styles'
import { ComponentFieldEgret } from '../components/Form'
import Loading from '../components/details/loading'
import { SignUp } from '../components/Register'
import { Logo, LogoIcon } from '../components/Header/styles'

const Register = (): JSX.Element => {
  // const [session, loading] = useSession()
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  // verify user connected - INIT
  // Don't forget of the - import { getSession, useSession } from 'next-auth/client'
  const [session, loading] = useSession()

  if (loading) {
    return <Loading />
  }

  if (!loading && session) {
    Router.push('/')
  }
  // verify user connected - END

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
          <span className="loader"></span>
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
    <>
      <Link href="/" passHref>
        <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
      </Link>
      <Logo src="/images/logo.svg"></Logo>
      <SignUp>
        <FormGroup>{errorOrSuccess()}</FormGroup>
      </SignUp>
    </>
  )
}

export default Register
