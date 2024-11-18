import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-md">
      <div className="text-3xl font-semibold text-gray-800">
        {time.toLocaleTimeString()}
      </div>
      <div className="text-sm text-gray-600">{time.toLocaleDateString()}</div>
    </div>
  );
};

export default Clock;
