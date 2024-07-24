export default function Container({ children = <></> }) {
	return (
		<div
			className='grid'
			style={{
				gridTemplateColumns: '40% 20% 40%',
				height: '30px',
			}}
		>
			{children}
		</div>
	)
}
