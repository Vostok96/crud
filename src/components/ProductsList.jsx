
const ProductsList = ({ productsData, deleteProductAction, selectProduct }) => {
    const confirmDeleteProduct = (id) => {
        const resultConfirmProduct = confirm('Desea elminar el producto?')
        if(resultConfirmProduct){
            deleteProductAction(id)
        }
    }
    return (
        <div>
            <ul>               
                {
                    productsData?.map( product => (
                    <li key={ product.id }>
                        <h4><span>Nombre del producto:</span> {product.name} </h4>
                        <h4><span>Categoria:</span> {product.category} </h4>
                        <h4><span>Precio:</span> {product.price} </h4>
                        <h4><span>Disponible:</span> {product.isAvailable? 'Disponible':'No disponible'} </h4>
    
                        <button onClick={ () => confirmDeleteProduct( product.id ) }>Eliminar</button>
                        <button onClick={ () => selectProduct( product ) } >Editar</button>
                    </li>
                    ))
                }                
            </ul>
        </div>
    );
};

export default ProductsList;