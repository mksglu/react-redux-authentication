import React from 'react'

const TextField = ({
  input, meta: { touched, error }, isError, ...restOfInput
}) => (
  console.log('errordfdsfsd', error),
  (
    <input
      {...input}
      className={`${(touched && error) || isError ? 'form-control is-invalid' : 'form-control'}`}
      {...restOfInput}
    />
  )
)

export default TextField
