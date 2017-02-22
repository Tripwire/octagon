import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Icon } from 'semantic-ui-react'
import '../src/styles/app.css'


storiesOf('Icons', module)
  .addDecorator((story) => (
    <div style={{width: '400px'}}>
      {story()}
    </div>
  ))
    .add('Icons', () => (
        <div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Warning
                </span>
                <Icon className="tw" name='warning' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Alert
                </span>
                <Icon className="tw" name='alert' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Success
                </span>
                <Icon className="tw" name='success' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Stopped
                </span>
                <Icon className="tw" name='stopped' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Settings
                </span>
                <Icon className="tw" name='settings' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Warning
                </span>
                <Icon className="tw" name='menu' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Error
                </span>
                <Icon className="tw" name='error' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Alt Warning
                </span>
                <Icon className="tw" name='altwarning' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Alt Success
                </span>
                <Icon className="tw" name='altsuccess' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Info
                </span>
                <Icon className="tw" name='info' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Run
                </span>
                <Icon className="tw" name='run' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Stop
                </span>
                <Icon className="tw" name='stop' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Chevron
                </span>
                <Icon className="tw" name='chevronright' />
                <Icon className="tw" name='chevronleft' />
                <Icon className="tw" name='chevronup' />
                <Icon className="tw" name='chevrondown' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Arrow
                </span>
                <Icon className="tw" name='arrowdown' />
                <Icon className="tw" name='arrowup' />
                <Icon className="tw" name='arrowleft' />
                <Icon className="tw" name='arrowright' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Inverted Success
                </span>
                <Icon className="tw" name='inversesuccess' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Search
                </span>
                <Icon className="tw" name='search' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    User
                </span>
                <Icon className="tw" name='user' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Tag
                </span>
                <Icon className="tw" name='tag' />
            </div>
            <div>
                <span style={{marginRight: "20px"}}>
                    Folder
                </span>
                <Icon className="tw" name='folder' />
            </div>

            <div>
                <span style={{marginRight: "20px"}}>
                    Sizing
                </span>
                <Icon className="tw" name='folder' />
                <Icon className="tw" name='folder' size="large" />
                <Icon className="tw" name='folder' size="big" />
                <Icon className="tw" name='folder' size="huge" />
            </div>            
            <div>
                <span style={{marginRight: "20px"}}>
                    Colors
                </span>
                <Icon className="tw" name='folder' color="red" size="big" />
                <Icon className="tw" name='folder' color="grey" size="big" />
                <Icon className="tw" name='folder' color="yellow" size="big" />
            </div>   
        </div>
    ))


