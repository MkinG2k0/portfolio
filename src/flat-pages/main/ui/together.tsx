import { Button } from 'shared/ui/button'

import { Send } from 'lucide-react'

export const Together = () => {
	return (
		<div className={'row justify-between text-xl gap-5 items-center max-md:flex-col'}>
			<div className={'col gap-3 md:max-w-xl'}>
				<span className={'text-4xl font-bold'}>Let’s work together</span>
				<span className={'text-muted '}>
					Want to discuss an opportunity to create something great? I’m ready when you are.
				</span>
			</div>
			<Button className={'text-xl flex-shrink-0 max-md:w-full'} variant={'shadow'}>
				<div className={'row gap-3 items-center'}>
					<Send />
					<span>Get in touch</span>
				</div>
			</Button>
		</div>
	)
}
