import React, { PureComponent } from 'react'
import './LoginPane.css'
import classnames from 'classnames'
import xor from 'lodash/xor'

export default class LoginPane extends PureComponent {
  render () {
    const {
      children,
      className,
      ...rest
    } = this.props
    return (
      <form {...rest} className={classnames(className, 'login__container')}>
        {children}
      </form>
    )
  }
}
LoginPane.propTypes = {
  children: function (props, propName, componentName) {
    var childrenTypes = props[propName].map(el => el.type.name)
    var allowedTypes = [
      LoginPane.Logo.name,
      LoginPane.Username.name,
      LoginPane.Password.name,
      LoginPane.Submit.name,
      LoginPane.Footer.name
    ]

    // Only accept a single child, of the appropriate type
    if (xor(childrenTypes, allowedTypes).length) {
      return new Error(
        [
          `\`${componentName}\``,
          `should have exactly ${
            allowedTypes.length
          } children of the following types:`,
          ` \`${allowedTypes.join('`, `')}\`.`
        ].join(' ')
      )
    }
  }
}

LoginPane.Logo = function LoginLogo (props) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <span {...rest} className={classnames(className, 'login__logo')}>
      {children}
    </span>
  )
}

LoginPane.Username = function LoginUsername (props) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <span {...rest} className={classnames(className, 'login__username')}>
      {children}
    </span>
  )
}

LoginPane.Password = function LoginPassword (props) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <span {...rest} className={classnames(className, 'login__password')}>
      {children}
    </span>
  )
}

LoginPane.Submit = function LoginSubmit (props) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <span {...rest} className={classnames(className, 'login__submit')}>
      {children}
    </span>
  )
}

LoginPane.Footer = function LoginFooter (props) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <footer {...rest} className={classnames(className, 'login__footer')}>
      {children}
    </footer>
  )
}
