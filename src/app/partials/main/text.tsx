import insertColor from "@/app/functions/insert-color";

export default function Text({text = '', color = '', size ='', margin = '', bold = true}) {
	return <h1 className={`${bold ? 'font-bold' : 'font-extralight'} text-center`} style={{ color: insertColor(color), margin, fontSize: size }}>{text}</h1>
}
