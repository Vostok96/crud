import './App.css';
import ProductsForm from './components/ProductsForm';
import ProductsList from './components/ProductsList';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [products, setProducts] = useState()

  const [productUpdate, setProductUpdate] = useState(null);
  useEffect(()=>{
    getDataProducts()
  }, [])

  const getDataProducts = () => {
    axios
      .get('https://products-crud.academlo.tech/products/')
      .then(resp=>setProducts(resp.data))
      .catch(error=>console.error(error))
  }

  const addProduct = productData => {
    axios
      .post('https://products-crud.academlo.tech/products/', productData)
      .then(resp => getDataProducts())
      .catch(error => console.error(error))
  };

  const deleteProduct = idProduct => {
   
    axios
      .delete(`https://products-crud.academlo.tech/products/${idProduct}/`)
      .then(() => getDataProducts())
      .catch(error => console.error(error))   
  };

  const selectProduct = (productData) => {
    setProductUpdate(productData);
  }

  const productActualization = (productData) => {
    axios .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
    .then(() => {
      getDataProducts();
      setProductUpdate(null)
    })
    .catch(error => console.error(error))
  };

  return (
    <div className="App">
      <ProductsForm
        createProduct={(data)=>addProduct(data)}
        selectedProduct={productUpdate}
        updateProduct={(data) => productActualization(data)}  
      />

      <ProductsList
        productsData={products}
        deleteProductAction={id => deleteProduct(id)}
        selectProduct={(data) => selectProduct(data)}
      />
    </div>
  )
}

export default App
