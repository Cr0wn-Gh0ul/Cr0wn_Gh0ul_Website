import React, { Component } from 'react'
import { List, Accordion, Icon } from 'semantic-ui-react'

export default class Skills extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Languages
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List bulleted>
            <List.Item>Javascript</List.Item>
            <List.Item>C / C++</List.Item>
            <List.Item>Bash</List.Item>
            <List.Item>SQL</List.Item>
            <List.Item>Python</List.Item>
            <List.Item>PHP</List.Item>
            <List.Item>HTML5</List.Item>
            <List.Item>CSS3</List.Item>
        </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
            DevOps
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <List bulleted>
            <List.Item>AWS</List.Item>
            <List.Item>Google Cloud</List.Item>
            <List.Item>Digital Ocean</List.Item>
            <List.Item>Nginx</List.Item>
            <List.Item>Apache</List.Item>
            <List.Item>Express</List.Item>
            <List.Item>Docker</List.Item>
            <List.Item>Git</List.Item>
        </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         Frameworks / DB
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <List bulleted>
            <List.Item>Node.js</List.Item>
            <List.Item>React</List.Item>
            <List.Item>Semantic-UI</List.Item>
            <List.Item>Wordpress</List.Item>
            <List.Item>Bootstrap</List.Item>
            <List.Item>Mysql</List.Item>
            <List.Item>Postgresql</List.Item>
            <List.Item>Redis</List.Item>
            <List.Item>MongoDB</List.Item>
        </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
            Software / Tools
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <List bulleted>
            <List.Item>Jira</List.Item>
            <List.Item>Trello</List.Item>
            <List.Item>VirtualBox</List.Item>
            <List.Item>VNC</List.Item>
            <List.Item>VPN</List.Item>
            <List.Item>Postman</List.Item>
            <List.Item>PM2</List.Item>
        </List>
        </Accordion.Content>

      </Accordion>
    )
  }
}
