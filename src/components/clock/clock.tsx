import { useState,useEffect } from "react";
import styles from './clock.module.css'

function Clock()
{
    const [time, setTime]=useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date())
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }

    },[])

    function formatTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        const meridiem= hours >=12 ? "PM": "AM";
        hours=hours % 12 || 12;
        // return `${hours}:${minutes}:${seconds} ${meridiem}`
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }
    function padZero(digit:number){
        return (digit < 10 ? "0":"") + digit;

    }
    
    return (
        <div className={styles.clockContainer}  >
            <div className={styles.clockCard}>
                <div className={styles.clock}>
                    <h2>Clock</h2>
                    <span>{formatTime()}</span>
                </div>

            </div>
        </div>
    );
}
export default Clock;