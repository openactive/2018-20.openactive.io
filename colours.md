---
title: Style
date: 2017-12-14 13:54:00 Z
position: 35
thumbnail_image: "/uploads/dancin.png"
strapline: 'Adipisci incidunt qui voluptas sint expedita distinctio laudantium. Aut
  et sed voluptatum ullam autem quo laboriosam repellendus. Quis voluptas et eos possimus. '
layout: colours
---

{::options parse_block_html="true" /}


<!--  ---------------->
<!-- CALL TO ACTION FULL WIDTH BLOCK -->
<!--  ---------------->
<article class="call_to_action--full-width global">
<h2 class="sub-heading-two">Full Width Call to Action</h2>
<div class="one">

{% assign subpage = site.pages | where: 'title', 'Accelerator' %}
{% for item in subpage %}
### {{ item.title}}
{{ item.strapline | markdownify }}

[Find out more]( {{ site.baseurl }}{{ item.permalink }}){: .button-primary}

</div>
<figure>
<div class="mask"></div>
<div class="image" style="background: url({{ site.baseurl }}{{ item.thumbnail_image }})center center / cover no-repeat;"></div>
</figure>
{% endfor %}
</article>



<!--  ---------------->
<!-- CALL TO ACTION FOUR BLOCK -->
<!--  ---------------->
<article class="call_to_action title-row">
<h2 class="sub-heading-two">Four Column Call to Action</h2>

<div class="subgrid">
<div class="four">

### How to's
Aspernatur exercitationem commodi nobis laborum incidunt sunt qui delectus.

[How to's]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
<div class="four">

### Discussions
Sapiente voluptatem quia fuga optio. Dignissimos et occaecati consequatur accusamus in.

[Discussions]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
<div class="four">

### References
Facilis assumenda officiis dicta. Rerum dolor ullam reprehenderit molestiae.

[References]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
<div class="four">

### Tutorials
Natus sit architecto rerum fugit alias aut magnam. Impedit est ea eaque voluptas aliquid magnam alias.

[Tutorials]({{ site.baseurl }}{% link community.md %}){:.link}

</div>
</div>
</article>



<!--  ---------------->
<!-- CALL TO ACTION THREE BLOCK -->
<!--  ---------------->
<article class="call_to_action">
<div class="subgrid">
<div class="three">

#### Getting Started
Take the first step enabling open data in your system.

[Getting Started]({{ site.baseurl }}{% link getting-started.md %}){:.button-primary}

</div>
<div class="three">

#### Developer
Get stuck into the docs and start using or publishing data today!

[Developer]({{ site.baseurl }}{% link developer.md %}){:.button-primary}

</div>
<div class="three">

#### Community
What's happening in the community, and how you can get involved!

[Community]({{ site.baseurl }}{% link community.md %}){:.button-primary}

</div>
</div>
</article>


<!--  ---------------->
<!-- CALL TO ACTION TWO BLOCK -->
<!--  ---------------->
<article class="call_to_action">
<div class="subgrid">
<div class="two">
<div class="line-graphic"></div>
### Publish Data
Take the first step enabling open data publishing in your system

[Community]({{ site.baseurl }}{% link community.md %}){:.button-primary}

</div>
<div class="two">
<div class="line-graphic"></div>

### Use Data
Take the first step enabling open data publishing in your system.

[Community]({{ site.baseurl }}{% link community.md %}){:.button-primary}

</div>
</div>
</article>
