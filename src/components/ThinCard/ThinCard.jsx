import '../../styles/components/thin-card.css'
import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import ThinCardTitle from './ThinCardTitle'
import ThinCardPrimaryAction from './ThinCardPrimaryAction'
import ThinCardActionButton from './ThinCardActionButton'
import ThinCardWidget from './ThinCardWidget'
import ThinCardDrawer from './ThinCardDrawer'
import classnames from 'classnames'

const ThinCard = props => {
  const { children, className, drawer, folder, border, ...rest } = props
  return (
    <Flexbox
      {...rest}
      flexDirection='column'
      className={classnames(
        'octagon',
        'thincard__row',
        { thincard__noborder: !border, thincard__folderpad: border },
        className
      )}
    >
      {folder ? <div className='topedge' /> : ''}
      <Flexbox flexDirection='row' flexGrow={3} className='primary-content'>
        {children}
      </Flexbox>
      {drawer}
    </Flexbox>
  )
}
ThinCard.Title = ThinCardTitle
ThinCard.PrimaryAction = ThinCardPrimaryAction
ThinCard.ActionButton = ThinCardActionButton
ThinCard.Widget = ThinCardWidget
ThinCard.Drawer = ThinCardDrawer
ThinCard.defaultProps = {
  folder: false,
  border: false
}
ThinCard.propTypes = {
  folder: PropTypes.bool,
  border: PropTypes.bool
}
export default ThinCard
