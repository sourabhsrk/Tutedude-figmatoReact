import React,{useState} from 'react'
import imgfriends from '../Images/imgfriends.png'
import imgmoney from '../Images/imgmoney.png'
import imgoffer from '../Images/imgoffer.png'
import imgpurchase from '../Images/imgpurchase.png'
import imgwallet from '../Images/imgwallet.png'

const Main = () => {
    const [refcode,setRefcode] = useState('EDCH54');
    const handleCopy = () => {
        navigator.clipboard.writeText(refcode);
    }
  return (
    <div className="main">
      <div className='ReferEarn'><p className='refercontent'>UI/UX &gt; Refer & Earn</p></div>
      <div className='amount'>
        <div className='balance'>
            <div className='money'>
                <div>
                    <p className='money1'>Referral Earning</p>
                    <span className='money1num'>&#8377;2,500</span>
                </div>
                <div>
                    <p className='money2'>Total Referrals</p>
                    <span className='money2num'>7</span>
                </div>
                <div>
                    <p className='money3'>Wallet Balance</p>
                    <span className='money3num'>&#8377;500</span>
                </div>
            </div>
            <button className='withdraw'>Withdraw Balance</button>
        </div>
        <div className='referral'>
            <p className='referraltext'>Your Referral Code</p>
            <div className='rcode'>
                <span>EDCH54</span>
                <button onClick={handleCopy}><i class="fa-regular fa-copy"></i></button>
            </div>
            
        </div>
      </div>
      <div className='instructions'>
        <p className='instructHeading'>How does it Work?</p>
        <div className='mainInstructions'>
            <div className='leftInstructions'>
                <div className='imain'>
                    <div className='imgInstruct'>
                        <img src={imgfriends} alt='imgfriends'/>
                    </div>
                    <div className='icontentL1'>
                        <p className='iheading'>Invite your Friends</p>
                        <p className='ipara ipara1'>Share the link tutedude.com with your friends</p>
                    </div>
                </div>
                <div className='imain'>
                    <div className='imgInstruct'>
                        <img src={imgmoney} alt='imgmoney'/>
                    </div>
                    <div className='icontentL2'>
                        <p className='iheading'>You get &#8377;200 as referral money</p>
                        <p className='ipara ipara2'>On total purchase the friends makes,into your wallet</p>
                    </div>
                </div>
                <div className='imain'>
                    <div className='imgInstruct'>
                        <img src={imgwallet} alt='imgwallet'/>
                    </div>
                    <div className='icontentL3'>
                        <p className='iheading'>Transfer money from wallet</p>
                        <p className='ipara ipara3'>When the wallet balance reaches &#8377;200 or more you can withdraw it</p>
                    </div>
                </div>
            </div>
            <div className='rightInstructions'>
                <div className='imain'>
                    <div className='imgInstruct'>
                        <img src={imgpurchase} alt='imgpurchase'/>
                    </div>
                    <div className='icontentL4'>
                        <p className='iheading'>Friends Purhases any course</p>
                        <p className='ipara ipara4'>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
                <div className='imain'>
                    <div className='imgInstruct'>
                        <img src={imgoffer} alt='imgoffer'/>
                    </div>
                    <div className='icontentL5'>
                        <p className='iheading'>Your friends gets &#8377;200 off</p>
                        <p className='ipara ipara5'>On his overall fee on successful purchase using your referral code</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='enrolled'>Friends who Enrolled</div>
        <div className='terms'> Terms & Conditions</div>
      </footer>
    </div>
  )
}

export default Main
