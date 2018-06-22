import PropTypes from 'prop-types'
import React from 'react'
import MicroCardGutter from './MicroCardGutter'
import MicroCardContent from './MicroCardContent'
import MicroCardHeader from './MicroCardHeader'
import '../../styles/components/micro-card.css'
import classnames from 'classnames'

function MicroCard (props) {
  const { cardContent, className, children, gutter, variant, ...rest } = props
  return (
    <div
      className={classnames(
        'octagon',
        'microcard',
        'bordered',
        `microcard--variant-${variant}`,
        className
      )}
      {...rest}
    >
      <MicroCardGutter
        className={!gutter && 'microcard__gutter--hidden'}
        color={gutter}
      />
      {children}
    </div>
  )
}

MicroCard.Gutter = MicroCardGutter
MicroCard.Content = MicroCardContent
MicroCard.Header = MicroCardHeader
MicroCard.defaultProps = {
  variant: 'a'
}
MicroCard.propTypes = {
  /**
   * Variant id
   */
  variant: PropTypes.string,
  /**
   * Gutter color
   */
  gutter: PropTypes.string
}

export default MicroCard
