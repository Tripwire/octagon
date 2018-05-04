import './LoginPage.css'
import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class LoginPage extends PureComponent {
  render () {
    const {
      className,
      children,
      ...rest
    } = this.props
    return (
      <div
        {...rest}
        className={classnames(className, 'login-page__container')}
      >
        {children}
      </div>
    )
  }
}
LoginPage.Login = function Login (props) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <div
      {...rest}
      className={classnames(className, 'login-page__login')}
    >
      {children}
    </div>
  )
}
