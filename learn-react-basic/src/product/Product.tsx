import type {ReactElement} from "react";

export interface ProductType {
    id: string;
    name: string;
    price: number;
}

interface ProductProps {
    product: ProductType;
}

export default function Product({product}: ProductProps): ReactElement {
    return (
        <div>
            <h2>{product.id} : {product.name}</h2>
            <p>Price: {product.price}</p>
        </div>
    )
}