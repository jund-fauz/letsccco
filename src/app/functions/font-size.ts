export default function fontSize(size = '3vw', max = '2em', min = '1em') {
	return `clamp(${min}, ${size}, ${max})`
}
