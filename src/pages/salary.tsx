import { useState } from "react"
import CurrencyFormat from 'react-currency-format'

export default function Salary() {
    let [gajiPokok, setGajiPokok] = useState<number>(0)
    let [tunjangan, setTunjangan] = useState<number>(0)
    let [kewajibanPokok, setKeajibanPokok] = useState<number>(0)
    // let [hitungGaji, setHitungGaji] = useState<number>(gajiPokok + tunjangan - kewajibanPokok)

    function handleGajiPokok(event: any) {
        setGajiPokok(gajiPokok = event.target.value)
    }
    function handleTunjangan(event: any) {
        setTunjangan(tunjangan = event.target.value)
    }
    function handleKewajibanPokok(event: any) {
        setKeajibanPokok(kewajibanPokok = event.target.value)
    }
    // function handleHitungGaji() {
    //     setHitungGaji(hitungGaji = Number(gajiPokok + tunjangan - kewajibanPokok))
    // }

    return(
        <div className="container">
            <a href="/" className="mt-5 mb-5 btn btn-outline-primary px-4 py-2">Back</a>
            <h3 className="text-center mb-4">Kalkulator Gaji</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label">Gaji Pokok</label>
                        <input type="number" className="form-control" onChange={handleGajiPokok}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tunjangan</label>
                        <input type="number" className="form-control" onChange={handleTunjangan}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Kewajiban Pokok</label>
                        <input type="number" className="form-control" onChange={handleKewajibanPokok}/>
                    </div>
                    {/* <button type="submit" className="btn btn-primary" onClick={handleHitungGaji}>Hitung Gaji</button> */}
                </div>
                <div className="col-md-8">
                    <h3>Hasil :</h3>
                    <p>Gaji Kotor : <CurrencyFormat thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} value={Number(gajiPokok)+Number(tunjangan)} displayType={'text'} /></p>
                    <p>Gaji Pokok : <CurrencyFormat thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} value={gajiPokok} displayType={'text'} /></p>
                    <p>Gaji Bersih : <CurrencyFormat thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} value={Number(gajiPokok)+Number(tunjangan)-Number(kewajibanPokok)} displayType={'text'} /></p>
                </div>
            </div>
        </div>
    )
}