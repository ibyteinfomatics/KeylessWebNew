import React from "react";
import Image from "next/image";

export default function FeatureLists(Props) {
    return(
        <React.Fragment>
            <div className='list--item'>
                {Props.ListImg &&
                    <div className='list--icon'>
                        <Image src={Props.ListImg} layout="fill" quality={100} alt="List Icon" />
                    </div>
                }
                {Props.ListTitle &&
                    <div className="list--title">
                        <p>{Props.ListTitle}</p>
                    </div>
                }
            </div>
              
        </React.Fragment>
    )
}