import React from 'react'
import { Link } from 'react-router-dom' 

function GalleryProduct({ img, price, title, text }) {
    return (
        <div className="col-md-3 col-sm-6">
            <div class="item">
                {/* <!-- Images --> */}
                <Link to="/productDetail"><img class="img-1" src={ img } alt="" /></Link>
                
                {/* <!-- Overlay  --> */}
                <div class="overlay">
                    {/* <!-- Price --> */}
                    <span class="price"><small>$</small>{ price }</span>
                    <div class="position-center-center">
                    <a href="images/item-img-1-1.jpg" data-lighter
                        ><i class="icon-magnifier"></i
                    ></a>
                    </div>
                </div>
                {/* <!-- Item Name --> */}
                <div class="item-name">
                    <a href="#.">{ title }</a>
                    <p>{ text }</p>
                </div>
            </div>
        </div>

    )
}

export default GalleryProduct
