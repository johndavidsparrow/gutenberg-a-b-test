=== Gutenberg A B Test ===
Contributors:      John Sparrow
Tags:              block
Tested up to:      6.7
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Simple block to add A/B variants of content and weight them.

== Description ==

This block is a simple way to add two variants of content to a page, and weight each one by percentage. The container also allows the author to specify a cookie expiration time.

For the end user, the weighting of each variant (totalling 100%) will decide how likely each variant is to show. Once displayed for the first time, a cookie is written with the containing block's ID value, locking that browser into that varaint for n number of days (cookie expiration time).

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/gutenberg-a-b-test` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.
