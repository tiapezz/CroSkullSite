
import React, { useEffect, useState } from "react";
import './home.css'
import { Link } from "react-router-dom";
import village from './bonesville_village.png'
import castle from './bonesville_castle.png'
import "./home.css"
import tavern from './Slider/tavern.jpg';
import bank from './Slider/bg-bank.jpeg';
import marketplace from './Slider/bg-marketplace.jpeg';
import raffle from './Slider/bg-raffle.jpeg';
import adventure from './Slider/bonefire.jpg';
import merchant from './Slider/merchant.png';
import moon from './moon.png'
import grass from './grass.png'
import grave from './grave.png'
import cloud from './cloud.png'
import roadmap from './roadmap.png';
import logo from './logo.png';
import gif from './croskullGif.gif';
import prof from './Skelly_Prof.png'

const ipfsUri128 = "https://croskull.mypinata.cloud/ipfs/QmZn1HvYE1o1J8LhNpxFTj5k8LQb2bWT49YvbrhB3r19Xx/"
const ipfsUri480 = "https://croskull.mypinata.cloud/ipfs/QmWu9bKunKbv8Kkq8wEWGpCaW47oMBbH6ep4ZWBzAxHtgj/"
const ipfsUriFull = "https://croskull.mypinata.cloud/ipfs/"
const Home = () => {

  useEffect(() => {


  }, [])

  return (
    <>
      <div className='container-custom'>
        <div id="header">
          <img src={moon} id='moon' />
          <img src={grass} id='grass' />
          <img src={cloud} id='cloud' />
          <img src={grave} id='grave' />
          <div className="logo-div">
            <img src={logo} id='logo' />
            <button id='underworld-btn' ><a href='https://app.croskull.com'>Underworld</a></button>
          </div>


        </div>
        <div className="what-is">
          <div className="sk-row-2">
            <div className="col-sm story-img">
              <img src={village} />
            </div>
            <div className="col-sm story-text" >
              <h2> What is CroSKull</h2>
              Bonesville has always been a mysterious town. Among the dark streets of the city, it is rare to see people stopping to talk to each other.
              Many elderly people leave their homes just to carry out duties or run errands, whereas the few children who have never played with each other do not know what fun is.
              At Bonesville, everything is sad, gloomy, melancholic, still.
              Just one person’s soul stands out across all the grey souls of the city…
              Dr. Skully spends most of his time in his secret laboratory located inside the dark Bonesville Castle.
              After years of failure, he managed to improve his alchemical formula
              by combining mysterious potions, he found a way to bring joy and life back to the city…
              6,666 funny and crazy Croskulls are ready to invade the streets!
            </div>
          </div>

          <div className="row">
            <div className="col-sm story-text" >
              The Croskull is a collection of 6,666 uniquely generated NFTs stored in the Cronos Chain.

              Each Croskull NFT is based on 6 attributes with different rarities.

              A Croskull is not simply a PFP but is also the key to the insane Dr. Skully’s laboratory experiments.
            </div>
            <div className="col-sm story-img"  >
              <img src={gif} />
            </div>
          </div>
        </div>

        <div className="what-we-have">
          <h1>What We Have</h1>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active w-100 s1">
                <div className="carousel-content">
                  <h2>Tavern</h2>
                  <p>You can handle your croskull, send them in Adventure, write their story, look at your inventory and even sell them.</p>
                </div>

              </div>
              <div className="carousel-item s2">
                <div className="carousel-content">
                  <h2>Adventure</h2>
                  <p>Sending a croskull in adventure allows you to earn Grave and Soul. You can see how much wealth are ready to be claimed, but watch out, if you retire earlier the skull won't be happy!</p>
                </div>
              </div>
              <div className="carousel-item s3">
                <div className="carousel-content">
                  <h2>Marketplace</h2>
                  <p>The portal to the Ebisu's bay marketplace. Looking for a new skull or one of the mysterious potions, drop by the marketplace and buy it!</p>
                </div>
              </div>
              <div className="carousel-item s4">
              <div className="carousel-content">
                  <h2>Merchant</h2>
                  <p>A merchant will sell strange eggs acquired by the CroSkulls on their adventures exploring the different regions of the underworld. No one knows who he is or where he's from, the only thing we know is that the more he sells, the more wares you will have to choose from.</p>
                </div>
              </div>
              <div className="carousel-item s5">
              <div className="carousel-content">
                  <h2>Raffle</h2>
                  <p>Bonesville is famous for its raffles which include great prizes! Join our raffles, all you need is some Grave to participate. But be careful! Dr. Skully sometimes will create some crazy raffles! Be quick to avoid missing out!</p>
                </div>
              </div>
              <div className="carousel-item s6">
              <div className="carousel-content">
                  <h2>Bank</h2>
                  <p>The Bank lets you help Bonesville to be built. You can lock your Grave for a period of time to help build a house and receive Rude or use your Grave to earn more Graves.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="roadmap">
          <img src={roadmap} />
        </div>

        <div className="faq">
          <h1>F.A.Q.</h1>
          <div id="accordion">

            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is croskull project?
                </h5>
              </div>
              <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                The CroSkull is a collection of 6.666 uniquely generated NFTs stored in the Cronos Chain. Each CroSkull NFT is based on 6+ attributes with different rarities. A CroSkull is not simply a PFP but is also the key to the insane Dr. Skully’s laboratory experiments.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  How do I get a Croskull?
                </h5>
              </div>
              <div id="collapseFive" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  The minting has finished, so the only place you can now purchase a CroSkull is over at <a href="https://app.ebisusbay.com/collection/croskull">Ebisu’s Marketplace</a>.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                  What is the Potion System in our Lab?
                </h5>
              </div>
              <div id="collapseSix" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  You'll need of two potions to create a useful evolution of your CroSkull:
                  <br></br>
                  - the red potion will be guaranteed airdropped to the first 33 members that will accumulate 3000 Skullcoin, reach level 10 xp rank (Pro-Skuller) and will be a CroSkull hodlers.
                  <br></br>
                  - the blue potion will be guaranteed airdropped to the first 33 members who will get more valid invitations on Discord.
                  <br></br><br></br>
                  The rest of the potions will be airdropped to a few lucky random 2+ Croskull hodlers.
                  <br></br>
                  By combining the two potions, you can obtain a new evolved CroSkull that can be staked to obtain more advantages... 👀 more info TBA.
                </div>  
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Have more question?
                </h5>
              </div>
              <div id="collapseTwo" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  Look at our <a href="https://croskull-nft.gitbook.io/croskull/">Gitbook!</a>
                </div>
              </div>
            </div>


          </div>

        </div>


      </div>

    </>
  )
}

export default Home;