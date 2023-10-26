import { useEffect, useState } from "react";
import { RegularInput } from "../styles/generalStyles";

function ActualDateTime() {
  // Function to format a date as "DD/MM/YYYY - HH:MM"
  function formatDateTime(date: Date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }

  const [currentDateTime, setCurrentDateTime] = useState(
    formatDateTime(new Date()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()));
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {" "}
      <label>Data e Hora da Venda</label>
      <RegularInput
        type="text"
        // onChange={handleChange}
        value={currentDateTime}
        required
      />
    </>
  );
}

export default ActualDateTime;
