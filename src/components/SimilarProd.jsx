import React, { Component, lazy, Suspense } from 'react';
import { data } from "../services/data";
const Card = lazy(() => import('./Card'));

class SimilarProd extends Component {
    state = {  } 
    render() { 
        return (
            <section className='container'>
                <div className='similar'>
                    <h1 className='title'>Similar Products</h1>
                    <p className='text'>You may like these products also</p>
                    <Suspense fallback={<div>Loading.....</div>}>
                        <div className='cards'>
                            {
                                data[0].similarProducts.map(el => {
                                    return <Card prod={el}/>
                                })
                            }
                        </div>
                    </Suspense>
                    <div className='bord'><div className='line'></div></div>
                </div>
            </section>
        );
    }
}
 
export default SimilarProd;