//import React, {Component} from 'react';
import'./Header.css';

function Header(){
    return (
        <section>
        <div id="topbar">
            <header className="topbar ibx">
                <nav>
                    <ul className="nleft">
                        <li>
                            <a href="/">PEACOCK</a>
                        </li>
                        <li>
                            <a href="/">이마트몰</a>
                        </li>
                        <li>
                            <a href="/">신세계포인트</a>
                        </li>
                        <li>
                            <a href="/">문화센터</a>
                        </li>
                    </ul>
                    <ul className="nright">
                        <li>
                            <a href="/">My이마트</a>
                        </li>
                        <li>
                            <a href="/">이마트뮤직</a>
                        </li>
                        <li>
                            <a href="/">이마트TV</a>
                        </li>
                        <li>
                            <a href="/">로그인</a>
                        </li>
                        <li>
                            <a href="/">회원가입</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    </section>
    )
}
export default Header;