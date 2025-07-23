/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { id, cookieExp } = attributes;

	const sanitizeToNumbers = (value) => {
		const strValue = String(value)
		const onlyNumbers = strValue.replace(/[^0-9]/g, '')
		return onlyNumbers
	};

	const checkExpForBlank = (value) => {
		const isEmpty = value.target.value === '';
		if (isEmpty) {
			setAttributes({
				cookieExp: '30'
			})
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
					label="ID"
					value={ id || '' }
					onChange={
						( value ) => 
							setAttributes(
								{ id: value }
							)
					} />
					<TextControl
					label="Cookie Expiration (Days)"
					value={ cookieExp || '' }
					onChange={
						( value ) => {
							const onlyNumbers = sanitizeToNumbers( value )
							setAttributes(
								{ cookieExp: onlyNumbers }
							)
						}
					}
					onBlur={
						( value ) => {
							checkExpForBlank(value);
						}
					} />
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<InnerBlocks 
					template={
						[
							[
								'create-block/ab-variant',
								{
									label: 'A'
								}

							],
							[
								'create-block/ab-variant',
								{
									label: 'B'
								}

							]
						]
					}
					allowedBlocks={['create-block/ab-variant']}
					orientation="horizontal"
				/>
			</div>
		</>
	);
}
