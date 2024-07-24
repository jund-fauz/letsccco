import Container from './partials/main/flex'
import HeaderLink from './partials/main/header-link'

export default function Home() {
	return (
		<>
			<Container>
				<HeaderLink color='16BFDE' text='Eksplor ke Laut' textColor='5B4E4E' />
				<HeaderLink color='2F2F2F' text="LET'SCCO" textColor='ffffff' />
				<HeaderLink color='C4E015' text='Eksplor ke Hutan' textColor='5B4E4E' />
			</Container>
		</>
	)
}
