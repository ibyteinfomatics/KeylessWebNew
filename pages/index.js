import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '../Components/Header/Header'
import Infographic from '../Components/Infographics/Infographics';
import Feeds from '../Components/Feeds/Feeds';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FeatureLists from '../Components/FeatureLists/FeatureLists';
import Testimonial from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';

export default function Home() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 100)
    Aos.init();
  }, []);

  // useEffect(() => {
    
  // }, []);

  return (
    <React.Fragment>
      {/* Site Header */}
      <Header />

      {/* Site Banner */}
      <div className='section section__banner'>
        <div className='banner__image'>
          {/* <Image src="/images/banner-image.jpg" layout='responsive' width={1920} height={1100} /> */}
          {/* <ReactPlayer url="/images/banner--video.mp4" width={1903} height={1100} /> */}

          <video 
            ref={videoRef}
            width="1903"
            loop
            muted>
              <source src="/images/banner--video.mp4" />
          </video>

        </div>
        <div className='banner__content'>
          <div className='site__width' data-aos="fade-up" data-aos-duration="500">
            <div className='banner__content--width'>
              <div className='title banner__title'>
                <h3>Unlock a</h3>
                <h3 className='type--out'>keyless Life</h3>
              </div>
              <div className='banner__text'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. <br />There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className='store__links'>
                  <Link href="javascript:void(0)">
                    <a><Image src="/images/google-store.png" alt="Google play store" layout='responsive' width={205} height={61} /></a>
                  </Link>
                  <Link href="javascript:void(0)">
                    <a><Image src="/images/apple-store.png" alt="Google play store" layout='responsive' width={205} height={61} /></a>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>          
        </div>
      </div>

      {/* Partner Logos section */}
      <div className='section logo--section'>
        <div className='site__width'>
          <div className='logo--list' data-aos="fade-up" data-aos-duration="500">
            <ul>
              <li>
                <Image src="/images/emaar__logo.png" layout='responsive' width={218} height={43} />
              </li>
              <li>
                <Image src="/images/damac__logo.png" layout='responsive' width={332} height={41} />
              </li>
              <li>
                <Image src="/images/atlantis__logo.png" layout='responsive' width={221} height={94} />
              </li>
              <li>
                <Image src="/images/armani__logo.png" layout='responsive' width={204} height={83} />
              </li>
              <li>
                <Image src="/images/hyatt__logo.png" layout='responsive' width={258} height={140} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className='section section--text text--center'>
        <div className='site__width'>
          <div className='section__content' data-aos="fade-up" data-aos-duration="500">
            <div className='title text--title'>
              <h3>About Us</h3>
            </div>
            <div className='section__text'>
              <p>Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum</p>

              <p>Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.</p>

              <p>Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax no keys */}
      <div className='section text--infographic--section parallax text--center'>
        <div className='site__width'>
          <div className='section__content'>
            <div className='title text--title'>
              <h3>The key to happiness? <span>No keys.</span></h3>
            </div>
            <div className='infographic--list grid__4 main__grid'>
              <Infographic 
                Speed="500"
                infoIcon="/images/msg-icon.svg"
                infoTitle="Trusted By Thousands"
                infoText="Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici"
              />
              <Infographic 
                Speed="1000"
                infoIcon="/images/home-lock-icon.svg"
                infoTitle="Wide Range of Properties"
                infoText="Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici"
              />
              <Infographic 
                Speed="1400"
                infoIcon="/images/financing-icon.svg"
                infoTitle="Financing Made Easy"
                infoText="Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici"
              />
              <Infographic 
                Speed="1600"
                infoIcon="/images/financing-2-icon.svg"
                infoTitle="Financing Made Easy"
                infoText="Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Locks Section */}
      <div className='section section--feed text--center'>
        <div className='site__width'>
          <div className='section__content'>
            <div className='title text--title'>
              <h3>Our Locks</h3>
            </div>
            <div className='section__text'>
              <p>Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle variazioni del tempo, a causa dell’inserimento di passaggi ironici, o di sequenze casuali di caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum</p>
            </div>
          </div>
          <div className='feed--list grid__2 main__grid' data-aos="fade-up" data-aos-duration="1000">
            <Feeds 
              feedImg="/images/lock.png"
              feedTitle="Smart Door Lock Euro Cylinder"
              feedText="The smart door lock Euro cylinder is suitable for most european door lock cylinders. It is free of wiring and drilling and can easily replaces tradition mechanical key operated cylinder."
            />
            <Feeds 
              feedImg="/images/lock.png"
              feedTitle="Smart Door Lock Euro Cylinder"
              feedText="The smart door lock Euro cylinder is suitable for most european door lock cylinders. It is free of wiring and drilling and can easily replaces tradition mechanical key operated cylinder."
            />
          </div>
        </div>
      </div>

      {/* App features section */}
      <div className='section list--section parallax'>
        <div className='site__width'>
          <div className='listing--data'>
            <div className='phone--center--img'>
              <Image src="/images/iphone.png" layout='fill' quality={100} />
            </div>
            <div className='left--list--arr list--arr' data-aos="fade-left" data-aos-duration="500">
              <div className='firstArr list--arr--icon'>
                <Image src="/images/left-arr-1.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='secondArr list--arr--icon'>
                <Image src="/images/left-arr-2.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='thirdArr list--arr--icon'>
                <Image src="/images/left-arr-3.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='fourthArr list--arr--icon'>
                <Image src="/images/left-arr-4.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='fifthArr list--arr--icon'>
                <Image src="/images/left-arr-5.png" layout='fill' quality={100} alt="list--arr" />
              </div>
            </div>
            <div className='right--list--arr list--arr' data-aos="fade-right" data-aos-duration="500">
              <div className='firstArr list--arr--icon'>
                <Image src="/images/right-arr-1.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='secondArr list--arr--icon'>
                <Image src="/images/right-arr-2.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='thirdArr list--arr--icon'>
                <Image src="/images/right-arr-3.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='fourthArr list--arr--icon'>
                <Image src="/images/right-arr-4.png" layout='fill' quality={100} alt="list--arr" />
              </div>
              <div className='fifthArr list--arr--icon'>
                <Image src="/images/right-arr-5.png" layout='fill' quality={100} alt="list--arr" />
              </div>
            </div>
            <div className='left--list--data list--data' data-aos="fade-right" data-aos-duration="500">
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListFade = "fade-right"
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
            </div>
            <div className='right--list--data list--data' data-aos="fade-left" data-aos-duration="500">
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
              <FeatureLists 
                ListImg="/images/msg-icon.svg"
                ListTitle="App Feature"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className='section media--section'>
        <div className='site__width'>
          <div className='media--list'>
            <div className='media--body' data-aos="fade-right" data-aos-duration="500">
              <div className='title media__title'>
                <h3>Turn your smartphone into a smart key</h3>
              </div>
              <div className='media--text'>
                <p>Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.</p>
              </div>
            </div>

            <div className='media--item' data-aos="fade-left" data-aos-duration="500">
              <Image src="/images/media-1.jpg" layout='responsive' width={900} height={590} alt="Media image" />
            </div>
          </div>
        </div>
      </div>

      <div className='section media--section media--alignment--left'>
        <div className='site__width'>
          <div className='media--list'>
            <div className='media--body' data-aos="fade-left" data-aos-duration="500">
              <div className='title media__title'>
                <h3>Carefree living</h3>
              </div>
              <div className='media--text'>
                <p>Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.</p>
              </div>
            </div>

            <div className='media--item' data-aos="fade-right" data-aos-duration="500">
              <Image src="/images/media-2.jpg" layout='responsive' width={900} height={590} alt="Media image" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlight--banner section */}
      <div className='section highlight--banner'>
        <div className='site__width'>
          <div className='banner__content'>
            <div className='title banner__title' data-aos="fade-up" data-aos-duration="500">
              <h3>The key to happiness? <span>No keys.</span></h3>
            </div>
            <div className='banner__text' data-aos="fade-up" data-aos-duration="800">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='store__links' data-aos="fade-up" data-aos-duration="1200">
              <Link href="javascript:void(0)">
                <a><Image src="/images/google-store.png" alt="Google play store" layout='responsive' width={205} height={61} /></a>
              </Link>
              <Link href="javascript:void(0)">
                <a><Image src="/images/apple-store.png" alt="Google play store" layout='responsive' width={205} height={61} /></a>
              </Link>
            </div>
          </div>
          <div className='banner--image' data-aos="fade-left" data-aos-duration="1000">
            <Image src="/images/hand__iphone.png" alt="Iphone image" layout='responsive' width={753} height={666} />
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className='section testimonial--section text--center'>
        <div className='site__width'>
          <div className='section__content'>
            <div className='title text--title'>
              <h3>Testimonial</h3>
            </div>
            <div className='section__text'>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
          </div>
          <div className='tetimonial__lists'>
            <Testimonial 
              TestiSpeed = "500"
              TestiImg = "/images/profile--img.png"
              TestiText = "Morbi quis venenatis nisl, eget iaculis felis. Nam pretium vehicula velit. Sed non enim elit. Suspendisse aliquet."
              TestiReview = "true"
              TestiStar1 = "/images/star--fill.svg"
              TestiStar2 = "/images/star--fill.svg"
              TestiStar3 = "/images/star--fill.svg"
              TestiStar4 = "/images/star.svg"
              TestiStar5 = "/images/star.svg"
              TestiUserName = "Lisa C. Barry"
            />
            
            <Testimonial 
              TestiSpeed = "800"
              TestiImg = "/images/profile--img.png"
              TestiText = "Morbi quis venenatis nisl, eget iaculis felis. Nam pretium vehicula velit. Sed non enim elit. Suspendisse aliquet."
              TestiReview = "true"
              TestiStar1 = "/images/star--fill.svg"
              TestiStar2 = "/images/star--fill.svg"
              TestiStar3 = "/images/star--fill.svg"
              TestiStar4 = "/images/star.svg"
              TestiStar5 = "/images/star.svg"
              TestiUserName = "Lisa C. Barry"
            />
            
            <Testimonial 
              TestiSpeed = "1200"
              TestiImg = "/images/profile--img.png"
              TestiText = "Morbi quis venenatis nisl, eget iaculis felis. Nam pretium vehicula velit. Sed non enim elit. Suspendisse aliquet."
              TestiReview = "true"
              TestiStar1 = "/images/star--fill.svg"
              TestiStar2 = "/images/star--fill.svg"
              TestiStar3 = "/images/star--fill.svg"
              TestiStar4 = "/images/star.svg"
              TestiStar5 = "/images/star.svg"
              TestiUserName = "Lisa C. Barry"
            />
          </div>
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className='section connected--section parallax text--center'>
        <div className='site__width' data-aos="fade-up" data-aos-duration="500">
          <div className='section__content'>
            <div className='title section--title'>
              <h3>Let's stay connected.</h3>
            </div>
            <div className='connected--form'>
              <form>
                <input className='form--control' placeholder='Enter your email' />
                <button className='form--submit' type="submit"></button>
              </form>
              <p className='description'>Stay up to date with our latest news and products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </React.Fragment>
  )
}
