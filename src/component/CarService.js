function CarService ({CarServiceCard}){
    return(
        <div class="serviceCard">
        <div class="thumbnail">
            <img src={CarServiceCard?.img} alt=""/>
        </div>
        <div class="info">
            <div className="header" style={{fontWeight:"600",marginBottom:'15px'}}>{CarServiceCard?.name}</div>
            <p style={{color:"grey"}}>{CarServiceCard?.desc}</p>
            <span className='bttm-line'></span>
        </div>
    </div>
    )
}
export default CarService