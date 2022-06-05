import React from "react";
import Image from "next/image";

export default function Testimonial(Props) {
  return (
    <React.Fragment>
      <div className="testi--list--item" data-aos="fade-up" data-aos-duration={Props.TestiSpeed}>
        {Props.TestiImg && (
          <div className="test--img">
            <Image
              src={Props.TestiImg}
              alt="user pic"
              layout="fill"
              quality={100}
            />
          </div>
        )}
        <div className="test--content">
          {Props.TestiText && <p>{Props.TestiText}</p>}
          {Props.TestiReview && (
            <div className="review--stars">
              <span>
                <Image
                  src={Props.TestiStar1}
                  alt="star"
                  layout="responsive"
                  width={14}
                  height={13.2}
                />
              </span>
              <span>
                <Image
                  src={Props.TestiStar2}
                  alt="star"
                  layout="responsive"
                  width={14}
                  height={13.2}
                />
              </span>
              <span>
                <Image
                  src={Props.TestiStar3}
                  alt="star"
                  layout="responsive"
                  width={14}
                  height={13.2}
                />
              </span>
              <span>
                <Image
                  src={Props.TestiStar4}
                  alt="star"
                  layout="responsive"
                  width={14}
                  height={13.2}
                />
              </span>
              <span>
                <Image
                  src={Props.TestiStar5}
                  alt="star"
                  layout="responsive"
                  width={14}
                  height={13.2}
                />
              </span>
            </div>
          )}
          {Props.TestiUserName && (
            <div className="user--name">
              <p>{Props.TestiUserName}</p>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
