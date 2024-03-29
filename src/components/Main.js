import './main.css';
import {useState, useEffect} from 'react';

function ImgSlide(){

    const [on, seton] = useState(true)

    const [imgList, setImgList] = useState([
        { key: 'event1', isClicked:1, src:require("../imgs/20211202_0818009_002.jpg")},
        { key: 'event2', isClicked:0, src:require("../imgs/20211202_1543008_040.jpg")},
        { key: 'event3', isClicked:0, src:require("../imgs/20211215_2032024_380.jpg")},
    ]);

    function img(element){
        if(element.isClicked===1){
            return true;
        };
    };

    const directButton = (key) =>{
        setImgList([...imgList].map(img=>{
            return{
                key : img.key,
                isClicked: img.key === key ? 1 : 0, 
                src : img.src
            };
        }));
    };

    const imgHandler = (type) => {
        let currentIndex = imgList.findIndex(img => img.isClicked === 1);
        console.log(currentIndex);
        let updateIndex = type === 'prev'
        ? currentIndex -1
        : currentIndex + 1

        if(updateIndex === imgList.length ){
            updateIndex = 0 
        }else if(updateIndex === -1)(
            updateIndex = imgList.length -1
        );

        console.log(currentIndex, updateIndex)
        
        setImgList([...imgList].map((img, index)=>{
            console.log(index, img)
            return {
                key : img.key,
                isClicked: index === updateIndex ? 1 : 0, 
                src : img.src
            };
        }));
    };
    useEffect(()=>{
        if(on){
        const slide =  setInterval(()=>{imgHandler('next')}, 4000)
        return () => {clearInterval(slide)}
        };
    });

    return(
        <div>
            <a className="left_btn btns" href="/" onClick={()=>{imgHandler('prev')}}><span></span></a>
            <a href="/" className="changeImg">
                <img src={imgList.find(img).src}  alt="" />
            </a>
            <a className="right_btn btns" href="/" onClick={()=>{imgHandler('next')}}><span></span></a>
            <div className="control_1">
                <div className="swiper">
                    <a className={'dot' + (imgList[0].isClicked === 1 ? ' dot_on': '')} href="/" onClick={()=>directButton('event1')}><span></span></a>
                    <a className={'dot' + (imgList[1].isClicked === 1 ? ' dot_on': '')} href="/" onClick={()=>directButton('event2')}><span></span></a>
                    <a className={'dot' + (imgList[2].isClicked === 1 ? ' dot_on': '')} href="/" onClick={()=>directButton('event3')}><span></span></a>
                </div>
                <a className={'stop' + (on? ' on' : '')} href="/" onClick={()=>seton(false)}><span></span></a>
                <a className={"start" + (!on? ' on' : '')} href="/" onClick={()=>seton(true)}><span></span></a>
            </div>
        </div>
    );
};

