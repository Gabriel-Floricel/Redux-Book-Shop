import ProductItem from './ProductItem';

const ProductsList = (props) => {
    return (
        <>
            <ul>
                {props.products &&
                props.products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </>
    );
}

export default ProductsList;