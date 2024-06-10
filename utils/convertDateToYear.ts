export default function convertDateToYear(date: Date) {
  return new Date().getFullYear() - date.getFullYear();
}
