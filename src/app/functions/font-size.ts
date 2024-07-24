export default function fontSize(size = '3vw', max = '2em') {
	return `clamp(1em, ${size}, ${max})`
}
