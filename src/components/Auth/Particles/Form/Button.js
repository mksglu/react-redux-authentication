import React from 'react'

const Button = (props) => {
  const { ...otherProps } = props

  return <button type="submit" className="btn btn-primary btn-block" {...otherProps} />
}

export default Button
