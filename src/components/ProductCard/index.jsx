import "./index.css";
export function ProductCard(props) {
    const {img, category, name, price} = props.data;
    return (
        <div classNamw="product-card">
            <img width={200} src={img}/>
            <div>{category}</div>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    )
}