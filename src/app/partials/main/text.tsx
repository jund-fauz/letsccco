import insertColor from "@/app/functions/insert-color";

export default function Text({text = '', color = '', size ='', margin = ''}) {
	return <h1 className="font-bold text-center" style={{ color: insertColor(color), margin, fontSize: size }}>{text}</h1>
}
