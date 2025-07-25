/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody, TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   attributes the block properties
 * @param {Object}   attributes.attributes the block properties attributes
 * @param {Function} attributes.setAttributes function to update block properties
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	// add the inspector tools for the weighting
	const { id, label, weighting } = attributes;
	const sanitizeToNumbers = (value) => {
		const strValue = String(value)
		const onlyNumbers = strValue.replace(/[^0-9]/g, '')
		const onlyNumbersInt = Number(onlyNumbers);
		let onlyNumbersReturn = 0;
		if (onlyNumbers !== '' && onlyNumbersInt > 99) {
			onlyNumbersReturn = '99'
		} else if ( onlyNumbers !== '' && onlyNumbersInt < 1 ) {
			onlyNumbersReturn = '1'
		} else {
			onlyNumbersReturn = onlyNumbers
		}
		return onlyNumbersReturn
	};
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label="ID"
						value={ id || '' }
						onChange={ ( value ) =>
							setAttributes( {
									id: value
								}
							)
						}
					/>
					<TextControl
						label="Label"
						value={ label || 'A' }
						onChange={ ( value ) =>
							setAttributes(
								{
									label: value
								}
							)
						}
					/>
					<TextControl
						label="Weighting"
						value={ weighting || '' }
						onChange={
							( value ) => {
							const sanitizedNumbersForWeighting = sanitizeToNumbers( value )
								setAttributes(
									{
										weighting: sanitizedNumbersForWeighting
									}
								)
						}	}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<h4>Variant: { label }</h4>
				<InnerBlocks />
			</div>
		</>
	);
}
