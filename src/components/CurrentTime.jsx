import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time , setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date());
    },1000);

    return ()=>{
      clearInterval(intervalId);
    }
  },[])

  return (
    <>
      <p className="current-time">
        <span>Current Time is: {time.toLocaleTimeString()}</span>
        <br />
        <span>Today Date is: {time.toLocaleDateString()}</span>
      </p>
    </>
  );
}
export default CurrentTime;
