import React from 'react'
import ReactDOM from 'react-dom'
import Flexbox from 'flexbox-react'
import AccordianTitle from './AccordianTitle'
import AccordianPrimaryAction from './AccordianPrimaryAction'
import AccordianActionButton from './AccordianActionButton'
import AccordianWidget from './AccordianWidget'
import AccordianDrawer from './AccordianDrawer';
import '../../styles/components/accordian.css'


class Accordian extends React.Component {
  constructor(props) {
    super(props)

  }

  static Title = AccordianTitle
  static PrimaryAction = AccordianPrimaryAction
  static ActionButon = AccordianActionButton
  static Widget = AccordianWidget
  static Drawer = AccordianDrawer

  render() {
    let borderClass = '';
    if (this.props.noBorder){
      borderClass = 'noborder';
    }
    return (
      <Flexbox flexDirection="column" className={`accordian__row ${borderClass}`} key={this.props.data.id}>

        {(this.props.folder) ? (
          <div className="topedge"></div>
        ) : ''
        }
        <Flexbox flexDirection="row" flexGrow={3} className="primary-content">
        {this.props.children}
        </Flexbox>
        {this.props.drawer}
      </Flexbox>
    )
  }
}
Accordian.defaultProps = {
  folder: true,
  noBorder: false
}
Accordian.propTypes = {
  folder: React.PropTypes.bool,
  noBorder: React.PropTypes.bool,
}
export default Accordian
