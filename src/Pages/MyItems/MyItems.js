import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../../Firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://tranquil-beyond-66752.herokuapp.com/products?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data);
        }
        getItems()

    }, [user])
    return (
        <div>
            <h1>my items {items.length}</h1>
            {items.map(item =>
                <div className='ms-3'>
                    <h3>{item.name}</h3>
                    <h5>Price:-$ {item.price}</h5>
                    <h5>Quantity:-{item.quantity}</h5>
                    <h5>ID:-{item._id}</h5>
                    <h5>Sold:-{item.sold}</h5>
                    <p>{item.description}</p>
                    <h5>Supplier:-{item.supplierName}</h5>
                </div>
            )}
        </div>
    );
};

export default MyItems;