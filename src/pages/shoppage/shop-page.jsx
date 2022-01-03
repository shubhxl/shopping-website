import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Preview from '../../components/preview-collection/preview';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }   
    }
    
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
              {
                collections.map(({id, ...otherProps}) => {
                 return <Preview key={id} {...otherProps} />
                })
              }
            </div>
        )
    }
}
