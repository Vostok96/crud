import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'

const ProductsForm = ({createProduct, selectedProduct, updateProduct}) => {
    
    const {register, handleSubmit, formState: { errors }, reset} = useForm()

    useEffect(()=>{
        if(selectedProduct){
            reset(selectedProduct)
        }else{
            emptyForm()
        }
    },[selectedProduct]);

    const submit = data => {
        if(selectedProduct){
            updateProduct(data)
        }else{
        createProduct(data)
        emptyForm()
        }
    }

    const fillForm = () => {
        reset( 
            {
                name: "Headphone",
                category: "Technolody",
                price: "100",
                isAvailable: false,
            }
        )
    }
    
    const emptyForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: "",
                isAvailable: false,
            }
        )
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h1>NUEVO PRODUCTO</h1>
                    <div>
                        <label htmlFor="name">Nombre del producto</label><br />
                        <input 
                        type="text"
                        name='name'
                        id='name'
                        placeholder='Ingresa el producto'
                        required
                        {...register('name')} 
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Categoria</label><br />
                        <input 
                        type="text"
                        name='category'
                        id='category'
                        placeholder='Ingresa la categoria'
                        required
                        {...register('category')}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Precio</label><br />
                        <input 
                        type="text"
                        name='price'
                        id='price'
                        placeholder='Ingresa el precio'
                        required 
                        {...register('price')}
                        />
                    </div>
                    <div>
                        <label htmlFor="isAvailable">Disponibilidad</label><br />
                        <input 
                        type="checkbox"
                        name='isAvailable'
                        id='isAvailable'
                        required 
                        {...register('isAvailable')}
                        />
                    </div>
                    <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ProductsForm;