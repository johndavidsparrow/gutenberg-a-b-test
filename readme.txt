=== Gutenberg A B Test ===
Contributors:      John Sparrow
Plugin URI:        https://gutenberg-sandbox.showybelt.com/gutenberg-a-b-test-block-demo/
Tags:              block
Tested up to:      6.7
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Simple block to add A/B variants of content and weight them.

== Description ==

This block is a simple way to add two variants of content to a page on a per-block basis, and weight each one by percentage. The container also allows the author to specify a cookie expiration time.

For the end user, the weighting of each variant (totalling 100%) will decide how likely each variant is to show. Once displayed for the first time, a cookie is written with the containing block's ID value, locking that browser into that varaint for n number of days (cookie expiration time).

Check out a current demo of the block at: https://gutenberg-sandbox.showybelt.com/gutenberg-a-b-test-block-demo/

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/gutenberg-a-b-test` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= What happens when the cookie expires? =

Once the cookie expires, the behavior is as if the user has not visited the page. It will once again choose a variant based on the weighting and set a new cookie

= How do I reset the selection for everyone? =

To start the A/B variants over from scratch for all users, change the ID of the main A/B block. The old cookie will remain, and expire per the previously set expiration time, but the script will no longer look for it, and look for the new cookie ID instead.

= How does weighting work? =

For each variant, you can choose a number between 1 and 99. If a variant has 1 as its value, it has a 1% chance of being chosen.

If your weightings do not add up to 100, default values of 50 will be applied to each variant.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.2.0 =
* Not broken release
