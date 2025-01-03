import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import DetalleProducto from "../detalleProductos/DetalleProducto";

const VerProductos = () =>{

    const {id}= useParams();
    
    const [producto, setProducto] = useState({})
    
    console.log("inicial",id);    

    useEffect(() => {
        const fetchback = async () => {
          const response = await fetch( `http://localhost:3000/productos/${id}`);
          const data = await response.json();
          setProducto(...data.data)    
          }
    
        fetchback()
      },[])
    
  
    return(
        <>
                  <DetalleProducto prod={producto}/>
        </>
    )
}

export default VerProductos;