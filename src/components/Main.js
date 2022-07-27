import './main.css';

function Main(){
    return (
        <div className="m1">
        <main className="cont ibx">
        <section className="cbx c1">
            <div>
                <a className="left_btn btns" href="/"><span></span></a>
                <a href="/" className="changeImg">
                    <img src="" alt=""/>
                </a>
                <a className="right_btn btns" href="/"><span></span></a>
                <div className="control_1">
                    <div className="swiper">
                        <a className="dot"  href="/"><span></span></a>
                        <a className="dot"  href="/"><span></span></a>
                        <a className="dot"  href="/"><span></span></a>
                    </div>
                    <a className="stop on" href="/"><span></span></a>
                    <a className="start" href="/"><span></span></a>
                </div>
            </div>
            <div> 
                <div className="c1_1">
                    <div className="inner">
                        <h2 className="sbtxt">기분좋은 혜택</h2>
                        <ul className="sublist">
                            <div id="ani" className="ani">
                                <div className="sub1">
                                    <li>삼성/LG 대형가전 최대 30만원 할인</li>
                                    <li>가전 행사상품 구매시 무이자 할부</li>
                                    <li>삼성/LG 대형가전 최대 80만원 상품권 증정</li>
                                    <li>일렉트로맨 27 모니터 2만원 할인</li>
                                    <li>데이즈 아동 봄 꼭 필요한 시리즈 20% 할인</li>
                                    <li>아동양말/런닝/팬티 2개 이상 구매시 30% 할인</li>
                                    <li>브랜드 오피스 체어 최대 20% 할인</li>
                                    <li>필렉회 30% 할인</li>
                                    <li>네타 초밥 30% 할인</li>
                                </div>
                                <div className="sub1">
                                    <li>삼성/LG 대형가전 최대 30만원 할인</li>
                                    <li>가전 행사상품 구매시 무이자 할부</li>
                                    <li>삼성/LG 대형가전 최대 80만원 상품권 증정</li>
                                    <li>일렉트로맨 27 모니터 2만원 할인</li>
                                    <li>데이즈 아동 봄 꼭 필요한 시리즈 20% 할인</li>
                                    <li>아동양말/런닝/팬티 2개 이상 구매시 30% 할인</li>
                                    <li>브랜드 오피스 체어 최대 20% 할인</li>
                                    <li>필렉회 30% 할인</li>
                                    <li>네타 초밥 30% 할인</li>
                                </div>
                            </div>
                        </ul>
                        <div className="control">
                            <span className="stop on" id="stop"></span>
                            <span className="start" id="start"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cbx c2">
            <div className="main">
                <h2>금주의 득탬 찬스</h2>
                <div className="mainbenner">
                    <div className="slide">
                        <a href="/">
                            <img src={require("../imgs/20220106_0838004_001.jpg")} alt="금주의 전간돵고 배너"/>
                            <span>
                                더 좋은 가격으로 이마트에서 절약하세요!<br/>
                                금주의 전단광고
                            </span>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="/">
                            <img src={require("../imgs/20220113_0052006_202.jpg")} alt="금주의 전간돵고 배너"/>
                            <span>
                                이마트 할인이 시작된다<br/>
                                e날특가
                            </span>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="/">
                            <img src={require("../imgs/20220113_0055049_203.jpg")} alt="금주의 전간돵고 배너"/>
                            <span>
                                이마트/트레이더스에서 쇼핑하면<br/>
                                가전제품 할부금이 0원!
                            </span>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="/">
                            <img src={require("../imgs/20220216_1613036_011.jpg")} alt="금주의 전간돵고 배너"/>
                            <span>
                                이마트에서 만나는<br/>
                                대한항공 마일리지
                            </span>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="/">
                            <img src={require("../imgs/20220218_0956038_005.jpg")} alt="금주의 전간돵고 배너"/>
                            <span>
                                아시아나항공 마일리지<br/>
                                적립/사용 안내
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="cbx c3">
            <div className="main2">
                <h2>언제 어디서나 즐거운 콘텐츠</h2>
                <div className="maincover">
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
                </div>
            </div>
        </section>
        <section className="cbx c5">
            <ul>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand01.png")} alt="트레이더스"/>
                        <img className="over" src={require("../imgs/logo_main_brand01_over.png")} alt="트레이더스"/>
                        <span>트레이더스</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand11.png")} alt="노브랜드"/>
                        <img className="over" src={require("../imgs/logo_main_brand11_over.png")} alt="노브랜드"/>
                        <span>노브랜드</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand02.png")} alt="몰리스"/>
                        <img className="over" src={require("../imgs/logo_main_brand02_over.png")} alt="몰리스"/>
                        <span>몰리스</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand03.png")} alt="일렉트로마트"/>
                        <img className="over" src={require("../imgs/logo_main_brand03_over.png")} alt="일렉트로마트"/>
                        <span>일렉트로마트</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand05.png")} alt="PK Market"/>
                        <img className="over" src={require("../imgs/logo_main_brand05_over.png")} alt="PK Market"/>
                        <span>PK Market</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand06.png")} alt="SSG푸드마켓"/>
                        <img className="over" src={require("../imgs/logo_main_brand06_over.png")} alt="SSG푸드마켓"/>
                        <span>SSG푸드마켓</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand07.png")} alt="토이킹덤"/>
                        <img className="over" src={require("../imgs/logo_main_brand07_over.png")} alt="토이킹덤"/>
                        <span>토이킹덤</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={require("../imgs/logo_main_brand09.png")} alt="베이비서클"/>
                        <img className="over" src={require("../imgs/logo_main_brand09_over.png")} alt="베이비서클"/>
                        <span>베이비서클</span>
                    </a>
                </li>
            </ul>

        </section>
    </main>
    </div>
    )
}

export default Main;