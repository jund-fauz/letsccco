export default function insertColor(color: string) {
   return color.startsWith('#') ? color : `#${color}`
}