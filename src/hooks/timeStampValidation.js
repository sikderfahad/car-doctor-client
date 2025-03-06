const formateDateTime = (timestamp) => {
  const date = new Date(Number(timestamp));
  return date.toLocaleString();
};

const getTimeAgo = (timestamp) => {
  const timeDifference = Date.now() - Number(timestamp);

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    const remainingMonths = months % 12;
    return remainingMonths > 0
      ? `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${
          remainingMonths > 1 ? "s" : ""
        } ago`
      : `${years} year${years > 1 ? "s" : ""} ago`;
  }

  if (months > 0) {
    const remainingDays = days % 30;
    return remainingDays > 0
      ? `${months} month${months > 1 ? "s" : ""} ${remainingDays} day${
          remainingDays > 1 ? "s" : ""
        } ago`
      : `${months} month${months > 1 ? "s" : ""} ago`;
  }

  if (days > 0) {
    const remainingHours = hours % 24;
    return remainingHours > 0
      ? `${days} day${days > 1 ? "s" : ""} ${remainingHours} hour${
          remainingHours > 1 ? "s" : ""
        } ago`
      : `${days} day${days > 1 ? "s" : ""} ago`;
  }

  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0
      ? `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} minute${
          remainingMinutes > 1 ? "s" : ""
        } ago`
      : `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  return "Just now";
};

export { formateDateTime, getTimeAgo };
