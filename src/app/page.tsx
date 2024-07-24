import Container1 from './partials/main/center'
import Container from './partials/main/flex'
import HeaderLink from './partials/main/header-link'
import Image from './partials/main/image'
import Text from './partials/main/text'

export default function Home() {
	return (
		<>
			<Container>
				<>
					<HeaderLink
						direction='left'
						color='16BFDE'
						text='Eksplor ke Laut'
						textColor='5B4E4E'
					/>
					<HeaderLink color='2F2F2F' text="LET'SCCO" textColor='ffffff' />
					<HeaderLink
						direction='right'
						color='C4E015'
						text='Eksplor ke Hutan'
						textColor='5B4E4E'
					/>
				</>
			</Container>
			<Text
				text='Ayo Kita Belajar Jaga Lingkungan'
				color='3A3A3A'
				margin='5vw 0 2.5vw 0'
				size='clamp(1.7em, 3vw, 2.5em)'
			/>
			<Image src='/landing_page.png' alt='Subur' />
			<HeaderLink direction='down' color='2f2f2f' />
		</>
	)
}
