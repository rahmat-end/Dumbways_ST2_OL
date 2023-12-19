// export default function CurrencyConvert() {
//     return(
//         <div className="container">
//             <a href="/" className="mt-5 mb-5 btn btn-outline-primary px-4 py-2">Back</a>
//             <h3 className="text-center mb-4">Currency Converter</h3>
//             <div className='countdown py-3 px-5 border rounded-3 mt-3'>
//                 <p>Lorem ipsum dolor sit amet.</p>
//             </div>
//         </div>
//     )
// }
import { Component } from "react";

class Converter extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR", "INR"],
    base: "USD",
    amount: "",
    convertTo: "INR",
    result: "",
    date: ""
  };

  handleSelect = (e: { target: { name: any; value: any; }; }) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = (e: { target: { value: any; }; }) => {
    this.setState(
      {
        amount: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleSwap = (e: { preventDefault: () => void; }) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount: any = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
            date
          });
        });
    }
  };

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount} {base} is equivelent to
              </h5>
              <h2>
                {result === null ? "Calculating..." : result} {convertTo}
              </h2>
              <p>As of {date}</p>
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10">
                  <form className="form-inline mb-4">
                    <input
                      className="form-control form-control-lg mx-3"
                      value={amount}
                      type="number"
                      onChange={this.handleInput}
                    />
                    <select
                      className="form-control form-control-lg"
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      className="form-control form-control-lg mx-3"
                      disabled={true}
                      value={result === null ? "Calculating..." : result}
                    />
                    <select
                      className="form-control form-control-lg"
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                  <h1 onClick={this.handleSwap} className="swap">
                    &#8595;&#8593;
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
