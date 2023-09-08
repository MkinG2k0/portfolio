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

const arr = [
	{
		isBot: true,
		message: 'вы придете ?',
	},
	{
		isBot: true,
		message: '1:да 2:нет',
	},
	{
		isBot: false,
		message: '2', // нет
	},
	{
		isBot: false,
		message: 'перенести запись ?',
	},
	{
		isBot: true,
		message: 'отменить или выбрать другой день',
	},
	{
		isBot: false,
		message: '2', // отменить , пернести
	},
	{
		isBot: true,
		message: 'показываем свободные дни',
	},
	{
		isBot: true,
		message: '1:08, 2:08, 3:08, 4:08, 5:08',
	},
	{
		isBot: false,
		message: '1:08',
	},
	{
		isBot: true,
		message: '12:00 , 13:00 , 14:00',
	},
	{
		isBot: false,
		message: '12:00',
	},
	{
		isBot: true,
		message: 'запись перенесена',
	},
]
