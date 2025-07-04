<?php

// print_r( $attributes );
$parsed = parse_blocks( $content );

?>
<pre>
    <?php // print_r( $parsed_blocks );
    print_r( $block->parsed_block['innerBlocks'][0]['attrs'] );
    // foreach( $parsed as $child ) {
    //     print_r( $child );
    //     echo '-------------';
    // }
    
    
    ?>
</pre>