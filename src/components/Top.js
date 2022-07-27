import './Top.css';

function Top(){
    return(
        <section>
        <div id="top">
            <header className="top ibx">
                <nav>
                    <ul>
                        <li>
                            <a href="/">점포찾기</a>
                        </li>
                        <li>
                            <a href="/">전단광고</a>
                        </li>
                        <li className="m01">
                            <a className="m01" href="/">
                                <img className="topimg" src={require("../imgs/gnb01.png")} alt="이마트로고"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">이벤트</a>
                        </li>
                        <li>
                            <a href="/">고객센터</a>
                            <div className="sub_contain">
                                <div className="topSubmenu">
                                    <ol>
                                        <li>
                                            <a href="/">공지사항</a>
                                        </li>
                                        <li>
                                            <a href="/">자주하는질문</a>
                                        </li>
                                        <li>
                                            <a href="/">고객문의</a>
                                        </li>
                                        <li>
                                            <a href="/">고객만족제도</a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    </section>
    )
}

export default Top;