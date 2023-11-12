import { useState, useEffect } from "react"
import { SelectProvince, SelectRegency, SelectDistrict } from "../components/select"

interface Province {
    id: number
    name: string
}
interface Regency {
    id: number
    name: string
    provinceId: number
}
interface District {
    id: number
    name: string
    regencyId: number
}

export default function Emsifa() {
    const [dataProvince, setProvince] = useState<Province[] | null>([])
    const [dataRegency, setRegency] = useState<Regency[] | null>([])
    const [dataDistrict, setDistrict] = useState<District[] | null>([])
    let [idProvince, setIdProvince] = useState<number>(0)
    let [idRegency, setIdRegency] = useState<number>(0)

    useEffect(() => {
        fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
        .then(res => res.json())
        .then(res => {
          setProvince(res)
        })
        .catch(res => console.log(res))
      }, [])
      useEffect(() => {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${idProvince}.json`)
        .then(res => res.json())
        .then(res => {
          setRegency(res)
        })
        .catch(res => console.log(res))
      }, [idProvince])
      useEffect(() => {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${idRegency}.json`)
        .then(res => res.json())
        .then(res => {
          setDistrict(res)
        })
        .catch(res => console.log(res))
      }, [idRegency])

      function handleIdProvince(event: any) {
        setIdProvince(idProvince = event.target.value)
        alert(`Id Province: ${idProvince}`)
      }
      function handleIdRegency(event: any) {
        setIdRegency(idRegency = event.target.value)
        alert(`Id Regency: ${idRegency}`)
      }

    return (
        <>
            <div className="container" style={{padding: "60px 250px"}}>
                <h3 className="text-muted">API STATIS</h3>
                <h2 className="mt-0 mb-5 text-info">DATA WILAYAH INDONESIA</h2>
                <div className="card border-light mb-3" style={{width: "100%"}}>
                    <div className="card-header">EMSIFA</div>
                    <div className="card-body">
                        <p>Pilih Provinsi</p>
                        <select className="form-select" aria-label="Default select example" onChange={handleIdProvince}>
                            <option selected>Open this select menu</option>
                            { dataProvince?.map((dataProvince: any, index: any) => ( 
                                <SelectProvince id={dataProvince.id} name={dataProvince.name} key={index}/>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="card border-light mb-3" style={{width: "100%"}}>
                    <div className="card-header">EMSIFA</div>
                    <div className="card-body">
                        <p>Pilih Kabupaten/Kota</p>
                        <select className="form-select" aria-label="Default select example" onChange={handleIdRegency}>
                            <option selected>Open this select menu</option>
                            { dataRegency?.map((dataRegency: any, index: any) => ( 
                                <SelectRegency id={dataRegency.id} name={dataRegency.name} provinceId={dataRegency.province_id} key={index}/>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="card border-light mb-3" style={{width: "100%"}}>
                    <div className="card-header">EMSIFA</div>
                    <div className="card-body">
                        <p>Pilih Kecamatan</p>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            { dataDistrict?.map((dataDistrict: any, index: any) => ( 
                                <SelectDistrict id={dataDistrict.id} name={dataDistrict.name} regencyId={dataDistrict.regency_id} key={index}/>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}