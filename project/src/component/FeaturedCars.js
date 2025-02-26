
function Featuredcars ({cards}){
    return(
        <div class="plantCard">
        <div class="thumbnail">
            <img src={cards.img} alt=""/>
            <p style={{padding:"0px 5px"}}>{cards.p}</p>
        </div>
        <div class="info">
            <h4>{cards.name}</h4>
            <span style={{fontWeight:"500"}}>{cards.price}</span>
            <p>{cards.desc}</p>
        </div>
    </div>
    )
}
export default Featuredcars