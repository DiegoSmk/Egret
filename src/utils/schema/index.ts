import * as Yup from 'yup'

export default Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username should be longer than 5 characters')
    .required('Required'),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6, 'Password should be longer than 6 characters')
    .required(),
  acceptedTerms: Yup.bool().oneOf(
    [true],
    'Accept Terms & Conditions is required'
  )
})
