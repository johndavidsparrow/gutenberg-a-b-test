<?php
// This file is generated. Do not modify it manually.
return array(
	'gutenberg-a-b-test' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/gutenberg-a-b-test',
		'version' => '0.2.0',
		'title' => 'Gutenberg A B Test',
		'category' => 'widgets',
		'icon' => 'randomize',
		'description' => 'Simple block to add A/B variants of content and weight them.',
		'attributes' => array(
			'id' => array(
				'type' => 'string'
			),
			'cookieExp' => array(
				'type' => 'string',
				'default' => '30'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'gutenberg-a-b-test',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php'
	),
	'ab-variant' => array(
		'name' => 'create-block/ab-variant',
		'title' => 'A/B Test Variant',
		'category' => 'widgets',
		'icon' => 'randomize',
		'description' => 'Example block scaffolded with Create Block tool.',
		'attributes' => array(
			'id' => array(
				'type' => 'string',
				'default' => 'A'
			),
			'label' => array(
				'type' => 'string',
				'default' => 'A'
			),
			'weighting' => array(
				'type' => 'string',
				'default' => '50'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		)
	)
);
