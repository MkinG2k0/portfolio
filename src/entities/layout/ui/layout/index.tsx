import { Footer } from 'entities/layout/ui/footer'
import { Header } from 'entities/layout/ui/header'
import { Blur } from 'entities/layout/ui/blur'

export const Layout: FC = ({ children }) => {
	return (
		<div className={'relative col bg-background text-text'}>
			<Blur />
			<div className={'absolute w-[100vw] h-[100vh] z-10 overflow-hidden overflow-y-auto'}>
				<div className={'relative col flex-auto scroll mx-auto w-[clamp(10rem,100%,1000px)] '}>
					<Header />
					<div className={'flex-auto p-4 pb-24'}>{children}</div>
					<Footer />
					<Blur className={'left-0 bottom-0 scale-150'} />
				</div>
			</div>
		</div>
	)
}
