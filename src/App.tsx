import * as React from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

type FormValues = {
	yourName: string
	companyName: string
	telephone: number
	email: string
	message: string
}

export default function App() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	console.log(watch())

	return (
		<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
			<h1 className="h1">Contact us</h1>

			<div className="box">
				<div className="name">
					<input
						placeholder="Your name"
						title="Your name"
						{...register('yourName', {
							pattern: /^[a-zA-Z]+$/,
							required: true,
							maxLength: 20,
							minLength: 2,
						})}
					/>
					{errors.yourName ? (
						<p className="error">
							{errors.yourName.message}{' '}
							{'*name must contain only alphabetic characters'}
						</p>
					) : (
						''
					)}
				</div>

				<div className="company">
					<input
						title="Company Name"
						placeholder="Company Name"
						{...register('companyName', {
							required: true,
							maxLength: 20,
							minLength: 2,
						})}
					/>
				</div>
				{errors.companyName ? (
					<p className="error">{errors.companyName.message}</p>
				) : (
					''
				)}

				<div className="telephone">
					<input
						title="Telephone"
						placeholder="Telephone"
						type="number"
						{...register('telephone', { valueAsNumber: true, minLength: 11 })}
					/>
					{errors.telephone ? (
						<p className="error">
							{errors.telephone.message}{' '}
							{'*please provide a valid UK telephone number'}
						</p>
					) : (
						''
					)}
				</div>

				<div className="email">
					<input
						title="Email Address"
						placeholder="Email Address"
						type="email"
						{...register('email', { required: true })}
					/>
					{errors.email ? (
						<p className="error">
							{errors.email.message} {'*please provide a valid email address'}{' '}
						</p>
					) : (
						''
					)}
				</div>

				<div className="textarea">
					<input
						title="Enter a message..."
						placeholder="Enter a message..."
						{...register('message', {
							// required: "Required",

							minLength: {
								value: 20,
								message:
									'*please provide a message that is between 20 and 500 characters in length',
							},
							maxLength: '500',
						})}
					/>
					{errors.message && <p className="error">{errors.message.message}</p>}
				</div>

				<div className="privacy">
					<p>
						Submitting your details indicates your consent for us to process
						your personal data as explained in our privacy notice{' '}
						<a className="link" href="">
							here
						</a>
						. Please read this important notice, which contains details on how
						to exercise your privacy rights, including opting out of direct
						marketing.
					</p>
				</div>

				<div className="submit">
					<input type="submit" value="Send" />
				</div>

				<div className="clear>">
					<a className="link" href="">
						Clear form
					</a>
				</div>
			</div>
		</form>
	)
}
