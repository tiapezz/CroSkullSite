
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
            <button id='underworld-btn'>Button</button>
          </div>


        </div>
        <div className="what-is">
          <div className="row">
            <div className="col-sm story-img">
              <img src={castle} />
            </div>
            <div className="col-sm story-text" >
              <h2> What is CroSKull</h2>
              Bonesville has always been a mysterious town. Among the dark streets of the city, it is rare to see people stopping to talk to each other.
              Many elderly people leave their homes just to carry out duties or run errands, whereas the few children who have never played with each other do not know what fun is.
              At Bonesville, everything is sad, gloomy, melancholic, still.
              Just one person’s soul stands out across all the grey souls of the city…
              Dr. Jiko spends most of his time in his secret laboratory located inside the dark Bonesville Castle.
              After years of failure, he managed to improve his alchemical formula
              By combining mysterious potions, he found a way to bring joy and life back to the city…
              6,666 funny and crazy Croskulls are ready to invade the streets!
            </div>
          </div>

          <div className="row">
            <div className="col-sm story-text" >
              The Croskull is a collection of 6,666 uniquely generated NFTs stored in the Cronos Chain.

              Each Croskull NFT is based on 6 attributes with different rarities.

              A Croskull is not simply a PFP but is also the key to the insane Dr. Jiko’s laboratory experiments.
            </div>
            <div className="col-sm story-img"  >
              <img src={village} />
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
                  <p>Cosa fa la tavern</p>
                </div>

              </div>
              <div className="carousel-item s2">
                <div className="carousel-content">
                  <h2>Tavern</h2>
                  <p>Cosa fa la tavern</p>
                </div>
              </div>
              <div className="carousel-item s3">
                <div className="carousel-content">
                  <h2>Tavern</h2>
                  <p>Cosa fa la tavern</p>
                </div>
              </div>
              <div className="carousel-item s4">
              </div>
              <div className="carousel-item s5">
              </div>
              <div className="carousel-item s6">
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
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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