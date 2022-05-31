
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { useDispatch } from "react-redux";
import store from "../../redux/store";
import { loadAllSkull, resetSkullList, getEbisusLink, loadFilterSkull, getFilterSkullLenght, getAttributeNew, loadSkull, resetAttributeList, resetSkullsFilterLenght,loadEvoSkullMinted, getEbisusLinkEvo } from "../../redux/gallery/galleryAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faClipboard, faFilter } from '@fortawesome/free-solid-svg-icons';
import './graveyard.css';
import bgIcon from './Icon/bg.png';
import bodyIcon from './Icon/body.png';
import noseIcon from './Icon/nose.png';
import skullIcon from './Icon/skull.png';
import eyesIcon from './Icon/eyes.png';
import hatIcon from './Icon/hat.png';
import numberIcon from './Icon/number.png';
import logoIcon from './Icon/logo-icon.png';
import searchIcon from './Icon/search.png';
import { faPortrait, faStoreAlt, faPlus, faMinus, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import AttributeMap from '../AttributeMap/AttributeMap';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ipfsUri480 = "https://croskull.mypinata.cloud/ipfs/QmWu9bKunKbv8Kkq8wEWGpCaW47oMBbH6ep4ZWBzAxHtgj/"

const ipfsUri = 'https://ipfs.io/ipfs/QmZA9idEBomqsYBvA9ZH5JzuirmyQ414UBaqBGaEk2w69x/'
const Graveyard = () => {
    let dispatch = useDispatch();

    let { gallery } = store.getState();
    let { skullsList, attributeList, ebisusLink, skullsFilterLenght = 6666, evoList, evoLink } = gallery;

    let [filter, setFilter] = useState([
        { name: 'Background', value: [] },
        { name: 'Skull', value: [] },
        { name: 'Body', value: [] },
        { name: 'Nose', value: [] },
        { name: 'Eyes', value: [] },
        { name: 'Hat', value: [] },
        { name: 'Trait', value: [] }
    ]);
    let [skullsListLength, setSkullsListLength] = useState(0);
    let [angleIconFilter, setAngleIconFilter] = useState([]);
    let [skullModal, setSkullModal] = useState(false);
    let [evoModal, setEvoModal] = useState(false);
    let [skullData, setSkullData] = useState();
    let [evoData, setEvoData] = useState();
    let [page, setPage] = useState(0);
    let [evoView, setEvoView] = useState(false);
    let [evoList2,setEvoList] = useState([]);
    let [mobile, setMobile] = useState(false);
    let [evoViewFlag,setEvoViewFlag] = useState(false);

    //INIZIALIZZAZIONE DELLA PAGINA
    useEffect(() => {
        console.log(window.innerWidth);
        if(window.innerWidth <= 640)
        setMobile(true);
        console.log(mobile);
        dispatch(loadFilterSkull(filter, 0))
        dispatch(getAttributeNew())
        dispatch(loadEvoSkullMinted());
        setEvoList = skullsList;
        return () => {
            skullsList = null;
            attributeList = null;
            dispatch(resetSkullList())
            dispatch(resetAttributeList())
            filter = null;
            setFilter(null);
            dispatch(resetSkullsFilterLenght());
        };
    }, [])



    //SKULL MODAL
    function openSkullModal(croskull) {
        setSkullData(croskull);
        setSkullModal(true);
        dispatch(getEbisusLink(croskull));

    }
    function openEvoModal(evoskull) {
        setEvoData(evoskull);
        setEvoModal(true);
        dispatch(getEbisusLinkEvo(evoskull));
        console.log(evoLink);
    }

    function closeSkullModal() {
        setSkullModal(false);
    }
    function closeEvoModal() {
        setEvoModal(false);
    }
    function chooseIcon(at) {
        switch (at) {
            case 'Background':
                return bgIcon;
            case 'Nose':
                return noseIcon;
            case 'Hat':
                return hatIcon;
            case 'Skull':
                return skullIcon;
            case 'Eyes':
                return eyesIcon;
            case 'Body':
                return bodyIcon;
            case 'Trait':
                return numberIcon;
        }
    }
    //FINE MODAL 

    //INIZIO FILTRI
    const setFilterAngleState = (i) => {
        let ids = [...angleIconFilter];
        ids[i] = !ids[i];
        setAngleIconFilter(ids);
    }

    const ShowCheckbox = (i) => {
        if(!evoView){
            setFilterAngleState(i);
            let d = document.getElementById("filter-checkbox-" + i);
            d.style.height = 'auto';
        }


    }

    function loadSkullFilter() {
        dispatch(resetSkullList());
        dispatch(getFilterSkullLenght(filter))
        if (checkVoidFilter()) {
            dispatch(loadAllSkull(0))
            setPage(0);
            skullsFilterLenght = 6666;
        }
        else {
            dispatch(loadFilterSkull(filter, page));
        }

    }

    function checkVoidFilter() {
        let flag = true;
        filter.map(at => {
            if (at.value.length != 0)
                flag = false
        })
        return flag;
    }

    function addFilter(name, value) {
        switch (name) {
            case 'Background':
                if (!filter[0].value.includes(value))
                    filter[0].value.push(value);
                else {
                    const index = filter[0].value.indexOf(value);
                    filter[0].value.splice(index, 1);
                }
                break;
            case 'Skull':
                if (!filter[1].value.includes(value))
                    filter[1].value.push(value);
                else {
                    const index = filter[1].value.indexOf(value);
                    filter[1].value.splice(index, 1);
                }
                break;
            case 'Body':
                if (!filter[2].value.includes(value))
                    filter[2].value.push(value);
                else {
                    const index = filter[2].value.indexOf(value);
                    filter[2].value.splice(index, 1);
                }
                break;
            case 'Nose':
                if (!filter[3].value.includes(value))
                    filter[3].value.push(value);
                else {
                    const index = filter[3].value.indexOf(value);
                    filter[3].value.splice(index, 1);
                }
                break;
            case 'Eyes':
                if (!filter[4].value.includes(value))
                    filter[4].value.push(value);
                else {
                    const index = filter[4].value.indexOf(value);
                    filter[4].value.splice(index, 1);
                }
                break;
            case 'Hat':
                if (!filter[5].value.includes(value))
                    filter[5].value.push(value);
                else {
                    const index = filter[5].value.indexOf(value);
                    filter[5].value.splice(index, 1);
                }
            case 'Trait':
                if (!filter[6].value.includes(value))
                    filter[6].value.push(value);
                else {
                    const index = filter[6].value.indexOf(value);
                    filter[6].value.splice(index, 1);
                }
                break;
            default:
                break;
        }
        setPage(0);
        loadSkullFilter();
    }

    function clear() {
        filter.map((f) => {
            f.value = [];
        })
        attributeList.map((attribute, i) => {
            attribute.value.map(value => {
                let s = document.getElementById(attribute.name + '-' + value.name);
                s.checked = false;
            })

        })
        loadSkullFilter();
    }
    function searchById(event) {
        let n = event.target.value;
        if (n) {
            dispatch(loadSkull(n))
        } else {
            loadSkullFilter()
        }

    }
    //FINE FILTRI




    //SCROLL EVENT
    const listenScroll = (event) => {
        let scrollValue = event.target.scrollTop;
        let dh = document.getElementById('skull-row').clientHeight
        if (checkVoidFilter()) {
            if (scrollValue > dh / 100 * 60 && skullsListLength != skullsList.length && page < +66) {
                setSkullsListLength(skullsList.length);
                setPage(page + 1);
                page = page + 1
                dispatch(loadAllSkull(page))
            }
        } else {
            if (scrollValue > dh / 100 * 60 && skullsListLength != skullsList.length) {
                setSkullsListLength(skullsList.length);
                setPage(page + 1);
                page = page + 1
                dispatch(loadFilterSkull(filter, page));
            }
        }
    }

    //MOBILE BAR
    const openbar = () => {
        document.getElementById("sidebar").style.width = "100%";
    }
    const closebar = () => {
        document.getElementById("sidebar").style.width = "0px";
    }

    //EVOVIEW EVENT
    function evoEvent(){
        evoView = !evoView;
        setEvoView(evoView);
        if(evoView)
        {
            let f = document.getElementById('croskull-filter');
            f.style.transform = 'scale(0)';
            //CHANGE BG
            let bg = document.getElementById('graveyard');
            bg.style.backgroundColor = '#000';
            bg.style.color = 'fuchsia';
            let sd = document.getElementById('sidebar');
            console.log(mobile);
            if(mobile)
            sd.style.backgroundColor = '#000';
            //CHANGE TITLE
            let st = document.getElementById('skull-title');
            st.innerHTML = 'EVOSKULLS';
            st.style.color ='fuchsia';
            let stn = document.getElementById('skull-title-number');
            stn.innerHTML = '//333';
            //HIDDEN SKULL
            let sr = document.getElementById('skull-row');
            sr.style.animation = 'PopUpReverse 1s';
            setTimeout(() => { sr.style.display = 'none'; }, 1000);
            //SHOW EVO
            let er = document.getElementById('evoskull-row');
            er.style.animation = 'PopUp 1s';
            setTimeout(() => { er.style.display = 'flex'; }, 1000);
        }else{
            let f = document.getElementById('croskull-filter');
            f.style.transform = 'scale(1,1)';
                        //CHANGE BG
                        let bg = document.getElementById('graveyard');
                        bg.style.backgroundColor = 'aliceblue';
                        bg.style.color = 'black';
                        let sd = document.getElementById('sidebar');
                        if(mobile)
                        sd.style.backgroundColor = 'aliceblue';
                        //CHANGE TITLE
                        let st = document.getElementById('skull-title');
                        st.innerHTML = 'CROSKULLS';
                        st.style.color ='black';
                        let stn = document.getElementById('skull-title-number');
                        stn.innerHTML = '//'+ skullsFilterLenght;
            //HIDDEN EVO
            let er = document.getElementById('evoskull-row');
            er.style.animation = 'PopUpReverse 1s';
            setTimeout(() => { er.style.display = 'none'; }, 1000);
            //SHOW SKULL
            let sr = document.getElementById('skull-row');
            sr.style.animation = 'PopUp 1s';
            setTimeout(() => { sr.style.display = 'flex'; }, 1000);

        }
    }


    return (
        <>
            <div className='skull-modal' hidden={!skullModal} onClick={() => { closeSkullModal() }}>
                {
                    skullData != null ?
                        <>
                            <div className={'modal-container ' + skullData.attributes[0].value} >

                                <div className='modal-img'>
                                    <LazyLoadImage
                                        src={`${ipfsUri480}${skullData.edition}.webp`}
                                    />
                                </div>
                                <div className='modal-desc'>
                                    <div className='desc-header'>
                                        <div className='desc-title'>
                                            <p>CroSkull</p>
                                            <h1>#{skullData.edition}</h1>
                                        </div>
                                        <div className='desc-icons'>
                                            <a href={ipfsUri + skullData.edition + '.png'}> <FontAwesomeIcon icon={faPortrait} /></a>
                                            {
                                                ebisusLink ?
                                                    <a href={ebisusLink}> <FontAwesomeIcon icon={faStoreAlt} /></a>
                                                    :
                                                    ''
                                            }

                                        </div>
                                    </div>

                                    <div className={'attribute-container row'}>
                                        {skullData.attributes.map(at => {
                                            return (
                                                <div className={'attribute attribute-' + skullData.attributes[0].value}>
                                                    <div className='attribute-icon'>
                                                        <img src={chooseIcon(at.trait_type)} />
                                                    </div>
                                                    <div className='attribute-desc'>
                                                        <p className='type'>{at.trait_type}:</p>
                                                        <p className='value'><AttributeMap value={at.value} /></p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className={'attribute attribute-' + skullData.attributes[0].value}>
                                            <div className='attribute-icon'>
                                                <img src={chooseIcon('Trait')} />
                                            </div>
                                            <div className='attribute-desc'>
                                                <p className='type'>N. Trait:</p>
                                                <p className='value'>{skullData.attributes.length}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <img src={logoIcon} className='logo' />
                            </div>
                        </>
                        :
                        ''
                }
            </div>
            <div className='skull-modal' hidden={!evoModal} onClick={() => { closeEvoModal() }}>
                {
                    evoData != null ?
                        <>
                            <div className={'modal-container '} >

                                <div className='modal-video'>
                                <ReactPlayer 
                            className="evo-image"
                            url={evoData.metadata.animation_url}
                            playing={true}
                            muted={true}
                            controls={false}
                            loop={true}
                            width={`100%`}
                        />
        

                                </div>
                                <div className='modal-evodesc'>
                                            <p>EvoSkull</p>
                                            <h1>#{evoData.metadata.edition}</h1>
                                            <h2>Owner:{evoData.owner}</h2>
                                            <div>
                                                <span>
                                                <a href={evoData.metadata.animation_url}> <FontAwesomeIcon icon={faClapperboard} size='2x'/>    </a>
                                                &emsp;
                                                <a href={evoData.metadata.image}> <FontAwesomeIcon icon={faPortrait} size='2x'/> </a>
                                                &emsp;
                                                {
                                                    evoLink ?
                                                        <a href={evoLink}> <FontAwesomeIcon icon={faStoreAlt} size='2x'/></a>
                                                        :
                                                        ''
                                                }
                                                </span>
                                            </div>
                                </div>

                                <img src={logoIcon} className='logo' />
                            </div>
                        </>
                        :
                        ''
                }
            </div>


            <div className='header'>
                <h1 id='filter-header'>Filter <span id='clear-button' onClick={() => clear()}><FontAwesomeIcon icon={faWindowClose} /></span> </h1>
                <div className='skull-header'>
                    <h1  ><span id='skull-title'>CROSKULLS</span><span id='skull-title-number'>//{skullsFilterLenght}</span><span id='filter-button' onClick={() => openbar()}><FontAwesomeIcon icon={faFilter} /></span></h1>
                    
                </div>
            </div>
            <div className='gallery-container'>
                <div className='filter-container' id='sidebar'>
                    <div className='filter-title'>
                        <h1>Filter <span id='filter-button' onClick={() => closebar()}><FontAwesomeIcon icon={faMinus} /></span></h1>
                    </div>
                    <div class="custom-control custom-switch custom-switch-lg">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={() =>evoEvent()}/>
                        <label class="custom-control-label" for="customSwitch1">EvoSkull</label>
                    </div>
                    <div id='croskull-filter'>

                    <div className='filter-header'>
                        <div className='filter-icon'>
                            <img src={searchIcon} />
                        </div>
                        <div className='filter-name'>
                            <input type='number' className='search-skull' onChange={searchById}></input>

                        </div>
                    </div>
                    {
                        attributeList ?
                            attributeList.map((attribute, i) => {
                                return (
                                    <div className='filter-box' key={'filter-box-' + i} id={'filter-box-' + i}>
                                        <div className='filter-header' onClick={() => ShowCheckbox(i)}>
                                            <div className='filter-icon'>
                                                <img src={chooseIcon(attribute.name)} />
                                            </div>
                                            <div className='filter-name'>
                                                <h1>{attribute.name}
                                                    <span> <FontAwesomeIcon icon={angleIconFilter[i] ? faMinus : faPlus} /></span>
                                                </h1>

                                            </div>
                                        </div>
                                        <div className='filter-checkbox' id={'filter-checkbox-' + i} hidden={!angleIconFilter[i]}>
                                            {
                                                attribute.value.map((value, i) => {
                                                    return (
                                                        <div className='checkbox' key={attribute.name + '-' + value.name}>
                                                            <input type="checkbox" id={attribute.name + '-' + value.name} name={attribute.name + '-' + value.name} onChange={() => addFilter(attribute.name, value.name)} />
                                                            <label > <AttributeMap value={value.name} /> <span>({value.cont})</span></label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                )
                            }) : (<></>)
                    }
                    <div className='div-clear'>
                        <button className='skull-button clear-button' onClick={() => clear()} hidden={evoView}>Clear</button>
                    </div>
                    </div>
                </div>
                <div className='skull-container' onScroll={listenScroll}>

                    <div className='filter-bar'>

                    </div>
                    <div className='skull-row row' id='skull-row'>
                        {
                            skullsList ?
                                (
                                    skullsList.map(skull => {
                                        return (
                                            <div className='skull-card' key={skull.edition} onClick={() => openSkullModal(skull)}>
                                                <div className='skull-img'>
                                                    <LazyLoadImage
                                                        src={`${ipfsUri480}${skull.edition}.webp`}
                                                    />
                                                </div>
                                                <div className='skull-desc'>
                                                    <p className='type'>CroSkull</p>
                                                    <p className='number'>NO. {skull.edition}</p>
                                                </div>
                                            </div>
                                        )
                                    })

                                ) :
                                (
                                    <div>
                                        Loading...
                                    </div>
                                )
                        }
                    </div>
                    <div className='skull-row row' id='evoskull-row'>
                        {
                            evoList ?
                                (
                                    evoList.map(skull => {
                                        return (
                                            <div className='skull-card' key={skull.metadata.edition} onClick={() => openEvoModal(skull)}>
                                                <div className='skull-img'>
                                                    <LazyLoadImage
                                                        src={skull.metadata.image}
                                                    />
                                                </div>
                                                <div className='skull-desc'>
                                                    <p className='type'>EvoSkull</p>
                                                    <p className='number'>NO. {skull.metadata.edition}</p>
                                                </div>
                                            </div>
                                        )
                                    })

                                ) :
                                (
                                    <div>
                                        Loading...
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>

        </ >
    )
}

export default Graveyard;


