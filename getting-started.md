---
title: Getting Started
permalink: "/getting-started/"
position: 3
is_main_navigation: true
layout: page-hero
thumbnail_image: "/uploads/iStock-803099000optimised.png"
strapline: Discover how to build unlimited reach for your activities
---

{::options parse_block_html="true" /}



<!--  ---------------->
<!-- TABS -->
<!--  ---------------->
{% include tabs.html %}

<!--  ---------------->
<!-- CALL TO ACTION -->
<!--  ---------------->
<!-- <article class="call_to_action "> -->
<!-- <div class="subgrid"> -->
<!-- <div class="two list"> -->

<!-- ### Publish Your Data -->

<!-- 1. Open your organisation’s data to allow customers to easily access events and services -->
<!-- 2. With open data, your activities can be discovered, shared, and engaged with by people nationwide -->
<!-- 3. By publishing your data, your activities will be shared across websites and apps that attract millions of users, to communities and services that engage local people -->

<!-- [Publish Data]( {{ site.baseurl }}{% link simple-publish.md %}){: .button-primary} -->


<!-- </div> -->
<!-- <div class="two  list"> -->

<!-- ### Using Data -->

<!-- 1. Developers and innovators can use data to create new products and services to benefit the sports and physical sector -->
<!-- 2. By harnessing open data, we can build growth and reach across the sector -->
<!-- 3. Easy access to opportunity data can help people to get active, and boost participation in activities nationwide -->
<!-- 4. We encourage you to explore the data published so far, and discover what’s useful for you -->

<!-- [Use Data]( {{ site.baseurl }}{% link simple-use.md %}){: .button-primary} -->

<!-- </div> -->
<!-- </div> -->
<!-- </article> -->



<!--  ---------------->
<!-- CALL TO ACTION -->
<!--  ---------------->
<article>
<div class="one">

## I’m interested, but how can I help?

If you think your organisation would benefit from open data, but the decision isn’t in your hands, explore the links below for accessible documents to share with your team or employer.
</div>
</article>


<!--  ---------------->
<!-- CALL TO ACTION -->
<!--  ---------------->
<article class="call_to_action">
<div class="subgrid">
<div class="three">
#### Convince Your Company
Discover downloadable documents to give to your company.

[Convince Company]( {{ site.baseurl }}{% link convince-company.md %}){: .button-primary}

</div>
<div class="three">

#### Tell Your Team
Find resources designed to explain open data to your colleagues.

[Tell Team]( {{ site.baseurl }}{% link tell-team.md %}){: .button-primary}

</div>
<div class="three">

#### Contact us
Have a question? Get in touch.

<a class="button-primary" href="mailto:hello@openactive.io">Contact</a>

</div>
</div>
</article>

<!--  ---------------->
<!-- DEVELOPER CALL TO ACTION -->
<!--  ---------------->

<article class="call_to_action--full-width">
<h2 class="sub-heading-two">Show me the code</h2>
<div class="one">

{% assign subpage = site.pages | where: 'title', 'Developer' %}
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