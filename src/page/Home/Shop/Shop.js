import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Good from '../Home/Good/Good';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    useEffect( () => {
        fetch('accessory.json')
        .then(res => res.json())
        .then(data => setGoods(data))
    }, [])
    return (
        <div>
            <PageTitle title='Accessory'></PageTitle>
            <h2 className='text-success'>Accesories</h2>
            <div className="row">
            <CardGroup>
                {
                    goods.map(good => <Good
                        key={good.id}
                        good={good}
                    ></Good>)
                }
                </CardGroup>
            </div>
        </div>
    );
};

export default Shop;