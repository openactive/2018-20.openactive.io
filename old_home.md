---
title: OLD-Home
permalink: "/"
position: 0
is_main_navigation: false
layout: page
---

{::options parse_block_html="true" /}

<article class="notes">

##### Page Notes \~ {{ page.title | escape }}

Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1pSzce8tiNHg8eMKUop4FozaJkhGAXNXYpLSANFf-0Z0){:target="_blank"}

</article>

<article class="notes">

##### Section Notes \~ Hero Block

**Purpose**: This section is the first thing all users will see, we are showcasing the video along with key benefits. The benefits should appeal to all levels of users

**Functionality**: A video is embedded from youtube

**Design**:

**Copy-writing Notes**:

</article>
<nav class="hero_tab_nav">
<div class="hero-tab" data-tab="h1"></div>
<div class="hero-tab" data-tab="h2"></div>
<div class="hero-tab" data-tab="h3"></div>
</nav>
<article class="hero subgrid">
<div class="block two">

<h1>Welcome to OpenActive G</h1>

<ul class="hero_tab_content">
<li class="hero-content" id="h1"><p>Increase our nation’s physical health and transform a sector with open data</p></li>
<li class="hero-content" id="h2"><p>Boost visibility of your activities and reach everyone, everywhere</p></li>
<li class="hero-content" id="h3"><p>Innovate with open data to make discovering ways to get active easier</p></li>
</ul>

\[How it Works\]( {{ site.baseurl }}{% link how-it-works.md %}){: .primary_cta}

</div>
<div class="block two">

<iframe width="560" height="315" src="https://www.youtube.com/embed/kfVCRaMJarE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>
</article>

<h2 class="sub-heading-two">Case<br> Studies</h2>

<article class="notes">

##### Section Notes \~ Case Studies Block

**Purpose**: This section is used to showcase organisations that are already involved in the initiative. A selection of featured case studies will be represented by their logo in a grid.

**Functionality**: The logos will act as a tabbing system to reveal content from the case study, this would consist of some fast facts about each case.

**Design**: The design of this section should be balanced and clearly represent to a user the functionality of the tabs, this would include clearly  active state on tabs to the open content area.

**Copy-writing Notes**:
</article>

<article class="case-studies subgrid">
<div class="block two twoleft subgrid">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="block six case-tab" data-tab="{{ forloop.index }}">

<!-- <img src="{{post.thumbnail_image | relative_url}}"> -->

</div>
{% endif %}
{% endfor %}
</div>

<div class="block two twoleft case-wrap">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="block three case-content" id="{{ forloop.index }}">
<h3>{{ post.title | escape }}</h3>
{{post.content}}
<a class="primary_cta" href="{{ post.url | relative_url }}">Read More</a>

</div>
{% endif %}
{% endfor %}
</div>
</article>

<aside class="case-study-info">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="block three case-content aside" data-id="{{ forloop.index }}">
<h5>DATA EXPOSED</h5>
<p>Date</p>
<p>Location</p>
<p>Disabled Access</p>
<p>{{ post.title | escape }}</p>

</div>
{% endif %}
{% endfor %}
</aside>

<h2 class="sub-heading-two">What do you<br> want to do?</h2>

<article class="notes">

##### Section Notes \~ Tabbed Content

**Purpose**: These tabs are used to help guide users based on their orientation toward initiative, The first tab would be geared toward a general explanation, whereas the other tabs would be aimed at providing a insight into other specific use cases, such as using or sharing data. Each item will provide a call action to encourage users further along the path.

**Functionality**: The the content will be housed in a tabbing system, and the active tab could be changed to suite phases of the initiative.

**Design**: The design should be lead by established web conventions, this will aid users when interpreting the content.

**Copy-writing Notes**:
</article>

<article id="tabs">

<ul class="tabsList" role="tablist">
<li role="presentation" aria-selected="true"><a href="#how-it-works">How it Works</a></li>
<li role="presentation" aria-selected="false"><a href="#booking-systems">Booking Systems</a></li>
<li role="presentation" aria-selected="false"><a href="#activity-provider">Activity Providers</a></li>
<li role="presentation" aria-selected="false"><a href="#use-data">Use Data</a></li>
<div class="slider"></div>

</ul>
<div role="tabpanel" id="how-it-works" class="tabPanel" aria-hidden="false" aria-labelledby="how-it-works">

### How it Works

OpenActive makes it easier for people to discover and take part in sport and physical activities. Using open data your activities can become available, everywhere. From websites and apps that attract millions of users, to communities and services that engage local people.

\[How it Works\]( {{ site.baseurl }}{% link how-it-works.md %}){: .primary_cta}

</div>
<div role="tabpanel" id="booking-systems" class="tabPanel" aria-hidden="true" aria-labelledby="booking-systems">

### Booking Systems

