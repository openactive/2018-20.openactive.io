---
title: How It Works
permalink: "/how-it-works/"
position: 2
is_main_navigation: true
layout: page
---

{::options parse_block_html="true" /}


<article class="notes">

##### Page Notes ~ {{ page.title | escape }}

Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1b_AclHfydCEGU5ZfLu3i7kvUnGpLflFvBTg4oI46FP0){:target="_blank"}

</article>

<article class="notes">


##### Section Notes ~ Hero Block
**Purpose**: This section is the first thing all users will see, we are showcasing a animated SVG Graphic to explain the main principles

**Functionality**: Possible interaction to trigger opening data, aiding developing a understanding of the concept.

**Design**:

**Copy-writing Notes**:

</article>


<article class="hero--media-right subgrid">
<div class="block two">

#### How It Works

Velit magni soluta distinctio enim. Eos repellat illum temporibus consequatur consequatur cum eos. Adipisci eum magnam ut. Molestiae qui voluptas consequuntur maiores nemo quam. Unde autem enim fugiat est beatae ex. Provident deleniti ea qui.
   + Magni error voluptatem ut quo natus.
   + Et rerum illum quidem perspiciatis molestiae.
   + Omnis cupiditate sapiente quis eius animi officiis vel.

</div>
<div class="block two">
![Hero]({{ site.url }}/openactive/assets/images/icons-animation.gif)

</div>
</article>

***

<article class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</article>
<article class="subgrid">
<div class="block two">

![placeholder]({{ site.url }}/openactive/assets/images/placeholder.png)

</div>
<div class="block two">

### Why It Matters
Velit magni soluta distinctio enim. Eos repellat illum temporibus consequatur consequatur cum eos. Adipisci eum magnam ut. Molestiae qui voluptas consequuntur maiores nemo quam. Unde autem enim fugiat est beatae ex. Provident deleniti ea qui.
   + Magni error voluptatem ut quo natus.
   + Et rerum illum quidem perspiciatis molestiae.
   + Omnis cupiditate sapiente quis eius animi officiis vel.

</div>
</article>

***

<article class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</article>
<article>

### Opportunity Data Explained
+ A explanation of what Opportunity data **is** and what is **isn't**
    + Graphics
    + Text Content
    + FAQ's

</article>

***

<article class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</article>

<article>
### What data is available
+ A explanation of what Opportunity data is **already** available

***

</article>

### Case Studies

<article class="notes">

##### Section Notes ~ Case Studies Block
**Purpose**: This section is used to showcase organisations that are already involved in the initiative. A selection of featured case studies will be represented by their logo in a grid.

**Functionality**: The logos will act as a tabbing system to reveal content from the case study, this would consist of some fast facts about each case.

**Design**: The design of this section should be balanced and clearly represent to a user the functionality of the tabs, this would include clearly  active state on tabs to the open content area.

**Copy-writing Notes**:
</article>

<article class="case-studies subgrid">
<div class="block two subgrid">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="block three case-tab" data-tab="{{ forloop.index }}">
<img src="{{post.thumbnail_image | relative_url}}">
</div>
{% endif %}
{% endfor %}
</div>

<div class="block two">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="block three case-content" id="{{ forloop.index }}">
<img src="{{post.thumbnail_image | relative_url}}">
<h6>{{ post.title | escape }}</h6>
{{post.content}}
</div>
{% endif %}
{% endfor %}
</div>
</article>


***

<article class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</article>

<article>
### E-Learning
+ Text to introduce the ways to learn more about the initiative
    + [How to's]( {{ site.baseurl }}{% link how-to.md %})  
    + [Discussions]( {{ site.baseurl }}{% link discussions.md %})  
    + [References]( {{ site.baseurl }}{% link references.md %})  
    + [Tutorials]( {{ site.baseurl }}{% link tutorials.md %})  

***

</article>

<article class="notes">

##### Section Notes
**Purpose**:

**Functionality**:

**Design**:

**Copy-writing Notes**:

</article>

<article>
<div class="block one call_to_action">

### Getting Started
Text Content
Now you know how it works, let’s look at how you can make your data available or use a dataset for your own application.

[Getting Started]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}


</div>
</article>