import React from 'react'
import { List } from 'semantic-ui-react'
import './styles/crtContent.css';

const Info = () => (
  <List>
    <List.Item>
      <List.Icon name='user' />
      <List.Content>Troy Salem (Cr0wn_Gh0ul)</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Detroit, MI</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:troy@troysalem.com'>troy@troysalem.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkedin' />
      <List.Content>
        <a href='https://www.linkedin.com/in/troysalem'>LinkedIn</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' />
      <List.Content>
        <a href='https://github.com/Cr0wn-Gh0ul'>Github</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='twitter' />
      <List.Content>
        <a href='https://twitter.com/Cr0wn_Gh0ul'>Twitter</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='reddit' />
      <List.Content>
        <a href='https://www.reddit.com/user/Cr0wn_Gh0ul'>Reddit</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='key' />
      <List.Content>
        <a href='https://keybase.io/cr0wngh0ul'>Keybase</a>
      </List.Content>
    </List.Item>
  </List>
)

export default Info;
