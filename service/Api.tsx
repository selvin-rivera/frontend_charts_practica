import axios from 'axios'

export const getProductoMaximo = async ()=>{

    const response = await axios.get('http://localhost:5000/suma-valor-tipoProducto');
    return response.data

}

export const getPrecio_MayorProducto = async ()=>{

    const response = await axios.get('http://localhost:5000/valor-productos-alto');
    return response.data

}

export const getDeptos = async ()=>{

    const response = await axios.get(`http://localhost:5000/departamentos`);
    return response.data

}

export const getSalarioMaximo = async (departmentId:number)=>{

    const response = await axios.get(`http://localhost:5000/maximo-salario-departamento/${departmentId}`);
    return response.data

}