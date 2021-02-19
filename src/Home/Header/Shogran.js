import React from 'react'

const Body=()=>{
        return(<div>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.ytimg.com/vi/8Oq_BgcRkGs/maxresdefault.jpg" width="1350" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/0/03/Shogran%2CNaran_Valley.jpg" width="1350" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://seepakistantours.com/wp-content/uploads/2019/02/Shogran-valley-scaled.jpg" width="1350" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>)
    
}
export default Body