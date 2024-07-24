import insertColor from "@/app/functions/insert-color";

export default function HeaderLink({direction = '', color = '', text = '', textColor = ''}) {
    return (
        <div className="text-center" style={{ 
            backgroundColor: insertColor(color),
            
         }}>
            <h1 style={{ color: insertColor(textColor) }}>{text}</h1>
        </div>
    )
}