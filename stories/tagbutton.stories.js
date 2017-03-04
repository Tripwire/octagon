import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TagButton from '../src/components/TagButton'

const sampleTagAll = { id: 1, name: 'ALL', state: 'info', filterOption: '', count: 165 }
const sampleTagGeneric = { id: 2, name: 'Report', state: 'warning', filterOption: 'report', count: 5 }

storiesOf('Tag Button', module)
  .addDecorator((story) => (
    <div style={{minWidth: '200px', minHeight: '200px'}}>
      {story()}
    </div>
  ))
  .add('Tag Buttons', () => (
    <div>
      <div>
        <TagButton
          key={1}
          tag={sampleTagAll}
          closeNotificationDetailView={null}
          getNotificationByTag={null}
          selectedTagId={1}
          setActiveTag={null}
        />
        All - Active
      </div>
      <div>
        <TagButton
          key={1}
          tag={sampleTagAll}
          closeNotificationDetailView={null}
          getNotificationByTag={null}
          selectedTagId={0}
          setActiveTag={null}
            />
        All - Not Active
      </div>
      <div>
        <TagButton
          key={1}
          tag={sampleTagGeneric}
          closeNotificationDetailView={null}
          getNotificationByTag={null}
          selectedTagId={2}
          setActiveTag={null}
            />
            Generic - Active
      </div>
      <div>
        <TagButton
          key={1}
          tag={sampleTagGeneric}
          closeNotificationDetailView={null}
          getNotificationByTag={null}
          selectedTagId={0}
          setActiveTag={null}
            />
          Generic - Not Active
      </div>
    </div>
  ))
