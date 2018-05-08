import React, { Component } from 'react'
import { Button, Popup } from 'semantic-ui-react'

export default class PopupDemo extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }
  componentDidMount () {
    setTimeout(() => {
      Array.from(document.getElementsByClassName('popup-example'))
      .forEach(node => node.click())
    }, 100)
  }
  render () {
    return (
      <div>
        <Popup
          position='right center'
          on='click'
          trigger={<Button className='popup-example'>Neutral</Button>}
          content='Neutral Popup Content'
          className='grey'
        />
        <br /><br />
        <Popup
          position='right center'
          trigger={<Button className='popup-example'>Critical</Button>}
          content='Critical Popup Content'
          className='red' />
        <br /><br />
        <Popup
          position='right center'
          trigger={<Button className='popup-example'>Warning</Button>}
          content='Warning Popup Content'
          className='yellow' />
      </div>
    )
  }
}
