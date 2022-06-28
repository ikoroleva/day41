import { useState } from "react";
import { Detailed } from "./Detailed";

export const Day = (props) => {

    const {
        day,
        min,
        max,
        img,
        wind,
        humidity,
        percipitation
    } = props.dayData;

    const buttonHandler = () => {

        props.setSelectedDay(day);
        props.setSelectedDayDetail(props.dayData);

    }

    return (
        <div className="day">
            <div className="day_title"><h3>{day}</h3></div>
            <div className="day_body">
                <div className="day_temp">
                    <span className="day_temp_min">min: {min}</span>
                    <span className="day_temp_max">max: {max}</span>
                </div>
                <div className="day_img">
                    <img src={"img/" + img} alt="" />
                </div>
                <button onClick={buttonHandler}>Detail</button>
                {day === props.selectedDay
                    ? <Detailed wind={wind} humidity={humidity} percipitation={percipitation} />
                    : <div />
                }


            </div>
        </div >
    )
}