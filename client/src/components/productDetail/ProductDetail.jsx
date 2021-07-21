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
                                <div className="photos d-flex align-items-center justify-content-center ">
                                     <div className="featured d-flex align-items-center">
                                        <div className="featured-Item"><img class="img-responsive" src="images/large-img-2.jpg"  alt=""/></div>
                                        <div className="featured-Item active"><img class="img-responsive" src="images/large-img-2.jpg"  alt=""/></div>
                                        <div className="featured-Item"><img class="img-responsive" src="images/large-img-2.jpg"  alt=""/></div>
                                    </div>
                                </div>
                               
                            </div>
                            
                            {/* <div class="images-slider">
                                <ul class="slides">
                                    <li
                                    data-thumb="images/large-img-1.jpg"
                                    class="flex-active-slide"
                                    data-thumb-alt=""
                                    style={{
                                        width: '100%',
                                        float: 'left',
                                        marginRight: '-100%',
                                        position: 'relative',
                                        opacity: '1',
                                        display: 'block',
                                        zIndex: '2',
                                    }}
                                    >
                                    <img
                                        class="img-responsive"
                                        src="images/large-img-1.jpg"
                                        alt=""
                                        draggable="false"
                                    />
                                    </li>
                                    <li
                                    data-thumb="images/large-img-2.jpg"
                                    data-thumb-alt=""
                                    style={{
                                        width: '100%',
                                        float: 'left',
                                        marginRight: '-100%',
                                        position: 'relative',
                                        opacity: '0',
                                        display: 'block',
                                        zIndex: '1',
                                    }}
                                    >
                                    <img
                                        class="img-responsive"
                                        src="images/large-img-2.jpg"
                                        alt=""
                                        draggable="false"
                                    />
                                    </li>
                                    <li
                                    data-thumb="images/large-img-3.jpg"
                                    data-thumb-alt=""
                                    style={{
                                        width: '100%',
                                        float: 'left',
                                        marginRight: '-100%',
                                        position: 'relative',
                                        opacity: '0',
                                        display: 'block',
                                        zIndex: '1',
                                    }}
                                    >
                                    <img
                                        class="img-responsive"
                                        src="images/large-img-3.jpg"
                                        alt=""
                                        draggable="false"
                                    />
                                    </li>
                                </ul>
                                <ol class="flex-control-nav flex-control-thumbs">
                                    <li>
                                        <img src="images/large-img-1.jpg" class="flex-active" draggable="false" />
                                    </li>
                                    <li><img src="images/large-img-2.jpg" draggable="false" /></li>
                                    <li><img src="images/large-img-3.jpg" draggable="false" /></li>
                                </ol>

                                <ul class="flex-direction-nav">
                                    <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
                                    <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
                                </ul>
                                
                            </div>
                         */}
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
