import {type ReactElement, useEffect, useState} from "react";
import Product, {type ProductType} from "./Product.tsx";

export default function ProductList(): ReactElement {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState<boolean>(false);

    function handleClick(): void {
        console.info("load products")
        setLoad(true);
    }

    useEffect((): void => {
        console.info("call use effect with []");
    }, []);

    useEffect((): () => void => {
        console.info("call use effect");
        async function fetchProducts(): Promise<void> {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        }

        if (load) {
            fetchProducts();
        }

        return (): void => {
            console.info("unmount product list");
        }
    }, [load]);

    return (
        <>
            <h2>Product List</h2>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product: ProductType): ReactElement => (
                <Product product={product} key={product.id} />
            ))}
        </>
    )
}