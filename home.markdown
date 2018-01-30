---
title: Home
permalink: "/"
position: 0
is_main_navigation: false
layout: home
---

{::options parse_block_html="true" /}

<article class="note-wrap">
<div class="notes">

##### Page Notes ~ {{ page.title | escape }}
Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1pSzce8tiNHg8eMKUop4FozaJkhGAXNXYpLSANFf-0Z0){:target="_blank"}

</div>
</article>


<article class="note-wrap">
<div class="notes">
##### Section Notes ~ Hero Block
**Purpose**: This section is the first thing all users will see, we are showcasing the video along with key benefits. The benefits should appeal to all levels of users

**Functionality**: A video is embedded from youtube

**Design**:

**Copy-writing Notes**:
</div>
</article>
<article class="hero--home">
<nav class="hero_tab_nav">
<div class="hero-tab" data-tab="h1"></div>
<div class="hero-tab" data-tab="h2"></div>
<div class="hero-tab" data-tab="h3"></div>
</nav>
<div>
<h1>Welcome to OpenActive</h1>
<ul class="hero_tab_content">
<li class="hero-content" id="h1"><p>Increase our nation’s physical health and transform a sector with
    open data</p></li>
<li class="hero-content" id="h2"><p>Boost visibility of your activities and reach everyone,
    everywhere</p></li>
<li class="hero-content" id="h3"><p>Innovate with open data to make discovering ways to get active
    easier</p></li>
</ul>
[How it Works]( {{ site.baseurl }}{% link how-it-works.md %}){: .button-primary}
</div>
<figure>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kfVCRaMJarE" frameborder="0"
    allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>
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
##### Section Notes ~ Tabbed Content
**Purpose**: These tabs are used to help guide users based on their orientation toward initiative, The first tab would be geared toward a general explanation, whereas the other tabs would be aimed at providing a insight into other specific use cases, such as using or sharing data. Each item will provide a call action to encourage users further along the path.

**Functionality**: The the content will be housed in a tabbing system, and the active tab could be changed to suite phases of the initiative.

**Design**: The design should be lead by established web conventions, this will aid users when interpreting the content.

**Copy-writing Notes**:
</div>
</article>



<article class="tabs blue">

<h2 class="sub-heading-two">Where to start?</h2>

<div id="tabs">

<div class="tabsList " role="tablist" >


<h4 class="tablink" role="presentation" aria-selected="true">
<a href="#how-it-works">How it Works</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h4>

<div role="tabpanel" id="how-it-works" class="tabPanel" aria-hidden="false" aria-labelledby="how-it-works">
<h3> How it Works</h3>
<p>OpenActive makes it easier for people to discover and take part in sport and physical activities. Using
open data your activities can become available, everywhere. From websites and apps that attract millions
of users, to communities and services that engage local people.</p>
<a class="button-primary" href="{{ site.baseurl }}{% link how-it-works.md %})">How it Works</a>
</div>


<h4 class="tablink" role="presentation" aria-selected="false">
<a href="#booking-systems">Booking Systems</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h4>

<div role="tabpanel" id="booking-systems" class="tabPanel" aria-hidden="true"
aria-labelledby="booking-systems">

<h3>Booking Systems</h3>
<ol>
<li>Add an open data tick-box to your system so your customers can publish activities openly</li>
<li>Let customers publish activity listings by building a simple and standardised API</li>
<li>Find your customer listings in the OpenActive directory for anyone to access, use or share</li>
<li>Your customers&rsquo; activities are available everywhere. From websites and apps that attract
millions of users, through to communities and services that engage local people.
</li>
</ol>
<a class="button-primary" href="{{ site.baseurl }}{% link getting-started.md %}">Getting Started</a>

</div>



<h4 class="tablink" role="presentation" aria-selected="false">
<a href="#activity-provider">Activity Providers</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h4>

<div role="tabpanel" id="activity-provider" class="tabPanel" aria-hidden="true"
aria-labelledby="activity-provider">

<h3>Activity Providers</h3>
<ol>
<li>You list activities in your existing website or booking system</li>
<li>You use your website or booking system to publish your activity listings information using the
OpenActive data standards as a &ldquo; dataset &ldquo;
</li>
<li>Your dataset is listed in our directory, for anyone to access, use or share.</li>
<li>Your activities are available everywhere. From websites and apps that attract millions of users,
through to communities and services that engage local people.
</li>
</ol>
<a class="button-primary" href="{{ site.baseurl }}{% link getting-started.md %}">Getting Started</a>
</div>


<h4 class="tablink" role="presentation" aria-selected="false">
<a href="#use-data">Use Data</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h4>

