import axios from 'axios'

export const getProductoMaximo = async ()=>{

    const response = await axios.get('http://localhost:5000/suma-valor-tipoProducto');
    return response.data

}

export const getPrecio_MayorProducto = async ()=>{

    const response = await axios.get('http://localhost:5000/valor-productos-alto');
    return response.data

}

export const getPromedio_TipoMoneda = async ()=>{

    const response = await axios.get(`http://localhost:5000/promedio-tipoMoneda`);
    return response.data

}
