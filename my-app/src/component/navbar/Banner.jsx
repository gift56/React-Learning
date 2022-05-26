import React from 'react';
import bannerStyle from './css/Banner.module.css';
import codingImg from './img/codingbreast.png';

const Banner = () => {
    return (
        <section  className={bannerStyle.bannerSec}>
            <div className={bannerStyle.bannerText}>
                <h2>I love coding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quod, qui, assumenda quae voluptatum inventore est totam amet dolor provident accusantium necessitatibus veniam sit distinctio, cumque quasi neque aperiam porro ea. Incidunt repudiandae nulla explicabo odit atque quibusdam eveniet qui aliquam, quis et vero voluptates odio eaque recusandae quae natus.
                </p>
            </div>
            <div className={bannerStyle.imgsec}>
                <img src={codingImg} alt="coding" />
            </div>
        </section>
    )
}

export default Banner;