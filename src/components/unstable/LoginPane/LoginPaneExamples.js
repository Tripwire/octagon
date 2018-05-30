import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import LoginPane from './LoginPane'

function Basic (props) {
  return (
    <LoginPane className='hide-in-test' {...props}>
      <LoginPane.Logo>
        <h1
          style={{
            padding: '20px',
            background: 'darkslategray',
            color: 'white'
          }}
        >
          LOGO
        </h1>
      </LoginPane.Logo>
      <LoginPane.Username>
        <Input />
      </LoginPane.Username>
      <LoginPane.Password>
        <Input />
      </LoginPane.Password>
      <LoginPane.Submit>
        <Button primary>Login</Button>
      </LoginPane.Submit>
      <LoginPane.Footer>
        <footer>FOOTER</footer>
      </LoginPane.Footer>
    </LoginPane>
  )
}

export const BasicLoginPane = props => <Basic {...props} />
