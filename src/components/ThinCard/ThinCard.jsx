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
  const {
    children,
    className,
    data = {},
    drawer,
    folder,
    noBorder,
    ...rest
  } = props
  let borderClass = ''
  if (noBorder) borderClass = 'thincard__noborder'
  if (props.folder) borderClass = `${borderClass} thincard__folderpad`
  return (
    <Flexbox
      key={data.id}
      {...rest}
      flexDirection='column'
      className={classnames(`octagon thincard__row ${borderClass}`, className)}
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
  folder: true,
  noBorder: false
}
ThinCard.propTypes = {
  folder: PropTypes.bool,
  noBorder: PropTypes.bool
}
export default ThinCard
