import Link from "next/link";
import React from "react";

export default function Footer () {
    return(
        <>
            <div className="site__footer">
                <div className="site__width">
                    <div className="footer__content">
                        <p>@ 2022, All rights reserved.</p>
                    </div>
                    <div className="footer__nav">
                        <ul>
                            <li>
                                <Link href="#aboutUs"><a>About Us</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Faqs</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Support</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}