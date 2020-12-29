import React, { FormEvent, useState } from 'react'
import { useFormik } from 'formik'
import schema from '../../utils/schema'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { csrfToken, signIn, useSession } from 'next-auth/client'

export default function SignIn({ csrfToken }): JSX.Element {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur
  } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: ({ username, password }) => {
      const body = {
        username: username,
        password: password
      }
      return signIn('credentials', {
        ...body,
        callbackUrl: `${process.env.NEXT_PUBLIC_CALLBACK_URL}/profile`
      })
    }
  })

  return (
    // action="/api/auth/callback/credentials" don't forget delete is line.
    <Layout>
      <form onSubmit={handleSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            id="login"
            name="username"
            type="text"
          />
          {touched.username && errors.username ? (
            <div>{errors.username}</div>
          ) : null}
        </label>
        <label>
          Password
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            type="text"
          />
          {touched.password && errors.password ? (
            <div>{errors.password}</div>
          ) : null}
        </label>
        <button type="submit">Sign in</button>
      </form>
    </Layout>
  )
}

SignIn.getInitialProps = async context => {
  return {
    csrfToken: await csrfToken(context)
  }
}
