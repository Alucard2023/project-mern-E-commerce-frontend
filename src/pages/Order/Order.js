import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderCard from '../../Component/OrderCard/OrderCard'
import { getOrders } from '../../Js/Actions/order'
import './Order.css'; // Importez le fichier CSS ici


const Order = () => {
    const dispatch =  useDispatch()
    const listOrders= useSelector((state) => state.orderReducer.listOrder)

    useEffect(() => {
        dispatch(getOrders())
      }, [dispatch])

  return (
    <div>
        <h1 className='Produit'>ORDERS</h1>
        <div className='listMessages'>
        {listOrders.map((el)=> <OrderCard newOrders={el} key={el.id}/>)}
        </div>
    </div>
  )
}

export default Order