function TextSlide() {
    
    const [ani, setani] = useState();
    const [on, seton] = useState(true);
    
    const TextList = [
        {id:0 , text:'삼성/LG 대형가전 최대 30만원 할인'},
        {id:1 , text:'가전 행사상품 구매시 무이자 할부'},
        {id:2 , text:'삼성/LG 대형가전 최대 80만원 상품권 증정'},
        {id:3 , text:'일렉트로맨 27 모니터 2만원 할인'},
        {id:4 , text:'데이즈 아동 봄 꼭 필요한 시리즈 20% 할인'},
        {id:5 , text:'아동양말/런닝/팬티 2개 이상 구매시 30% 할인'},
        {id:6 , text:'브랜드 오피스 체어 최대 20% 할인'},
        {id:7 , text:'필렉회 30% 할인'},
        {id:8 , text:'네타 초밥 30% 할인'}
    ];
    
    const list = [];
    
    for(var i=0; i < TextList.length; i++){
        list.push(
            <li key={TextList[i].id}>{TextList[i].text}</li>
            );
        };
        
    return(
        <div> 
            <div className="c1_1">
                <div className="inner">
                    <h2 className="sbtxt">기분좋은 혜택</h2>
                    <ul className="sublist">
                        <div id="ani" className={'ani '+ani}>
                            <div className="sub1">
                                {list}
                            </div>
                            <div className="sub1">
                                {list}
                            </div>
                        </div>
                    </ul>
                    <div className="control">
                        <span className={'stop '+ (on ? "on" : "")} id="stop"  onClick={(e)=>{
                            setani('aniStop')
                            seton(false)
                        }}></span>
                        <span className={"start " + (!on ? "on" : "")} id="start" onClick={(e)=>{
                            setani()
                            seton(true)
                        }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Mainbenner = () =>{
    const bennerList = [
        {id:1, img:require("../imgs/20220106_0838004_001.jpg"), text1:'더 좋은 가격으로 이마트에서 절약하세요!',text2:'금주의 전단광고'},
        {id:2, img:require("../imgs/20220113_0052006_202.jpg"), text1:'이마트 할인이 시작된다', text2:'e날특가'},
        {id:3, img:require('../imgs/20220113_0055049_203.jpg'), text1:'이마트/트레이터드세어 쇼핑하면', text2:'가전제품 할부금이 0원!'},
        {id:4, img:require("../imgs/20220216_1613036_011.jpg"), text1:'이마트에서 만나는', text2:'대한항공 마일리지'},
        {id:5, img:require("../imgs/20220218_0956038_005.jpg"), text1:'아시아나항공 마일리지', text2:'적립/사용 안내'}
    ];

    const slide = bennerList.map((list)=>(
        <div key={list.id} className="slide">
            <img src={list.img} alt="금주의 전간돵고 배너"/>
            <span>
                {list.text1}<br/>
                {list.text2}
            </span>
        </div>
    ));

    return (
        <div className="mainbenner">
            {slide}
        </div>
    );
};

const Maincover = () => {
    return (
        <div className="float">
            <div id="leftimg">
                <a href="/">
                    <img src={require("../imgs/joyful_app_210407.jpg")}
                        alt="기분좋은 쇼핑 이마트앱, 유용한 쇼핑정보와 혜택을 한눈에 확인 할 수 있는 모바일 서비스"/>
                </a>
            </div>
            <div id="rightimg">
                <a className="size-up" href="/">
                    <img src={require("../imgs/joyful_tv_210707.jpg")} alt="꼭 끝까지 봐야하는 이마트 TV"/>
                </a>
                <a className="size-down" href="/">
                    <img src={require("../imgs/joyful_music_210707.jpg")} alt="이마트가 직접 만든 뮤직 스토리"/>
                </a>
            </div>
        </div>
    );
};

const IconLink = () => {

    const iconList = [
        {id:1, img:require("../imgs/logo_main_brand01.png"),overimg:require("../imgs/logo_main_brand01_over.png"),text:'트레이더스'},
        {id:2, img:require("../imgs/logo_main_brand11.png"),overimg:require("../imgs/logo_main_brand11_over.png"),text:'노브랜드'},
        {id:3, img:require("../imgs/logo_main_brand02.png"),overimg:require("../imgs/logo_main_brand02_over.png"),text:'몰리스'},
        {id:4, img:require("../imgs/logo_main_brand03.png"),overimg:require("../imgs/logo_main_brand03_over.png"),text:'일렉트로마트'},
        {id:5, img:require("../imgs/logo_main_brand05.png"),overimg:require("../imgs/logo_main_brand05_over.png"),text:'PK Market'},
        {id:6, img:require("../imgs/logo_main_brand06.png"),overimg:require("../imgs/logo_main_brand06_over.png"),text:'ssg푸드마켓'},
        {id:7, img:require("../imgs/logo_main_brand07.png"),overimg:require("../imgs/logo_main_brand07_over.png"),text:'토이킹덤'},
        {id:8, img:require("../imgs/logo_main_brand09.png"),overimg:require("../imgs/logo_main_brand09_over.png"),text:'베이미서클'},
    ];

    const icon = iconList.map((list)=>(
        <li key={list.id}>
            <a href="/">
                <img src={list.img} alt="트레이더스"/>
                <img className="over" src={list.overimg} alt="트레이더스"/>
                <span>{list.text}</span>
            </a>
        </li>
    ));

    return(
        <ul>
            {icon}
        </ul>
    );
};

function Main(){

    return (
        <div className="m1">
        <main className="cont ibx">
        <section className="cbx c1">
            <ImgSlide></ImgSlide>
            <TextSlide></TextSlide>
        </section>
        <section className="cbx c2">
            <div className="main">
                <h2>금주의 득탬 찬스</h2>
                <Mainbenner></Mainbenner>
            </div>
        </section>
        <section className="cbx c3">
            <div className="main2">
                <h2>언제 어디서나 즐거운 콘텐츠</h2>
                <div className="maincover">
                    <Maincover></Maincover>
                </div>
            </div>
        </section>
        <section className="cbx c5">
            <IconLink></IconLink>
        </section>
    </main>
    </div>
    );
};

export default Main;