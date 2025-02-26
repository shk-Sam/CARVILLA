
function Featuredcars ({cards}){
    return(
        <div class="plantCard">
        <div class="thumbnail">
            <img src={cards.img} alt=""/>
            <p style={{fontSize:'smaller', wordSpacing:'2px'}}>{cards.p}</p>
        </div>
        <div class="info">
            <h6 style={{marginTop:'10px'}}>{cards.name}</h6>
            <span style={{fontWeight:"500"}}>{cards.price}</span>
            <p style={{marginTop:'6px'}}>{cards.desc}</p>
        </div>
    </div>
    )
}
export default Featuredcars