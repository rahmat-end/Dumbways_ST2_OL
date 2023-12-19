import { useState, useEffect } from "react"

export default function CountDuration() {
    let [date, setDate] = useState<Date | null>()
    let getTimeLeft = (date: any) => {
        let totalTimeLeft = +new Date(date) - +new Date();
        let days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
        let seconds = Math.floor((totalTimeLeft / 1000) % 60);
        return { days, hours, minutes, seconds };
    }
    let [timeLeft, setTimeLeft] = useState(() => getTimeLeft(date))
    
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(date));
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [date]);
    function handleDate(event: any) {
        setDate(date = event.target.value)
    }

	return (
        <div className="container">
            <a href="/" className="mt-5 mb-5 btn btn-outline-primary px-4 py-2">Back</a>
            <h3 className="text-center mb-4">Countdown Time</h3>
            <div className='countdown py-3 px-5 border rounded-3 mt-3'>
                <p>Enter the Target Date and Time:</p>
                <input type="datetime-local" className="p-2 me-3" onChange={handleDate}/>
                {/* <button className="btn btn-primary px-5 rounded rounded-4">Start</button> */}
                <p>Countdown:</p>
                <div className='content'>
                    {Object.entries(timeLeft).map((el) => {
                        const label = el[0];
                        const value = el[1];
                        return (
                            <div className='box' key={label}>
                                
                                    <span>{value}</span>
                              
                                <span className='label'> {label} </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
	)
}