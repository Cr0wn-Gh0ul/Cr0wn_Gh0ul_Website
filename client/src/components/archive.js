import React from 'react'
import { List } from 'semantic-ui-react'
import './styles/crtContent.css'

const Misc = () => (
  <List>

    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>Social</List.Header>
        <List.Description>Accounts / Usernames</List.Description>
        <List.List>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header>Cr0wn_Gh0ul#6666</List.Header>
              <List.Description>
                Discord
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header>Cr0wn_Gh0ul</List.Header>
              <List.Description>
                Telegram
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header>Cr0wn_Gh0ul</List.Header>
              <List.Description>
                Steam
              </List.Description>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>Puzzle Solutions</List.Header>
        <List.Description>A few articles and some code to solve my puzzles</List.Description>
        <List.List>

          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://medium.com/@elronvhubbard/cr0wn-gh0uls-point-puzzle-write-up-8ee421d3f3a6">1x1 Image / RSA Smart Contract</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://github.com/Cr0wn-Gh0ul/Node-Puzzle">Nodes</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://www.dropbox.com/s/qkkuw1rwuf4ue2u/LOS%20-%20Bash%20Puzzle.mp4?dl=0">LoS Bash Quest</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://www.twitch.tv/videos/330844636">GameBoy Cryptomon</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://medium.com/@Cr0wn_Gh0ul/plasma-bears-snowflake-puzzle-46af5e0e3ed7">Snowflake</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://medium.com/@blefevr1/cr0wn-gh0uls-1-halloween-puzzle-2e86f9f5eea2">Halloween</List.Header>
            </List.Content>
          </List.Item>

        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>Articles</List.Header>
        <List.Description>Articles about things I made</List.Description>
        <List.List>

          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href='https://medium.com/blockadegames/using-ipfs-distributed-file-storage-for-game-asset-metadata-aac4478e3063'>IPFS for Ethereum Game Asset Metadata</List.Header>
            </List.Content>
          </List.Item>
         <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href='https://medium.com/blockadegames/using-bitcoin-lightning-network-as-an-interface-to-ethereum-smart-contracts-7cbaecd05779'>BTC Lightning for Ethereum Smart Contracts</List.Header>
            </List.Content>
          </List.Item>

        </List.List>
      </List.Content>
    </List.Item>
  </List>
)

export default Misc;
