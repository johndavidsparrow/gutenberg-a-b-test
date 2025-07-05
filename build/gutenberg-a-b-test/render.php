<?php

$parsed_blocks = $block->parsed_block['innerBlocks'];
/*
Info we need:

- $attributes for ID and cookie exp
- block info from both blocks for weighting


*/
$parent_id    = $attributes['id'];
$cookie_exp   = $attributes['cookieExp'];
$cookie_name  = 'abtest_' . $parent_id;
$chosen_index = null;

// echo render_block( $parsed_blocks[$chosen_index] );

// Do we have a cookie matching the ID? If so, we don't need to bother with weightings
if ( isset( $_COOKIE[$cookie_name] ) ) {
    $chosen_index = (int) $_COOKIE[$cookie_name];
    // Is there a corresponding child block?
    if ( !isset( $parsed_blocks[$chosen_index] ) ) {
        $chosen_index = null;
    }
}

if ( $chosen_index === null ) {


    // Create an array of weightings
    $weightings = array();
    $weightings_sum = 0;
    foreach( $parsed_blocks as $index => $child ) {
        $weightings[$index] = $child['attrs']['weighting'];
        $weight_total += $child['attrs']['weighting'];
    }
    if ( count( $weightings ) !== 2 || $weight_total !== 100 ) {
        $weightings = [
            0 => 50,
            1 => 50
        ];
    }

    // Select a random weighted child and write cookie
    $rnd = rand(1, 100);
    $weight_total = 0;
    foreach( $weightings as $index => $weight ) {
        // Add to weight total
        $weight_total += $weight;
        if ( $rnd <= $weight_total ) {
            $chosen_index = $index;
            break;
        }
    }

    echo 'Random number is ' . $rnd;
    echo 'Chosen index is ' . $chosen_index;

    // set cookie here TODO



} else {
    echo render_block( $parsed_blocks[$chosen_index] );
}





$weightings = array();

foreach( $parsed_blocks as $child ) {
    $weightings[] = $child['attrs']['weighting'];
}



?>