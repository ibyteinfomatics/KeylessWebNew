import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Header() {
    
    const [state, setState] = useState(false);

    const changevalueonscroll = () => {
        const scrollvalue=document.documentElement.scrollTop;
        if(scrollvalue > 100){
            setState(true);
        }else{
            setState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changevalueonscroll);
    });

    // const li = document.querySelectorAll(".menuLinks");
    // const sec = document.querySelectorAll(".secContent");

    // function sectionScroll() {
    //     let len=sec.length;
    //     while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    //     li.forEach(ltx => ltx.classList.remove("activeLInks"));
    //     li[len].classList.add("activeLinks");
    // }
    // sectionScroll();
    // window.addEventListener("scroll", sectionScroll);

    
    return(
        <React.Fragment>
            <div className={state ? "site__header header__fixed" : "site__header"}>
                <div className="site__width section__header">
                    <div className="site__logo">
                        <Link href="/">
                            <a className="logo__link"></a>
                        </Link>
                    </div>
                    <div className="site__menu">
                        <ul>
                            <li className="menuLinks">
                                <Link href="#home"><a>Home</a></Link>
                            </li>
                            <li className="menuLinks">
                                <Link href="#aboutUs"><a>About</a></Link>
                            </li>
                            <li className="menuLinks">
                                <Link href="#ourProducts"><a>Products</a></Link>
                            </li>
                            <li className="menuLinks">
                                <Link href="#"><a>Contact Us</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="site__login--button">
                        <div className="btn btn--style-1">
                            <Link href=""><a>Login</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}