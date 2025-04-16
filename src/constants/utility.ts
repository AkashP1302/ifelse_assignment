export const convertDateToFormattedText = (dateString: string): string => {
    // Define the months as an array of strings
    const months: string[] = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Function to get the ordinal suffix (st, nd, rd, th)
    const getOrdinalSuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th'; // For 11th, 12th, 13th, etc.
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    // Create a new Date object from the input string
    const date: Date = new Date(dateString);
  
    // Get the day, month (0-based, so add 1), and year
    const day: number = date.getDate();
    const month: string = months[date.getMonth()]; // Get the month name (text)
    const year: number = date.getFullYear();
  
    // Get the ordinal suffix for the day
    const dayWithSuffix: string = day + getOrdinalSuffix(day);
  
    // Return the formatted date in ddth month, yyyy format
    return `${dayWithSuffix} ${month}, ${year}`;
  };
  