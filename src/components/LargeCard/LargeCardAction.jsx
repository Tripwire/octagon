import React from 'react'

const LargeCardAction = (props) => {
  return (
    <a className={'fullview__goto__button button buttton-rect'} onClick={props.onClick}>
      {props.label}
      {props.children}
    </a>
  )
}

LargeCardAction.defaultProps = {

}

LargeCardAction.propTypes = {

}

export default LargeCardAction
