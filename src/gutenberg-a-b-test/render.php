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

// echo render_block( $parsed_blocks[1] );

// Do we have a cookie matching the ID? If so, we don't need to bother with weightings
if ( isset( $_COOKIE[$cookie_name] ) ) {
    $chosen_index = (int) $_COOKIE[$cookie_name];
    // Is there a corresponding child block?
    if ( !isset( $parsed_blocks[$chosen_index] ) ) {
        $chosen_index = null;
    }
}

if ( $chosen_index === null ) {


} else {


}







// echo (int) '12334123';

// Else



$weightings = array();

foreach( $parsed_blocks as $child ) {
    $weightings[] = $child['attrs']['weighting'];
}



?>