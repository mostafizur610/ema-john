import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products data
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // console.log(products);

    // get cart 
    const saveCart = getStoredCart();
    const initialCart = [];
    // console.log(products);
    for (const id in saveCart) {
        // console.log(id);
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct);
        if (addedProduct) {
            const quantity = saveCart[id];
            // console.log(id, quantity);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}