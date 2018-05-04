import React from 'react'
import './ExpertCard.css'
import cx from 'classnames'
import xor from 'lodash/xor'

export default function ExpertCard (props) {
  return (
    <div className={cx(props.className, 'expert-card__container')}>
      {props.children}
    </div>
  )
}
ExpertCard.propTypes = {
  children: function (props, propName, componentName) {
    var childrenTypes = props[propName].map(el => el.type.name)
    var allowedTypes = [
      ExpertCard.Header.name,
      ExpertCard.Configure.name,
      ExpertCard.Content.name
    ]

    // Only accept a single child, of the appropriate type
    if (xor(childrenTypes, allowedTypes).length) {
      return new Error(
        [
          `\`${componentName}\``,
          'should have exactly 3 children of the following types: ',
          ` \`${allowedTypes.join('`, `')}\``
        ].join(' ')
      )
    }
  }
}

ExpertCard.Header = function ExpertCardHeader (props) {
  return (
    <div {...props} className={cx(props.className, 'expert-card__header')}>
      {props.children}
    </div>
  )
}

ExpertCard.Configure = function ExpertCardConfigure (props) {
  return (
    <div {...props} className={cx(props.className, 'expert-card__configure')}>
      {props.children}
    </div>
  )
}

ExpertCard.Content = function ExpertCardContent (props) {
  return (
    <div {...props} className={cx(props.className, 'expert-card__content')}>
      {props.children}
    </div>
  )
}