<div role="tabpanel" id="use-data" class="tabPanel" aria-hidden="true" aria-labelledby="use-data">

<h3>Use Data</h3>
<p>Pick a data source from the list available on OpenActive.
Join their mailing list and review the documentation.
Pull in the data to your website or app. If you need help reach out to the OpenActive Community.</p>
<a class="button-primary" href="{{ site.baseurl }}{% link getting-started.md %}">Getting Started</a>

</div>

<!-- <div class="slider"></div> -->

</div>

</div>


</article>


<article class="note-wrap">
<div class="notes">
##### Section Notes ~ CTA Blocks Small
**Purpose**: This section is used to direct users around the site

**Functionality**: These blocks will contain at minimum title, excerpt & button.

**Design**: These represent call to action blocks at a lower hierarchy, the design should reflect this. For example these would be a lower level of prominence than a full with call to action.

**Copy-writing Notes**:
</div>
</article>


<article class="call_to_action itle-row">
<div class="subgrid">
<div class="three getting-started">

#### Getting Started
Take the first step enabling open data in your system.

[Getting Started]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary}


</div>
<div class="three developer">


#### Developer
Get stuck into the docs and start using or publishing data today!

[Developer]( {{ site.baseurl }}{% link developer.md %}){: .button-primary}


</div>
<div class="three community">

#### Community
What's happening in the community, and how you can get involved!

[Community]( {{ site.baseurl }}{% link community.md %}){: .button-primary}


</div>
</div>

</article>

<article class="note-wrap">
<div class="notes">
##### Section Notes
**Purpose**: The purpose of this section is to graphically clarify for users exactly what open data is

**Functionality**: This section will support text and graphics.

**Design**: This is a opportunity to animate graphics to create visual intrigue.

**Copy-writing Notes**: Reinforcing link with the ODI and open data as a whole, some users may not be aware of it's pervasiveness and the network behind OA
</div>
</article>

<article class="title-row">
<h2 class="sub-heading-two"> What is <br>Open Data?</h2>
<div class="two">
<h3>Corporis sint</h3>
<p class="reset-style">Molestiae similique numquam quia dolore quod ut temporibus sit. Maiores vel nostrum ut est. Voluptas assumenda qui veritatis quisquam. Qui adipisci dolores perferendis mollitia eligendi error aut laboriosam. Consequatur sequi sequi facilis reiciendis in rerum enim.</p>
<p></p>
</div>
<div class="two">

{% include line_graphic.svg %}



</div>


</article>

<article class="note-wrap">
<div class="notes">
##### Section Notes ~ CTA Block Large
**Purpose**: This section is used to direct users to specific pages. In this case to promote the accelerator program

**Functionality**: This full width call to action section will provide a title, excerpt and button.

**Design**: This represents a call to action blocks at a higher hierarchy, the design should reflect this. For example these full width call to action's would have a higher prominence than smaller ones, but take design cues.

**Copy-writing Notes**:
</div>
</article>

<article class="call_to_action--full-width brand-ten-bc">
<h2 class="sub-heading-two">Join</h2>
<div class="one">

### The Accelerator Program
Autem quidem repellendus explicabo itaque accusantium. Est aut ullam voluptatem omnis in rem. Qui perspiciatis ut nobis maxime eligendi similique. Non culpa voluptatem enim nostrum et et.

[Start Ups]( {{ site.baseurl }}{% link start-ups.md %}){: .button-primary}


</div>

<figure class="brand-nine-bc">
<div style="background: url({{ site.url }}/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
</figure>

</article>


<article class="note-wrap">
<div class="notes">
##### Section Notes
**Purpose**: This section will expose some latest blog posts for users to quickly gain a insight into recent activity.

**Functionality**: Each contain article block will support a title, excerpt, author, post date and thumbnail.

**Design**: The design should be lead by established web conventions with regards to article lists so users are able to easily interpret content they are seeing.

**Copy-writing Notes**:
</div>
</article>


<article class="post-list">
<h3 class="sub-heading-two"> Latest News</h3>
<div class="posts ">
{% for post in site.posts %}
{% if post.is_featured %}
<div class="post subgrid" id="post-{{ forloop.index }}">
<figure class="">
<img src="{{post.thumbnail_image | relative_url}}">
</figure>
<div class="">
<h3>{{ post.title | escape }}</h3>
{{ post.content | strip_html | truncatewords:75 }}

<a class="button-primary" href="{{ post.url | relative_url }}">Read More</a>
</div>
</div>
{% endif %}
{% endfor %}
</div>
</article>







