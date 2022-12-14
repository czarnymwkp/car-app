import { EmailAuthCredential } from 'firebase/auth'
import { Form, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const SingUpComponent = () => {
	let navigate = useNavigate()
	return (
		<>
			{' '}
			<Button className='btn btn-warning m-2' onClick={() => navigate('/')}>
				Home
			</Button>
			<Card>
				<Card.Body className='text-center mb-2'>
					<h1>SIGN UP</h1>{' '}
					<Form>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email'></Form.Control>
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password'></Form.Control>
						</Form.Group>
						<Form.Group id='password-confirme'>
							<Form.Label>Reapet Password</Form.Label>
							<Form.Control type='password'></Form.Control>
						</Form.Group>
						<Button className='btn btn-warning mt-4'>Register</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>Have account?? Login</div>
		</>
	)
}
