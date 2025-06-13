import { ethers } from 'ethers';

const Channels = ({ provider, account, dappcord, channels, currentChannel, setCurrentChannel }) => {

  const channelHandler = async (channel) => {
    if (!account) {
      alert('Please connect your wallet first!')
      return
    }

    try {
      // Check if user has already joined the channel
      const hasJoined = await dappcord.hasJoined(channel.id, account)
      
      if (!hasJoined) {
        // Get the channel cost
        const cost = channel.cost
        
        // Join the channel
        const transaction = await dappcord.connect(provider.getSigner()).mint(channel.id, {
          value: cost
        })
        
        await transaction.wait()
        console.log(`Joined channel #${channel.name}`)
      }
      
      setCurrentChannel(channel)
    } catch (error) {
      console.error(error)
      alert('Error joining channel. Make sure you have enough ETH!')
    }
  }

  return (
    <div className="channels">
      <div className="channels__text">
        <h2>Text Channels</h2>

        <ul>
          {channels.map((channel, index) => (  
            <li 
              key={index}
              onClick={() => channelHandler(channel)}
              className={currentChannel?.id === channel.id ? 'active' : ''}
            >
              {channel.name} - {ethers.utils.formatEther(channel.cost)} ETH
            </li>
          ))}
        </ul>     

      </div>

      <div className="channels__voice">
        <h2>Voice Channels</h2>

        <ul>
          <li>Channel 1</li>
          <li>Channel 2</li>
          <li>Channel 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Channels;