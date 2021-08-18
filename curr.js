export default function formatCurrence(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + "";
}
