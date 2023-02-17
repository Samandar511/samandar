import React from 'react'
import Ochki from '../assets/glasses.png'
import Phone from '../assets/mobile-button.png'
import Share from '../assets/redo.png'
import Down from '../assets/angle-small-down.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Bag from '../assets/bag.png'
import Bag2 from '../assets/bag2.png'
import Mobile from '../assets/mobile.png'
import Mobile2 from '../assets/mobile2.png'
import Mobile3 from '../assets/mobile3.png'
import Mobile4 from '../assets/mobile4.png'
import Screen from '../assets/screen.png'
import Settings from '../assets/settings.png'
import Text from './Text'
import {NavLink} from 'react-router-dom'

const Mobiuz = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img className='img' src="https://mobi.uz/upload/rk/312/x712c7mhrqx4oxdk0yrssgplq87bs2ix/GAP-YOQ-ULTRA-banner-site-uz.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/8e3/x1v3wqhfk2zw3bxhtkp8k3hqjzcrrsj0/Ud-platezh-banner-site-UZ.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/2f5/g4ghrazpbvccdyvzdu14p14p2wvqz3qn/99888-800-banner-site-uz.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/e1a/v2t455ef2lm0x0tjrnsdtj6e5kxe754l/Free%20ND%20banner%20site%20uz.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/190/k96yos7ep0eryjximkhy0sj6kw2ntg3m/5G%20banner%20site%20UZ.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/1fb/bvsx4o3v3jgnkzeng9xeq1hphjba0440/Balls%20for%20APPs%20banner%20uz.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/920/6gy33e5wpg9pzfz1f54li875o0q8etfq/MobiCinema_uz.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/826/APP_uz.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img className='img' src="https://mobi.uz/upload/rk/011/1%20UZ.jpg" onDragStart={handleDragStart} role="presentation" />,
  ];
  return (
    <div>
      <div className="top">
        <div className="img1">
          <img className='top__img' src="https://mobi.uz/local/templates/flat/i/logo.png" alt="" />
        </div>
        <div className="img__content">
          <div className="versiya">
            <img src={Ochki} alt="" />
            <p className='ochki__text'>Версия для слабовидящих</p>
          </div>
          <div className="phone">
            <div>
              <img src={Phone} alt="" />
            </div>
            <div>
              <h5 className="qongiroq">Bizga qo'ng'iroq qiling</h5>
              <h5 className='number'>(+998) 97 130 09 09, 0890</h5>
            </div>
          </div>
          <div className="versiya">
            <img src={Share} alt="" />
            <p className='ochki__text'>Biz bilan bog'laning</p>
          </div>
        </div>
      </div>
      <div className="center__navbar">
        <ul className="center__items">
          <li className="center__item">
            <p className='center__item-text'>Tariflar</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Chegirma va maxsus takliflar</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Daqiqalar va SMS</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Qulay aloqa</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Mobil internet</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Rouming</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Yordam va Xizmat ko'rsatish</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Xabarlar</p>
            <img src={Down} alt="" />
          </li>
          <li className="center__item">
            <p className='center__item-text'>Hukumat aloqasi</p>
          </li>
        </ul>
      </div>
      <div className="carousel">
          <AliceCarousel mouseTracking autoPlay autoPlayInterval={1500} items={items} />
      </div>
      <div className="link">
      <a class="icon-link">
        <img src={Bag} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Internet-to'plamlar</NavLink>
      </a>
      <a class="icon-link">
        <img src={Bag2} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Daqiqalar to'plami</NavLink>
      </a>
      <a class="icon-link">
        <img src={Mobile} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Mobi Music</NavLink>
      </a>
      <a class="icon-link">
        <img src={Screen} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Internet yordamchi</NavLink>
      </a>
      <a class="icon-link">
        <img src={Mobile2} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Chiroyli raqamlar</NavLink>
      </a>
      <a class="icon-link">
        <img src={Mobile3} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Hisob to'ldirish</NavLink>
      </a>
      <a class="icon-link">
        <img src={Mobile4} alt="" />
          <NavLink to={'/text'} class="icon-link__text">To'g'ridan to'g'ri uzatish</NavLink>
      </a>
      <a class="icon-link">
        <img src={Settings} alt="" />
          <NavLink to={'/text'} class="icon-link__text">Mobiuz xizmat ko'rsatish markazi</NavLink>
      </a>
      </div>
    </div>
  )
}

export default Mobiuz