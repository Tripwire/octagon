import React from 'react'
import ReactDOM from 'react-dom'
import Flexbox from 'flexbox-react'
import AccordianTitle from './AccordianTitle'
import AccordianPrimaryAction from './AccordianPrimaryAction'
import AccordianActionButton from './AccordianActionButton'
import AccordianWidget from './AccordianWidget'
import '../../styles/components/accordian.css'


class Accordian extends React.Component {
  constructor(props) {
    super(props)

  }

  static Title = AccordianTitle
  static PrimaryAction = AccordianPrimaryAction
  static ActionButon = AccordianActionButton
  static Widget = AccordianWidget

  render() {
    return (
      <Flexbox flexDirection="column" className="og__group og__row" key={this.props.data.id}>

        {(this.props.folder) ? (
          <div className="topedge"></div>
        ) : ''
        }
        <Flexbox flexDirection="row" flexGrow={3}>
        {this.props.children}
        </Flexbox>
      </Flexbox>
    )
  }
}
Accordian.propTypes = {
  folder: React.PropTypes.bool
}
export default Accordian
