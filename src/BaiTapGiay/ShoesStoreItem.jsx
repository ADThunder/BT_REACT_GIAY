import React, { Component } from 'react'

export default class ShoesStoreItem extends Component {
    render() {
        // console.log(this.props)
        const { image, name, price } = this.props.giay
        return (
            <div>
                <div className="card text-start">
                    <img style={{ width: "250", height: "250" }} className="card-img-top" src={image} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price} $</p>
                        <div className="pt-3">
                            <button onClick={() => {
                                this.props.clickXemGiay(this.props.giay)
                            }} className="btn btn-danger">Chi tiết sản phẩm</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

