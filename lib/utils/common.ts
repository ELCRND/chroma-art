export function bodyScrollOff() {
  document.body.style.marginRight = "11px";
  document.body.style.overflow = "hidden";
}
export function bodyScrollOn() {
  document.body.style.marginRight = "0";
  document.body.style.overflow = "visible";
}

export const getDateAdded = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("ru-RU", options).format(date);
};
