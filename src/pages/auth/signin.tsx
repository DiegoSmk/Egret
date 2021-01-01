import React from 'react'
import Link from 'next/link'
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
import { signIn } from 'next-auth/client'
import { ComponentFieldEgret } from '../../components/Form'
import { AiOutlineUser, AiOutlineFileProtect } from 'react-icons/ai'

export default function SignIn(): JSX.Element {
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