<ol>
<li>Add an open data tick-box to your system so your customers can publish activities openly</li>
<li>Let customers publish activity listings by building a simple and standardised API</li>
<li>Find your customer listings in the OpenActive directory for anyone to access, use or share</li>
<li>Your customers’ activities are available everywhere. From websites and apps that attract millions of users, through to communities and services that engage local people.</li>
</ol>

\[Getting Started\]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}

</div>
<div role="tabpanel" id="activity-provider" class="tabPanel" aria-hidden="true" aria-labelledby="activity-provider">

### Activity Providers

<ol>
<li>You list activities in your existing website or booking system</li>
<li>You use your website or booking system to publish your activity listings information using the OpenActive data standards as a “ dataset “</li>
<li>Your dataset is listed in our directory, for anyone to access, use or share.</li>
<li>Your activities are available everywhere. From websites and apps that attract millions of users, through to communities and services that engage local people.</li>
</ol>

\[Getting Started\]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}

</div>
<div role="tabpanel" id="use-data" class="tabPanel" aria-hidden="true" aria-labelledby="use-data">

### Use Data

Pick a data source from the list available on OpenActive.
Join their mailing list and review the documentation.
Pull in the data to your website or app. If you need help reach out to the OpenActive Community.

\[Getting Started\]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}

</div>
</article>

<article class="notes">

##### Section Notes \~ CTA Blocks Small

**Purpose**: This section is used to direct users around the site

**Functionality**: These blocks will contain at minimum title, excerpt & button.

**Design**: These represent call to action blocks at a lower hierarchy, the design should reflect this. For example these would be a lower level of prominence than a full with call to action.

**Copy-writing Notes**:
</article>

<article class="subgrid">
<div class="block three call_to_action">

#### Getting Started

Take the first step enabling open data in your system.

\[Getting Started\]( {{ site.baseurl }}{% link getting-started.md %}){: .primary_cta}

</div>
<div class="block three call_to_action">

#### Developer

Get stuck into the docs and start using or publishing data today!

\[Developer\]( {{ site.baseurl }}{% link developer.md %}){: .primary_cta}

</div>
<div class="block three call_to_action">

#### Community

What's happening in the community, and how you can get involved!

\[Community\]( {{ site.baseurl }}{% link community.md %}){: .primary_cta}

</div>
</article>

<h2 class="sub-heading-two"> What is <br>Opportunity Data</h2>

<article class="notes ">

##### Section Notes

**Purpose**: The purpose of this section is to graphically clarify for users exactly what is and isn't included in Opportunity Data.

**Functionality**: This section will support text and graphics.

**Design**: This is a opportunity to animate graphics to create visual intrigue.

**Copy-writing Notes**:
</article>

<article>

* An explanation to what and what does not constitute Opportunity Data.

* Graphics

* Text Content
  </article>

<article class="notes">

##### Section Notes \~ CTA Block Large

**Purpose**: This section is used to direct users to specific pages. In this case to promote the accelerator program

**Functionality**: This full width call to action section will provide a title, excerpt and button.

**Design**: This represents a call to action blocks at a higher hierarchy, the design should reflect this. For example these full width call to action's would have a higher prominence than smaller ones, but take design cues.

**Copy-writing Notes**:
</article>

<article class="full-width share-path">

<h2 class="sub-heading-two">Join</h2>

<div class="block one call_to_action">

## The Accelerator Program

Autem quidem repellendus explicabo itaque accusantium. Est aut ullam voluptatem omnis in rem. Qui perspiciatis ut nobis maxime eligendi similique. Non culpa voluptatem enim nostrum et et.

\[Start Ups\]( {{ site.baseurl }}{% link start-ups.md %}){: .primary_cta}

</div>

<figure>
<img src="{{ site.url }}/openactive/assets/images/placeholder.png">
</figure>

</article>

<h3 class="sub-heading-two">  Latest News</h3>

<article class="notes">

##### Section Notes

**Purpose**: This section will expose some latest blog posts for users to quickly gain a insight into recent activity.

**Functionality**: Each contain article block will support a title, excerpt, author, post date and thumbnail.

**Design**: The design should be lead by established web conventions with regards to article lists so users are able to easily interpret content they are seeing.

**Copy-writing Notes**:
</article>

<article class="post_list">
{% for post in site.posts %}\
{% if post.is_featured %}
<div class="block one subgrid" id="post-{{ forloop.index }}">
<div class="block two tworight">
<img src="{{post.thumbnail_image | relative_url}}">
</div>
<div class="block two tworight">
<h3>{{ post.title | escape }}</h3>
{{ post.content | strip_html | truncatewords:75 }}

<a class="primary_cta" href="{{ post.url | relative_url }}">Read More</a>
</div>
</div>
{% endif %}
{% endfor %}
<div class="block one">
<a class="primary_cta" href="{{ site.baseurl }}{% link blog.md %}">All News</a>
</div>
</article>