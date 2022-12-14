let Product = ({img, title, price })=>{
    return(
        <div style={{backgroundColor:"blue"}}>
            <img src={img} alt="jacket"/>
            <p style={{fontSize:"65px"}}>{title}</p>
            <p style={{fontSize:"65px"}}>{price}</p>
            
        </div>
    )
}

export default Product;