import React from 'react'
import "./History.scss"
import image from "../../assets/images/coffeone.png"
import imagetwo from "../../assets/images/coffetwo.png"
import imagetheree from "../../assets/images/coffetheree.png"



const History = () => {
    return (
        <>

            <div className="container">
                <div className="history">
                    <div className='history__left__content'>
                        <div className='history__left__content__group'>
                            <div className='history__left__content__group__box'>
                                <img className='history__left__content__group__box__img' src={imagetheree} alt="" />
                            </div>
                            <div className='history__left__content__group__box'>
                                <img className='history__left__content__group__box__img' src={imagetwo} alt="" />
                            </div>
                        </div>
                        <div className='history__left__content__box'>
                            <img className='history__left__content__box' src={image} alt="" />
                        </div>
                    </div>
                    <div className='history__right__content'>
                        <h3 className='history__right__content__title'>Our history</h3>
                        <h2 className='history__right__content__descreption'>
                            Create a
                            new story with us</h2>
                        <p className='history__right__content__text'>
                            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
                            atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default History