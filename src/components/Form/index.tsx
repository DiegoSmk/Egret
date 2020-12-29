import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FieldEgret, LabelEgret } from './styles'
import { NextPage } from 'next'

interface InComFE {
  name: string
  type: string
  pHolder: string
}

export const ComponentFieldEgret: NextPage<InComFE> = ({
  name,
  type,
  pHolder,
  children
}) => {
  return (
    <FieldEgret>
      <LabelEgret htmlFor={name}>{children}</LabelEgret>
      <Field name={name} type={type} placeholder={pHolder} required />
      <ErrorMessage component="span" name={name} />
    </FieldEgret>
  )
}
