import React from 'react'

function ProductDetail() {
    return (
        <div className="stuff">
           <section>
               <div className="container">
                   

                <div className="shop-detail">
                    <div className="row">
                        
                        {/* Popular Images Slider */}
                        <div className="col-md-7">
                            <div class="images-slider">
                                <ul class="slides">
                                    <li style={{display: 'block'}} data-thumb="images/large-img-1.jpg"> <img class="img-responsive" src="images/large-img-1.jpg"  alt=""/> </li>
                                    <li data-thumb="images/large-img-2.jpg"> <img class="img-responsive" src="images/large-img-2.jpg"  alt=""/> </li>
                                    <li data-thumb="images/large-img-3.jpg"> <img class="img-responsive" src="images/large-img-3.jpg"  alt=""/> </li>
                                </ul>
                                <div className="featured">
                                    <span className="featured-Item"><img class="img-responsive" src="images/large-img-2.jpg"  alt=""/></span>
                                    <span className="featured-Item"><img class="img-responsive" src="images/large-img-2.jpg"  alt=""/></span>
                                    <span className="featured-Item"><img class="img-responsive" src="images/large-img-2.jpg"  alt=""/></span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-md-5">
                            hey
                        </div>
                    </div>
                </div>


               </div>
           </section>
        </div>
    )
}

export default ProductDetail
