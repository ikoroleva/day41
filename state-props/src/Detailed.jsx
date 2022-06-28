export function Detailed(props) {
    return (
        <div className="detailed_info">

            <div className="day_wind">Wind: {props.wind}</div>
            <div className="day_humidity">Humidity: {props.humidity}</div>
            <div className="day_percipitation">Percipitation: {props.percipitation}</div>
        </div>
    )

}