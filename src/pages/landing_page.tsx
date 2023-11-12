import { useState, useEffect } from "react"
import Card from "../components/card";
import Navbar from "../components/navbar";
import ComponentWithEffect from "../components/expample_with_useeffect";

interface Product {
  image: string
  title: string
  price: number
  description: string
}

export default function LandingPage() {
  const [data, setData] = useState<Product[] | null>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => {
      setData(res)
      setLoading(false)
    })
    .catch(res => console.log(res))
  }, [])

  return (
    <>
      <Navbar />

      <ComponentWithEffect />

      <div  className="d-flex">
        { loading ? (<h1>Loading ....</h1>) : (
            data?.map((data: any, index: any) => (
              <div key={index}>
                <Card title={data.title} image={data.image} description={data.description} price={data.price} id={data.id}/>
              </div>
            )
          )
        )}
      </div>
    </>
  )
}