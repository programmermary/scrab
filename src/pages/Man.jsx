import React from "react"
import {useState , useEffect} from "react"
import axios from "axios"
const Man = () =>{
    const [products , setProducts ] = useState([])
    const HandleGetProducts = async ()=> {
        try{
            const res = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:F7Hzs_kS/products')
            setProducts(res.data)
            console.log(res.data)
        }catch(err){
           console.error("Error fetching products:", err);
        }
    }

    useEffect(()=>{
        HandleGetProducts()
    } , [])
    return (
        <div>
            {
                products
                .filter(prod => prod.gender ==="man")
                .map(prod => (
                    <div key={prod.id}>
                        <h1>{prod.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Man