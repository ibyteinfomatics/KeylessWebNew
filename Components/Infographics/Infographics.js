import React from "react";
import Image from "next/image";

export default function Infographic(Props) {
    return(
        <React.Fragment>
            <div className='infographic--item'  data-aos="fade-up" data-aos-duration={Props.Speed}>
                {Props.infoIcon && 
                <div className='infographic--icon'>
                  <Image src={Props.infoIcon} layout="fill" quality={100} alt="Trusted Icon" />
                </div>
                }
                <div className='infographic--content'>
                {Props.infoTitle && 
                  <div className='infographic--title'>
                    <h3>{Props.infoTitle}</h3>
                  </div>
                }
                {Props.infoText && 
                  <div className='infographic--text'>
                    <p>{Props.infoText}</p>
                  </div>
                }
                </div>
            </div>
        </React.Fragment>
    )
}