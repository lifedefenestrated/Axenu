/**
 * BLOCK: axenu-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Button } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-axenu-blocks', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'axenu-blocks - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'axenu-blocks — CGB Block' ),
		__( 'CGB Example' ),

		// __("create-guten-block")
	],
	attributes: {
		title: { type: 'string', value: 'default title' },
		body1: { type: 'array', source: 'children', selector: 'p' },
		body2: { type: 'array', source: 'children', selector: 'p' },
		fullImageAlt: {
			attribute: 'alt',
		},
		fullImageUrl: {
			attribute: 'src',
		},
		fullImageText: { type: 'string' },
	},

	edit: function( props ) {
		function getImageButton( openEvent, imageUrl ) {
			if ( imageUrl ) {
				return (
					<img
						src={ imageUrl }
						onClick={ openEvent }
						className="image small-icon"
						alt="full image"
					/>
				);
			}
			return (
				<div className="button-container">
					<Button onClick={ openEvent } className="button button-large">
						Pick an image
					</Button>
				</div>
			);
		}

		// const getImageButton = openEvent => {
		//
		// };

		return (
			<div className="card">
				<div className="column column-vertical">
					<PlainText
						onChange={ content => props.setAttributes( { title: content } ) }
						value={ props.attributes.title }
						placeholder="Your card title"
						className="heading"
					/>
					<MediaUpload
						onSelect={ media => {
							props.setAttributes( {
								divider1ImageAlt: media.alt,
								divider1ImageUrl: media.url,
							} );
						} }
						type="image"
						value={ props.attributes.divider1ImageUrl }
						render={ ( { open } ) =>
							getImageButton( open, props.attributes.divider1ImageUrl )
						}
					/>
					<RichText
						onChange={ content => props.setAttributes( { body1: content } ) }
						value={ props.attributes.body1 }
						multiline="p"
						placeholder="First text part"
						formattingControls={ [ 'bold', 'italic', 'underline' ] }
					/>
					<MediaUpload
						onSelect={ media => {
							props.setAttributes( {
								divider2ImageAlt: media.alt,
								divider2ImageUrl: media.url,
							} );
						} }
						type="image"
						value={ props.attributes.divider2ImageUrl }
						render={ ( { open } ) =>
							getImageButton( open, props.attributes.divider2ImageUrl )
						}
					/>
					<RichText
						onChange={ content => props.setAttributes( { body2: content } ) }
						value={ props.attributes.body2 }
						multiline="p"
						placeholder="First text part"
						formattingControls={ [ 'bold', 'italic', 'underline' ] }
					/>
				</div>
				<div className="column full-image">
					<MediaUpload
						onSelect={ media => {
							props.setAttributes( {
								fullImageAlt: media.alt,
								fullImageUrl: media.url,
							} );
						} }
						type="image"
						value={ props.attributes.fullImageUrl }
						render={ ( { open } ) =>
							getImageButton( open, props.attributes.fullImageUrl )
						}
					/>
					<PlainText
						onChange={ content =>
							props.setAttributes( { fullImageText: content } )
						}
						value={ props.attributes.fullImageText }
						placeholder="Your card title"
						className="image-text"
					/>
				</div>
			</div>
		);
	},

	// <div className="card">
	// 	<div className="column column-vertical">
	// 		<h3>{ props.attributes.title }</h3>
	// 		{ props.attributes.body1 }
	// 		<img
	// 			className="dividerImage"
	// 			src={ props.attributes.divider1ImageUrl }
	// 			alt={ props.attributes.divider1ImageAlt }
	// 		/>
	// 		{ props.attributes.body2 }
	// 		<img
	// 			className="dividerImage"
	// src={ props.attributes.divider2ImageUrl }
	// alt={ props.attributes.divider2ImageAlt }
	// 		/>
	// 		<button type="button" name="button">
	// 			Read our story
	// 		</button>
	// 	</div>
	// 	<div className="column full-image">
	// 		<img
	// src={ props.attributes.fullImageUrl }
	// alt={ props.attributes.fullImageAlt }
	// 		/>
	// 		<p className="image-text">{ props.attributes.fullImageText }</p>
	// 	</div>
	// </div>
	save: function( props ) {
		return (
			<div className="card">
				<div className="card-body">
					<div className="card-column flex-6">
						<h3>{ props.attributes.title }</h3>
						<div className="img-container">
							<img
								src={ props.attributes.divider1ImageUrl }
								alt={ props.attributes.divider1ImageAlt }
								className="divider"
							/>
						</div>
						<p>{ props.attributes.body1 }</p>
						<div className="img-container">
							<img
								src={ props.attributes.divider2ImageUrl }
								alt={ props.attributes.divider2ImageAlt }
								className="divider"
							/>
						</div>
						<p>{ props.attributes.body2 }</p>
						<button type="button" name="button">
							Read our story
						</button>
					</div>
					<div className="card-column flex-4 ">
						<div className="flex-4 img-container">
							<img
								src={ props.attributes.fullImageUrl }
								alt={ props.attributes.fullImageAlt }
								className="round vertical-center"
							/>
						</div>
						<p className="image-text">{ props.attributes.fullImageText }</p>
					</div>
				</div>
			</div>
		);
	},
} );
