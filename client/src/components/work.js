import React from 'react';
import { List } from 'semantic-ui-react';
import './styles/crtContent.css';

const WorkList = () => (
  <List divided relaxed>
        <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header className="table-links" as='a' href="https://opensea.io/collection/lofiskylines">LoFi Skylines</List.Header>
        <List.Description>Solo Animated Deterministic Generative NFTs</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header className="table-links" as='a' href="https://www.madnetwork.com/">Mad Network</List.Header>
        <List.Description>Blockchain for authentication infrastructure.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header className="table-links" as='a' href="https://coinartist.io/">CoinArtist.io</List.Header>
        <List.Description>Social token for coin_artist with defi incentives.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header className="table-links" as='a' href="https://mule.wtf/">Mule.WTF</List.Header>
        <List.Description>Ethereum gamified wallet + Discord / Telegram bot interfaces.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header className="table-links" as='a' href="https://github.com/BlockadeLabs">Blockade Labs</List.Header>
        <List.Description>Blockade Games Open-Source Repositories.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://neondistrict.io/">Neon District</List.Header>
        <List.Description>Ethereum cyberpunk role-playing adventure.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://plasmabears.com/">Plasma Bears</List.Header>
        <List.Description>A collectible crafting game utilizing Ethereum + Side Chain.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="https://cryptopuzzles.org/">Crypto_Puzzles</List.Header>
        <List.Description>A community for puzzles based around cryptography, cryptocurrencies, and blockchains.</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default WorkList;
