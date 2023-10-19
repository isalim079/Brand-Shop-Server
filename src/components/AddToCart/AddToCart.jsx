import { useLoaderData } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";

import Swal from "sweetalert2";

const AddToCart = () => {
    const cartProducts = useLoaderData();
    // console.log(cartProducts);

    const [products, setProducts] = useState(cartProducts)

    const handleDelete = id => {
        // console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then(result => {
            if(result.isConfirmed) {

                fetch(`http://localhost:4001/brandShopCarts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your coffee has been deleted.',
                            'success'
                          )
                          const remaining = cartProducts.filter(cartProduct => cartProduct._id !== id)
                          setProducts(remaining)
                    }
                    
                })
            }
          })

    }



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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {products.map((cartProduct, index) => (
                                <>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{cartProduct.name}</td>
                                        <td>{cartProduct.productType}</td>
                                        <td className="uppercase">
                                            {cartProduct.brand}
                                        </td>
                                        <td>{cartProduct.rating}</td>
                                        <td className="font-semibold">
                                            ${cartProduct.price}
                                        </td>
                                        <td
                                            
                                            className="text-2xl"
                                        >
                                            <button onClick={() => handleDelete(cartProduct._id)}><AiTwotoneDelete></AiTwotoneDelete></button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
