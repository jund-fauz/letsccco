export default function Image({src = '', alt = '', width = 30}) {
    return (
			<div className='flex justify-center'>
            <img src={src} alt={alt} style={{ maxWidth: `${width}vw`, minWidth: '350px' }} />
			</div>
		)
}