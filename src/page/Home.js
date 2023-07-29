import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

const Home = ({setInfo}) => {
  
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getData = async () => {
      let { data } = await axios('https://fakestoreapi.com/products')
      setProduct(data);
    }
    getData()
  }, [])

  // console.log(product);

  return (
    <><section className='home'>
      <div className='container lg (1024px)'>
        <div className='home__wrapper flex flex-wrap'>
          {
            product.map((product, idx) => (
             <Card desc={product.description} img={product.image} title={product.title} price={product.price} id={product.id} setInfo={setInfo} key={idx}/>
              
            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Home