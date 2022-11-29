import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

interface Props {
	name: string
}

export const PrimaryButton = (props: Props) => {
	return (
		<>
			<button className='btn btn-primary'>{props.name}</button>
		</>
	)
}
