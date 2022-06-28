export function Product({ product }) {
    const { name, img_url: imgUrl } = product;
    return (
        <div className="product">
            <img src={imgUrl} alt="" />
            <div className="name">{name}</div>
        </div>
    )

}