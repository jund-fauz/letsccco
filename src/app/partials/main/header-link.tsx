import insertColor from '@/app/functions/insert-color'
import fontSize from '@/app/functions/font-size'
import Text from '@/app/partials/main/text'

export default function HeaderLink({
	direction = 'center',
	color = '',
	text = [''],
    textColor = '',
    children = <></>
}) {
	let br: string,
		radius = '32px',
		centerStyle = {},
		textSize =
			direction === 'center' ? fontSize('3.3vw') : fontSize('3vw', '1.7em')
	if (direction === 'left') {
		br = `0 0 0 ${radius}`
	} else if (direction === 'right') {
		br = `0 0 ${radius} 0`
    } else if (direction === 'down') {
        br = `${radius} ${radius} 0 0`
    } else {
		br = `0 0 ${radius} ${radius}`
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
			className='text-center font-bold'
			style={{
				backgroundColor: insertColor(color),
				alignContent: 'center',
				height: '8vw',
				borderRadius: br,
				maxHeight: '70px',
				...centerStyle,
			}}
		>
			<Text size={textSize} text={text} color={insertColor(textColor)} />
		</div>
	)
}
