import './footer.css';
import {useState} from 'react';

function SelectBox(){

    const [select, setSelect] = useState([
        {id:0, name:'FAMILY SITE', link:''},
        {id:1, name:'이마트 회사소개', link:'https://company.emart.com/ko/main.do'},
        {id:2, name:'신세계포인트', link:"https://www.shinsegaepoint.com/"},
        {id:3, name:'이마트몰', link:'https://emart.ssg.com/?ckwhere=emart'},
        {id:4, name:'이마트 트레이더스', link:'http://www.traders.co.kr/index.jsp'},
        {id:5, name:'이마트 에브리데이', link:'http://www.emarteveryday.co.kr/'},
        {id:6, name:'이마트24', link:'https://www.emart24.co.kr/'},
        {id:7, name:'신세계그룹', link:'https://www.shinsegaegroupnewsroom.com/'},
        {id:8, name:'신세계백화점', link:'https://www.shinsegae.com/index.do'},
        {id:9, name:'신세계인터내셔날', link:'http://www.sikorea.co.kr/main'},
        {id:10, name:'신게셰푸드', link:'http://www.shinsegaefood.com/main.sf'},
        {id:11, name:'신세계건설', link:'https://www.shinsegae-enc.com/'},
        {id:12, name:'신세계아이앤씨', link:'http://www.sinc.co.kr/main.do'},
        {id:13, name:'스타벅스커피코리아', link:'https://www.starbucks.co.kr/index.do'},
        {id:14, name:'조선호텔앤리조트', link:'https://www.josunhotel.com/intro.do'},
        {id:15, name:'신세계사이먼', link:'"https://www.premiumoutlets.co.kr/main/ko'},
        {id:16, name:'SSG.COM', link:'https://www.ssg.com/'}
    ]);

    const SelectList = [];

    for(let i = 0; i < select.length; i++){
        SelectList.push(
            <option key={select[i].id}>{select[i].name}</option>
        );
        console.log(select[i].id);
    };

    return(
    <div className="family_link">
                        <label htmlFor="familysite" className="hide">FAMILY SITE</label>
                        <select id="familysite">
                            {SelectList}
                        </select>
                        <button id="myBtn" type="button" title="새창열림">확인</button>
                    </div>
    );
};

function Footer(){
    
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
                    
                    <SelectBox ></SelectBox>

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