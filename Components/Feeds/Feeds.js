import React from "react";
import Image from "next/image";

export default function Feeds(Props) {
    return(
        <React.Fragment>
            <div className='feed--items'>
                {Props.feedImg && 
                <div className='feed--icons'>
                  <Image src={Props.feedImg} alt="Feed Images" layout='responsive' width={817} height={444} />
                </div>
                }
                <div className='feed--content'>
                {Props.feedTitle && 
                  <div className='feed--title title'>
                    <h3>{Props.feedTitle}</h3>
                  </div>
                }
                {Props.feedText && 
                  <div className='feed--text'>
                    <p>{Props.feedText}</p>
                  </div>
                }
                </div>
              </div>
        </React.Fragment>
    )
}