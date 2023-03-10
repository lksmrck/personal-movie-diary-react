export const adjustFormatOfDateWatched = (dateWatched) => {
  const date = new Date(dateWatched);
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const adjustedDate = day + "-" + month + "-" + year;

  return adjustedDate;
};
