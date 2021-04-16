import {Card}from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem( { product }) {
    return (
<Card className="border1">
    <Link to={`/product/${product.id}`}>
        <img 
            style={{width: '100%'}}
            src={product.image}
            alt={product.alt} />
    </Link>
    <div className="p-4">
        <h5 className=" mb-1">
            {product.name}
        </h5>
        <p >
            {product.author}
        </p>
    </div>

</Card>
    );
}