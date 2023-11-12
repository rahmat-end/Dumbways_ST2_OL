import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/navbar"

interface Product {
  image: string
  title: string
  price: number
  description: string
}

export default function DetailProduct() {
  const { id } = useParams()
  const [data, setData] = useState<Product | null>(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(res => {
      setData(res)
    })
    .catch(res => console.log(res))
  }, [])

  console.log(data);
  

  return (
    <>
      <Navbar />

      <div className="card" style={{width: "18rem"}}>
        <img src={data?.image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{data?.title}</h5>
          <p className="card-text">{data?.price}</p>
          <p className="card-text">{data?.description}</p>
        </div>
      </div>
    </>
  )
}