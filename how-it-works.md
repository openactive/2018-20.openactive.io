---
title: How It Works
permalink: "/how-it-works/"
position: 2
is_main_navigation: true
layout: page
---

{::options parse_block_html="true" /}

<article class="note-wrap">
<div class="notes">

##### Page Notes ~ {{ page.title | escape }}

Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1b_AclHfydCEGU5ZfLu3i7kvUnGpLflFvBTg4oI46FP0){:target="_blank"}

</div>
</article>
<article class="note-wrap">
<div class="notes">


##### Section Notes ~ Hero Block
**Purpose**: This section is the first thing all users will see, we are showcasing a animated SVG Graphic to explain the main principles

**Functionality**: Possible interaction to trigger opening data, aiding developing a understanding of the concept.

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article class="hero--simple">
<div class="two">


![Hero]({{ site.url }}/assets/images/icons-animation.gif)

</div>

<div class="two">


![Hero]({{ site.url }}/assets/images/icons-animation.gif)

</div>

</article>


<article>
<div class="one">
<h1>{{ page.title | escape }}</h1>

OpenActive is a community-led initiative using open data to help people get active.

Our goal is to collect and share opportunity data on what, where, and when physical activity sessions happen, and to make this information openly available to everyone, transforming the way people discover, access, and take part in new activities.
We believe that open opportunity data will revolutionise the sport and physical sector, helping providers to better deliver activities, attract engaged and active customers, and lead the nation in becoming more active together.


</div>
</article>

<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article class="title-row">
<h2 class="sub-heading-two">Why It Matters</h2>
<div class="two">

### Rem voluptatem
Velit magni soluta distinctio enim. Eos repellat illum temporibus consequatur consequatur cum eos.

Adipisci eum magnam ut. Molestiae qui voluptas consequuntur maiores nemo quam. Unde autem enim fugiat est beatae ex. Provident deleniti ea qui.
   + Magni error voluptatem ut quo natus.
   + Et rerum illum quidem perspiciatis molestiae.
   + Omnis cupiditate sapiente quis eius animi officiis vel.

</div>
<div class="two">

{% include line_graphic.svg %}

</div>

</article>

<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**: The purpose of this section is to graphically clarify for users exactly what is and isn't included in Opportunity Data.

**Functionality**: This section will support text and graphics.

**Design**: This is a opportunity to animate graphics to create visual intrigue.

**Copy-writing Notes**:

</div>
</article>


<article markdown="0" class="opportunity-data title-row">
<h2 class="sub-heading-two">Opportunity Data Explained</h2>
<div class="two subgrid title-row">
<i class="two">{% include time.svg %}</i>
<i class="two">{% include cost.svg %}</i>
<i class="two">{% include website.svg %}</i>
<i class="two">{% include location.svg %}</i>
</div>
<div markdown="1" class="two">


### Open opportunity data is about where and when sport and physical activities happen.
This data can be made available for anyone to access, use, and share, helping consumers to discover and take part in new activities, and providers to more accurately tailor and grow their services.

By encouraging organisations to publish their data openly and to a commonly agreed standard, we are not only facilitating open sharing across individual websites, but building a connected, online community that’s free to grow and innovate in response to its consumers’ needs.

Opening up opportunity data across the sector will better connect providers and consumers, and allow sport and physical activity sessions across the country to be easily shared and accessed everywhere, from websites and apps that attract millions of users, to communities and services that engage local people. 



</div>
</article>



<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article>
<h2 class="sub-heading-two">What data is available</h2>
<div class="one">

+ A explanation of what Opportunity data is **already** available

</div>
</article>



<article class="note-wrap">
<div class="notes">

##### Section Notes ~ Case Studies Block
**Purpose**: This section is used to showcase organisations that are already involved in the initiative. A selection of featured case studies will be represented by their logo in a grid.

**Functionality**: The logos will act as a tabbing system to reveal content from the case study, this would consist of some fast facts about each case.

**Design**: The design of this section should be balanced and clearly represent to a user the functionality of the tabs, this would include clearly  active state on tabs to the open content area.

**Copy-writing Notes**:
</div>
</article>


<article class="case-studies">
<h2 class="sub-heading-two">Case<br> Studies</h2>
<nav class="subgrid">
{% for post in site.case_studies %}
{% assign theImage = post.thumbnail_image %}
{% if post.is_featured %}
{% if post.member %}
{% assign theMember = site.members | where:"title", post.member  | first %}
{% assign theImage = theMember.thumbnail_image %}
{% endif %}

<div class="case-tab" data-tab="{{ forloop.index }}" markdown="0" >
<img src="{{ theImage  | relative_url}}"/>
</div>

{% endif %}

{% endfor %}
</nav>

<figure class="case-wrap">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="case-content" id="{{ forloop.index }}">


<h3>{{ post.title | escape }}</h3>
{{post.content}}
<a class="button-primary" href="{{ post.url | relative_url }}">Read More</a>

</div>
{% endif %}
{% endfor %}
</figure>


<aside class="case-study-info">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="case-content" data-id="{{ forloop.index }}">
<h5>DATA EXPOSED</h5>
<p>Date</p>
<p>Location</p>
<p>Disabled Access</p>
<p>{{ post.title | escape }}</p>

</div>
{% endif %}
{% endfor %}
</aside>

</article>




<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**: Text to introduce the ways to learn more about the initiative

**Functionality**: These blocks will contain at minimum title, excerpt & button.

**Design**: These represent call to action blocks at a lower hierarchy, the design should reflect this. For example these would be a lower level of prominence than a full with call to action.

**Copy-writing Notes**:

</div>
</article>

<article class="call_to_action title-row ">
<h2 class="sub-heading-two">E-Learning</h2>

<div class="subgrid">
<div class="four brand-three-b">

### How to's
Aspernatur exercitationem commodi nobis laborum incidunt sunt qui delectus.
[How to's]( {{ site.baseurl }}{% link how-to.md %}){:class="link" }

</div>
<div class="four brand-six-b">

### Discussions
Sapiente voluptatem quia fuga optio. Dignissimos et occaecati consequatur accusamus in.
[Discussions]( {{ site.baseurl }}{% link discussions.md %}){:class="link" }

</div>
<div class="four brand-ten-b">

### References
Facilis assumenda officiis dicta. Rerum dolor ullam reprehenderit molestiae.
[References]( {{ site.baseurl }}{% link references.md %}){:class="link" }

</div>
<div class="four brand-eight-b">

### Tutorials
Natus sit architecto rerum fugit alias aut magnam. Impedit est ea eaque voluptas aliquid magnam alias.
[Tutorials]( {{ site.baseurl }}{% link tutorials.md %}){:class="link" }

</div>
</div>
</article>



<article class="note-wrap">
<div class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</div>
</article>

<article class="call_to_action--full-width brand-ten-bc">
<h2 class="sub-heading-two">Getting Started</h2>
<div class="one">

Text Content
Now you know how it works, let’s look at how you can make your data available or use a dataset for your own application.

[Getting Started]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}


</div>
<figure class="brand-nine-bc">
<div style="background: url({{ site.url }}/openactive/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
</figure>
</article>