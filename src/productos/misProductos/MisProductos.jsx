import CardsModificar from "../../components/CardsModificar";
import { useEffect,useState } from "react";

const MisProductos = () =>{

const backurl = import.meta.env.VITE_BACK_URL
 const [productos, setProductos] = useState([]);
  
 const fetchback = async () => {
  const response = await fetch( `${backurl}productos`);
  const data = await response.json();
  setProductos(data.data)
}

  useEffect(() => {
    fetchback()
  },[])

  const handleDelate = async (id) =>{
    const response = await fetch(`${backurl}productos/${id}`,{
      method:"DELETE",
      headers:{"Content-Type": "application/json"
      },
  });
    const data = await response.json();
    // setProducto(...data.data) 
    console.log(data)   
    fetchback()
}

    return(
        <>
        <div>
          <div>
              <img src="https://fastly.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/Hatp2024.webp" alt="fondo de pantalla" style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}/>
            </div>
            <h1>Mis Productos</h1>
            {productos.map((prod)=>(<CardsModificar prod={prod} key={prod.title} handleDelate={handleDelate} ></CardsModificar>))}
        </div>
        </>
    )
}

export default MisProductos