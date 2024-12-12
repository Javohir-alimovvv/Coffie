import React, { Component } from 'react'
import "./Process.scss"
import axios from "axios"


export default class Process extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        axios
            .get("https://dummyjson.com/products")
            .then(res =>
                this.setState({ data: res.data.products })                
                )
            .catch(err => console.log(err))
            
    }

    render() {
        return (
            <>

                <div className="container">
                    <div className="proccess">
                        {
                            this.state.data?.slice(0, 3)?.map((item) => (
                                <div key={item.id} className='proccess__card'>
                                    <div className='proccess__card__group'>
                                        <p className='proccess__card__group__raqami'>{item.stock}</p>
                                        <p className='proccess__card__group__title'>{item.brand}</p>
                                    </div>
                                    <div className='proccess__card__box'>
                                        <img className='proccess__card__box__img' src={item.thumbnail} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </>
        )
    }
}
