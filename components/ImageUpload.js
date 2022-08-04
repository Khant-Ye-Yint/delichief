import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';

export function ImageUpload({ setImgUrl }) {
	const [isImageUploaded, setIsImageUploaded] = useState(false);
	async function handleWidgetClick() {
		const widget = window.cloudinary.createUploadWidget(
			{
				cloudName: 'wukyanlay',
				uploadPreset: 'Delichef',
				resourceType: 'image',
			},
			(error, result) => {
				if (!error && result && result.event === 'success') {
					setImgUrl(result.info.url);
					setIsImageUploaded(true);
				} else if (error) {
					console.log(error);
				}
			}
		);
		widget.open();
	}

	return (
		<div>
			<div>
				<Button
					bg='secondary.100'
					fontWeight='bold'
					p='2'
					_hover={{
						bg: whiten('secondary.100', 20),
					}}
					_active={{
						bg: whiten('secondary.100', 30),
					}}
					shadow='md'
					disabled={isImageUploaded}
					color='white'
					onClick={handleWidgetClick}
				>
					Upload Image
				</Button>
			</div>

			{isImageUploaded ? (
				<>
					<div>Successfully uploaded</div>
				</>
			) : null}
		</div>
	);
}
