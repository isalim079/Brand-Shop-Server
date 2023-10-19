import { useLoaderData } from "react-router-dom";


const AddToCart = () => {
    const cartProducts = useLoaderData();
    console.log(cartProducts);

    

    return (
        <div>
            <div className="font-poppins">
                <div className="overflow-hidden max-w-screen-xl mx-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product type</th>
                            <th>Brand</th>
                            <th>Rating</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                    cartProducts.map((cartProduct, index) => <>
                    
                    <tr>
                            <th>{index + 1}</th>
                            <td>{cartProduct.name}</td>
                            <td>{cartProduct.productType}</td>
                            <td className="uppercase">{cartProduct.brand}</td>
                            <td>{cartProduct.rating}</td>
                            <td className="font-semibold">${cartProduct.price}</td>
                        </tr>
                    
                    </>)
                }
                       
                    </tbody>
                </table>
            </div>
            </div>
            <div>
              
            </div>
        </div>
    );
};

export default AddToCart;
