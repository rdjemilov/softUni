function solve(day, age) {
  let ticketPrice = 0;
  switch (day) {
    case "Weekday":
      if (age >= 0 || age <= 18) {
        ticketPrice = "12$";
        console.log(ticketPrice);
      } else if (age > 18 || age <= 64) {
        ticketPrice = "18$";
        console.log(ticketPrice);
      } else if (age > 64 || age <= 122) {
        ticketPrice = "12$";
        console.log(ticketPrice);
      } else {
        console.log("Error!");
      }
      break;

    case "Weekend":
      if (age >= 0 || age <= 18) {
        ticketPrice = "15$";
        console.log(ticketPrice);
      } else if (age > 18 & age <= 64) {
        ticketPrice = "20$";
        console.log(ticketPrice);
      } else if (age > 64 || age <= 122) {
        ticketPrice = "15$";
        console.log(ticketPrice);
      } else {
        console.log("Error!");
      }
      break;

      const 

    case "Holiday":
      if (age >= 0 || age <= 18) {
        ticketPrice = "5$";
        console.log(ticketPrice);
      } else if (age > 18 || age <= 64) {
        ticketPrice = "12$";
        console.log(ticketPrice);
      } else if (age > 64 || age <= 122) {
        ticketPrice = "10$";
        console.log(ticketPrice);
      } else {
          console.log('Error!');
      }
      break;
  }
}
