import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FormikValues
} from 'formik'
import { FormGroup } from '../../components/Form/styles'
import schema from '../../utils/schema'
import { Container } from '../../components/Layout/styles'
import { signIn, useSession } from 'next-auth/client'
import { ComponentFieldEgret } from '../../components/Form'
import { AiOutlineUser, AiOutlineFileProtect } from 'react-icons/ai'
import Loading from '../../components/details/loading'

export default function SignIn(): JSX.Element {
  // verify user connected - INIT
  // Don't forget of the -
  // import { getSession, useSession } from 'next-auth/client'
  // and import Router from 'next/router'
  const [session, loading] = useSession()

  if (loading) {
    return <Loading />
  }

  if (!loading && session) {
    Router.push('/profile')
  }
  // verify user connected - END

  function onSubmit({ username, password }) {
    const body = {
      username: username,
      password: password
    }
    console.log(body)
    return signIn('credentials', {
      ...body,
      callbackUrl: `${process.env.NEXT_PUBLIC_CALLBACK_URL}/profile`
    })
  }
  return (
    <Container>
      <FormGroup>
        <Formik
          // validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{
            username: '',
            password: ''
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
                name="password"
                type="password"
                pHolder="mega secure pass: 12345"
              >
                <AiOutlineFileProtect /> Your Password
              </ComponentFieldEgret>
              <button type="submit">Sign in</button>
              <p className="mensagem">
                Não está registrado?
                <Link href="/register">
                  <a> Criar uma conta</a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </FormGroup>
    </Container>
  )
}
