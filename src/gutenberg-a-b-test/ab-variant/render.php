<?php

print_r( $attributes );
$parsed_blocks = parse_blocks( $content );

?>
<pre>
    <?php // print_r( $parsed_blocks );
    
    foreach( $parsed_blocks as $child ) {
        print_r( $child );
        echo '-------------';
    }
    
    
    ?>
</pre>