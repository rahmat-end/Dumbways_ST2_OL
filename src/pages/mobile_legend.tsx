import { useState, useEffect } from "react"
import CardMl from "../components/card_ml"

interface Hero {
    hero_name: string
    hero_role: string
    hero_specially: string
}

export default function MobileLegend() {
    const [dataHero, setHero] = useState<Hero[] | null>([])
    
    useEffect(() => {
        fetch('https://api.dazelpro.com/mobile-legends/hero')
        .then(res => res.json())
        .then(res => {
          setHero(res)
        })
        .catch(res => console.log(res))
      }, [])

    return(
        <div className="container">
            <a href="/" className="mt-5 mb-5 btn btn-outline-primary px-4 py-2">Back</a>
            <h3 className="text-center mb-4">Featuring Mobile Legend Heroes</h3>
            <h2>Daftar Hero</h2>
            <div className="search-form">
                <input type="text" placeholder="Cari Hero berdasarkan nama atau peran" />
                <button type="submit" style={{marginLeft: "15px"}} className="btn btn-primary">Reset</button>
            </div>
            <div id="heroes" className="mt-3">
                { dataHero?.map((dataHero: any, index: any) => (
                    // <CardMl hero_name={dataHero[4].hero_name} hero_role={dataHero[4].hero_role} hero_specially={dataHero[4].hero_specially} hero_id={dataHero[4].hero_id} key={index}/>
                    <p>{dataHero.hero[index].hero_name}</p>
                ))}
            </div>
        </div>
    )
}