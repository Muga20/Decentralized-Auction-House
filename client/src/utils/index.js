export const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};

export const handleFormFieldChange = (fieldName, e) => {
  if (fieldName === "auctionEndTimeInSeconds") {
    // Get the value of the input field (date and time)
    const selectedDateTime = e.target.value;

    // Create a new Date object with the selected date and time
    const endDate = new Date(selectedDateTime);

    // Get the Unix Timestamp (in milliseconds) from the selected date and time
    const unixTimestamp = endDate.getTime(); // in milliseconds

    // Convert the Unix Timestamp to hexadecimal
    const hexTimestamp = '0x' + unixTimestamp.toString(16); // Convert to hex

    // Update the form state with the hexadecimal Unix Timestamp
    setForm({ ...form, [fieldName]: hexTimestamp });
  } else {
    // For other form fields, update the state normally
    setForm({ ...form, [fieldName]: e.target.value });
  }
};
