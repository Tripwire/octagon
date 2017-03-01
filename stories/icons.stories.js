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
          <span style={{marginRight: '20px'}}>
                    Warning
                </span>
          <Icon className='ei' name='icon_error-triangle_alt' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Alert
                </span>
          <Icon className='ei' name='icon_error-circle_alt' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Success
                </span>
          <Icon className='ei' name='icon_check_alt2' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Stopped
                </span>
          <Icon className='ei' name='icon_minus_alt2' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Settings
                </span>
          <Icon className='ei' name='icon_cog' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Dialog Warning
                </span>
          <Icon className='ei' name='icon_error-triangle' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                   Dialog Error
                </span>
          <Icon className='ei' name='icon_error-circle' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Dialog Success
                </span>
          <Icon className='ei' name='icon_check_alt' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Dialog Info
                </span>
          <Icon className='ei' name='icon_info' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Operation Run
                </span>
          <Icon className='ei' name='arrow_triangle-right_alt2' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Operation Stop
                </span>
          <Icon className='ei' name='icon_pause_alt2' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Chevron
                </span>
          <Icon className='ei' name='arrow_carrot-right' />
          <Icon className='ei' name='arrow_carrot-left' />
          <Icon className='ei' name='arrow_carrot-down' />
          <Icon className='ei' name='arrow_carrot-up' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Trend Arrow
                </span>
          <Icon className='ei' name='arrow_triangle-right' />
          <Icon className='ei' name='arrow_triangle-left' />
          <Icon className='ei' name='arrow_triangle-down' />
          <Icon className='ei' name='arrow_triangle-up' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Success Checkmark
                </span>
          <Icon className='ei' name='icon_check' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Search
                </span>
          <Icon className='ei' name='icon_search' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    User
                </span>
          <Icon className='ei' name='icon_profile' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Tag
                </span>
          <Icon className='ei' name='icon_tag_alt' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Folder
                </span>
          <Icon className='ei' name='icon_folder-alt' />
        </div>

        <div>
          <span style={{marginRight: '20px'}}>
                    Sizing
                </span>
          <Icon className='ei' name='icon_folder-alt' />
          <Icon className='ei' name='icon_folder-alt' size='large' />
          <Icon className='ei' name='icon_folder-alt' size='big' />
          <Icon className='ei' name='icon_folder-alt' size='huge' />
        </div>
        <div>
          <span style={{marginRight: '20px'}}>
                    Colors
                </span>
          <Icon className='ei' name='icon_folder-alt' color='red' size='big' />
          <Icon className='ei' name='icon_folder-alt' color='grey' size='big' />
          <Icon className='ei' name='icon_folder-alt' color='yellow' size='big' />
        </div>

            Note that these icons are namespaced with the class "ei" which enables you to access the Elegant Icons while retaining the usage of the Semantic UI Icon component.
        </div>
    ))
