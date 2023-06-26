import { Box, Button, Container, Group, NumberInput, Stack, TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'

export const NewBeer = () => {
	const form = useForm({
		initialValues: {
			name: '',
			tagline: '',
			description: '',
			first_brewed: '',
			brewers_tips: '',
			attenuation_level: '',
			contributed_by: '',
		},
	})
	return (
		<Container w='50%'>
			<Box>
				<form>
          <Stack>
					<TextInput
						withAsterisk
						label='Name'
						placeholder='Beer name here'
						required
						{...form.getInputProps('name')}
					/>
					<TextInput label='Tagline' placeholder='Tagline' {...form.getInputProps('tagline')} />
					<Textarea
						label='Description'
						placeholder='Description'
						{...form.getInputProps('description')}
					/>
					<TextInput
						label='First Brewed'
						placeholder='First brewed'
						{...form.getInputProps('first_brewed')}
					/>
					<TextInput
						label='Brewers Tips'
						placeholder='Tips for success'
						{...form.getInputProps('brewers_tips')}
					/>
					<NumberInput
						label='Attenuation level'
						placeholder='7.8'
						min={0}
						step={0.1}
						precision={1}
						stepHoldDelay={500}
						stepHoldInterval={100}
						{...form.getInputProps('attenuation_level')}
					/>
					<TextInput
						label='Contributed By:'
						placeholder='Your name'
						{...form.getInputProps('contributed_by')}
					/>
          </Stack>
          <Group position='right' mt='md' >
            <Button type='submit'> Submit </Button>
            <Button type='reset' color='red'> Cancel </Button>
          </Group>  
				</form>
			</Box>
		</Container>
	)
}
