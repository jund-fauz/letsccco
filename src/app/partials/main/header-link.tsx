import insertColor from '@/app/functions/insert-color'
import fontSize from '@/app/functions/font-size'
import Text from '@/app/partials/main/text'

export default function HeaderLink({
	direction = 'center',
	color = '',
	texts = [''],
    textColor = '',
    textBold = true
}) {
	let br: string,
		radius = '32px',
		centerStyle = {},
		textSize: string,
        className = texts.length > 1 ? 'flex justify-evenly items-center' : ''
	if (direction === 'left') {
		br = `0 0 0 ${radius}`
        textSize = fontSize('3vw', '1.7em')
	} else if (direction === 'right') {
		br = `0 0 ${radius} 0`
        textSize = fontSize('3vw', '1.7em')
    } else if (direction === 'down') {
        textSize = fontSize('2.5vw', '1.5em', '.5em')
        br = `${radius} ${radius} 0 0`
    } else {
        // TODO: On-Hover Mengisor Animation
        br = `0 0 ${radius} ${radius}`
        textSize = fontSize('3.3vw')
		centerStyle = {
			width: '28vw',
			zIndex: 1,
			left: '-4vw',
			position: 'relative',
			minHeight: '52px',
		}
    }
	return (
		<div
			className={className}
			style={{
				backgroundColor: insertColor(color),
				alignContent: 'center',
				height: '8vw',
				borderRadius: br,
				maxHeight: '70px',
				...centerStyle,
			}}
        >
            {texts.map((text, key) => <Text key={key} size={textSize} text={text} color={insertColor(textColor)} bold={textBold} />)}
		</div>
	)
}
