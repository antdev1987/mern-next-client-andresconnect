import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Moment from "moment";
import { extendMoment } from "moment-range";

const CalenderPick = () => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [focusedInput, setFocusedInput] = React.useState();

  const moment = extendMoment(Moment);

  const BAD_DATES = [
    moment.range(
      moment("2023-07-15", "YYYY-MM-DD"),
      moment("2023-07-17", "YYYY-MM-DD")
    ),
    moment.range(
      moment("2023-08-10", "YYYY-MM-DD"),
      moment("2023-08-20", "YYYY-MM-DD")
    ),
  ];

  const isDayBlocked = (day) => {
    const today = moment().startOf("day");
    if (day.isBefore(today)) {
      return true; // Block past dates
    }
    for (const range of BAD_DATES) {
      if (day.isBetween(range.start, range.end, "day", "[]")) {
        return true;
      }
    }
    return false;
  };

  const isEndDateDisabled = (day) => {
    if (startDate) {
      const rangeToCheck = moment.range(startDate, day);
      for (const range of BAD_DATES) {
        if (range.overlaps(rangeToCheck)) {
          return true;
        }
      }
    }
    return false;
  };


  

  return (
    <>
      <DateRangePicker
        startDate={startDate}
        isDayBlocked={isDayBlocked}
        startDateId="start-date"
        endDate={endDate}
        endDateId="end-date"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        showClearDates={true}
  
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        isOutsideRange={isEndDateDisabled}
      />
    </>
  );
};

export default CalenderPick;










//en calencadio esta el bloqueo
// import React, { useState } from "react";
// import "react-dates/initialize";
// import { DateRangePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
// import Moment from "moment";
// import { extendMoment } from "moment-range";

// const CalenderPick = () => {
//   const [startDate, setStartDate] = React.useState();
//   const [endDate, setEndDate] = React.useState();
//   const [focusedInput, setFocusedInput] = React.useState();

//   const moment = extendMoment(Moment);



//   const BAD_DATES = [
//     moment.range(
//       moment("2023-07-15", "YYYY-MM-DD"),
//       moment("2023-07-17", "YYYY-MM-DD")
//     ),

//     moment.range(
//       moment("2023-08-10", "YYYY-MM-DD"),
//       moment("2023-08-20", "YYYY-MM-DD")
//     ),
//   ];

//   const isDayBlocked = (day) => {
//     for (const range of BAD_DATES) {
//       if (day.isBetween(range.start, range.end, "day", "[]")) {
//         return true;
//       }
//     }
//     return false;
//   };

//   const isEndDateDisabled = (day) => {
//     if (startDate) {
//       const rangeToCheck = moment.range(startDate, day);
//       for (const range of BAD_DATES) {
//         if (range.overlaps(rangeToCheck)) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };


//   return (
//     <>
//       <DateRangePicker
//         startDate={startDate}
//         isDayBlocked={isDayBlocked}
//         startDateId="start-date"
//         endDate={endDate}
//         endDateId="end-date"
//         onDatesChange={({ startDate, endDate }) => {
//           setStartDate(startDate);
//           setEndDate(endDate);
//         }}
//         focusedInput={focusedInput}
//         onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
//         isOutsideRange={isEndDateDisabled}
//       />
     
//     </>
//   );
// };

// export default CalenderPick;






//con boton esta el bloqueo
// import React, { useState } from "react";
// import "react-dates/initialize";
// import { DateRangePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
// import Moment from "moment";
// import { extendMoment } from "moment-range";

// const CalenderPick = () => {
//   const [startDate, setStartDate] = React.useState();
//   const [endDate, setEndDate] = React.useState();
//   const [focusedInput, setFocusedInput] = React.useState();

//   const moment = extendMoment(Moment);

//   console.log(startDate, endDate);

//   const BAD_DATES = [
//     moment.range(
//       moment("2023-07-15", "YYYY-MM-DD"),
//       moment("2023-07-17", "YYYY-MM-DD")
//     ),

//     moment.range(
//       moment("2023-08-10", "YYYY-MM-DD"),
//       moment("2023-08-20", "YYYY-MM-DD")
//     ),
//   ];

//   const isDayBlocked = (day) => {
//     for (const range of BAD_DATES) {
//       if (day.isBetween(range.start, range.end, "day", "[]")) {
//         return true;
//       }
//     }
//     return false;
//   };

//   const handleClick = () => {
//     if (startDate && endDate) {
//       const rangeToCheck = moment.range(startDate, endDate);
//       for (const range of BAD_DATES) {
//         if (range.overlaps(rangeToCheck)) {
//           console.log("Fechas bloqueadas seleccionadas.");
//           alert("fecha bloqueda");
//           return;
//         }
//       }
//     } else {
//         console.log("Seleccione ambas fechas.");
//     }

//     alert("exito en la seleccion");
//     console.log(startDate._d);
//     console.log(endDate._d);
//   };

//   return (
//     <>
//       <DateRangePicker
//         startDate={startDate}
//         isDayBlocked={isDayBlocked}
//         startDateId="start-date"
//         endDate={endDate}
//         endDateId="end-date"
//         onDatesChange={({ startDate, endDate }) => {
//           setStartDate(startDate);
//           setEndDate(endDate);
//         }}
//         focusedInput={focusedInput}
//         onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
//       />
//       <button onClick={handleClick}>mostrar</button>
//     </>
//   );
// };

// export default CalenderPick;
