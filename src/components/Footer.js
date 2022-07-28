import './footer.css';

function Footer(){
    const urlList = [
        "https://company.emart.com/ko/main.do",
        "https://www.shinsegaepoint.com/",
        "https://emart.ssg.com/?ckwhere=emart",
        "http://www.traders.co.kr/index.jsp",
        "http://www.emarteveryday.co.kr/",
        "https://www.emart24.co.kr/",
        "https://www.shinsegaegroupnewsroom.com/",
        "https://www.shinsegae.com/index.do",
        "http://www.sikorea.co.kr/main",
        "http://www.shinsegaefood.com/main.sf",
        "https://www.shinsegae-enc.com/",
        "http://www.sinc.co.kr/main.do",
        "https://www.starbucks.co.kr/index.do",
        "https://www.josunhotel.com/intro.do",
        "https://www.premiumoutlets.co.kr/main/ko",
        "https://www.ssg.com/"
    ];
    
    return (
        <footer className="info ibx" id="footer">
        <div className="foot_util">
            <div className="f_menu">
                <div className="f_left">
                    <ul>
                        <li>
                            <a href="/">점포찾기</a>
                        </li>
                        <li>
                            <a href="/">전단광고</a>
                        </li>
                        <li>
                            <a href="/">이벤트</a>
                        </li>
                        <li>
                            <a href="/">고객센터</a>
                            <ul>
                                <li>
                                    <a href="/">공지사항</a>
                                </li>
                                <li>
                                    <a href="/">자주하는 질문</a>
                                </li>
                                <li>
                                    <a href="/">고객문의</a>
                                </li>
                                <li>
                                    <a href="/">고객만족제도</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className="f_right">
                        <ul>
                            <li>
                                <a href="/">My이마트</a><span>·</span>
                            </li>
                            <li>
                                <a href="/">이마트뮤직</a><span>·</span>
                            </li>
                            <li>
                                <a href="/">이마트TV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="f_bottom">
                <div className="left">
                    <div className="company_info">
                        <em>
                            <img src={require("../imgs/footer_logo_emart.png")} alt="emart"/>
                        </em>
                        <ul className="detail_info">
                            <li>
                                <strong>대표자:</strong>"강희석"
                            </li>
                            <li>서울특별시 성동구 뚝섬로 377(성수동2가)</li>
                        </ul>
                        <ul className="detail_info">
                            <li>
                                <strong>사업자등록번호:</strong>" 026-86-50913"
                            </li>
                            <li>
                                <strong>통신판매업 신고번호:</strong>" 제 2011-서울성동-0345"
                            </li>
                        </ul>
                        <ul className="detail_info">
                            <li>
                                <a href="/">공정거래자율준수프로그램</a>
                            </li>
                            <li>
                                <a href="/">이용약관</a>
                            </li>
                            <li className="important">
                                <a href="/">개인정보처리방침</a>
                            </li>
                            <li className="important">
                                <a href="/">영상정보처리기기운영, 관리방침</a>
                            </li>
                        </ul>
                        <ul className="footer_link">
                            <li>
                                <a href="/">회사소개</a>
                            </li>
                            <li>
                                <a href="/">CSR경영</a>
                            </li>
                            <li>
                                <a href="/">투자정보(IR)</a>
                            </li>
                            <li>
                                <a href="/">채용정보</a>
                            </li>
                            <li>
                                <a href="/">이마트 신문고</a>
                            </li>
                        </ul>
                        <ul className="partner-links">
                            <li>
                                <a href="/">협력회사 상담<span>(상품/임대을)</span></a>
                            </li>
                            <li>
                                <a href="/">협력회사 상담<span>(임대갑, 기타입찰 및 계약)</span></a>
                            </li>
                            <li>
                                <a href="/">협력회사 상담<span>(구매총무)</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="family_link">
                        <label htmlFor="familysite" className="hide">FAMILY SITE</label>
                        <select id="familysite">
                            <option >FAMILY SITE</option>
                            <option value="0">이마트 회사소개</option>
                            <option value="1">신세계포인트</option>
                            <option value="2">이마트몰</option>
                            <option value="3">이마트 트레이더스</option>
                            <option value="4">이마트 에브리데이</option>
                            <option value="5">이마트24</option>
                            <option value="6">신세계그룹</option>
                            <option value="7">신세계백화점</option>
                            <option value="8">신세계인터내셔날</option>
                            <option value="9">신세계푸트</option>
                            <option value="10">신세계건설</option>
                            <option value="11">신세계아이앤씨</option>
                            <option value="12">스타벅스커피코리아</option>
                            <option value="13">조선호텔앤리조트</option>
                            <option value="14">신세계사이먼</option>
                            <option value="15">SSG.COM</option>
                        </select>
                        <button id="myBtn" type="button"  onClick={ ()=>{
                            const values = document.getElementById("familysite");
                            if(urlList[values.value]){
                            window.open(urlList[values.value])
                            }
                        }} title="새창열림">확인</button>
                    </div>
                    <ul className="cs-call">
                        <li>
                            <em>이마트대표전화:</em>02-380-5678
                        </li>
                        <li>
                            <em>(주)에스에스지닷컴:</em>1577-3419
                        </li>
                        <li>
                            <em>신세계포인트:</em>1899-4349
                        </li>
                        <li>
                            <em>노브랜드 가맹문의:</em>02-380-9192
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer;