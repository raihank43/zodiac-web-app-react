export default function convertDateToYear(date: Date) {
  console.log(new Date().getFullYear() - date.getFullYear());
  return new Date().getFullYear() - date.getFullYear();
}
