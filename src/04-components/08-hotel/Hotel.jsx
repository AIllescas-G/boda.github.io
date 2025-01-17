import React, { useEffect, useRef, useState } from 'react'
import { dataBoda } from './dataBoda';



export const Hotel = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                block: "nearest",
                inline: "center",
                alignToTop: false
            });
        }

    }, [currentIndex]);


    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === dataBoda.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (

        <>
            <div id='hotel' className='layout-background container-hotel'>
                <div className="main-container layout-box  ">

                    <h1>Hospedaje</h1>

                    <div className="slider-container">
                        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10148;</div>
                        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10148;</div>
                        <div className="container-images">
                            <ul ref={listRef}>
                                {
                                    dataBoda.map((item) => {
                                        return <li key={item.id}>
                                            <img src={item.imgUrl} width={300} height={280} />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="dots-container">
                            {
                                dataBoda.map((_, idx) => (
                                    <div key={idx}
                                        className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                        onClick={() => goToSlide(idx)}>
                                        &#9865;
                                    </div>))
                            }
                        </div>


                    </div>
                    <h3>Hotel Córdoba Center</h3>
                    <p>
                        Envia un email o llama para reservar haciendo referencia a nuestra boda.
                       <br /> <b>Email:</b> cordoba@hotelescenter.com <br /> <b>Telefono:</b> +34 957 75 80 00</p>
                </div >
            </div>

        </>

    )
}
