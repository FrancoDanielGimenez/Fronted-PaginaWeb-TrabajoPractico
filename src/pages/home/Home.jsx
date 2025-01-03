import Cards from "../../components/Cards";
import { useEffect,useState } from "react";
const backurl = import.meta.env.VITE_BACK_URL

const Home = () =>{

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const fetchback = async () => {
      const response = await fetch( "http://localhost:3000/productos");
      const data = await response.json();
      setProductos(data.data)

   
    }

    fetchback()
  },[])


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
          <h1>Home</h1>
          {productos.map((prod)=>(<Cards prod={prod} key={prod.title} ></Cards>))}
        </div>
      </>
    )
}

export default Home;