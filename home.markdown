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
<li class="hero-content" id="h1"><p>Improve our nation’s physical health, and harness open data to enhance the  sport and physical  sector’s performance.</p></li>
<li class="hero-content" id="h2"><p>Reach out to people across the country and help your activities gain visibility.</p></li>
<li class="hero-content" id="h3"><p>Innovate with open data and make finding new ways to get active even easier
</p></li>
</ul>
[How it Works]( {{ site.baseurl }}{% link how-it-works.md %}){: .button-primary--alt}
</div>
<figure aria-labelledby="open-active-video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kfVCRaMJarE" frameborder="0"
    allow="autoplay; encrypted-media" allowfullscreen></iframe>
<figcaption id="open-active-video" class="hidden" >{{ post.title | escape }}</figcaption>
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

<figure role="group" aria-labelledby="fig-{{ forloop.index }}">

<img src="{{ theImage  | relative_url}}" alt="{{ post.title | escape }} Icon"/>

<figcaption aria-hidden="true" id="fig-{{ forloop.index }}" class="hidden" >{{ post.title | escape }}</figcaption>
</figure>

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
<a class="button-primary--ghost" href="{{ post.url | relative_url }}">Read More</a>

</div>
{% endif %}
{% endfor %}
</figure>


<aside class="case-study-info">
{% for post in site.case_studies %}
{% if post.is_featured %}
<div class="case-content" data-id="{{ forloop.index }}">
<h6>DATA EXPOSED</h6>
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



<article markdown="0" class="tabs blue">

<h2 class="sub-heading-two">Where to start?</h2>

<div  id="tabs">

<div  class="tabsList " role="tablist" >


<h4 class="tablink" role="presentation" aria-selected="true">
<a href="#how-it-works">How it Works</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h4>

<div role="tabpanel" id="how-it-works" class="tabPanel" aria-hidden="false" aria-labelledby="how-it-works">
<h3> How it Works</h3>
<p>OpenActive makes discovering and taking part in  sport and fitness activities easier than ever before. With open data, your activities can be available to people across the country,  on websites and apps that attract millions of users, to communities and services that engage local people.</p>
<a class="button-primary" href="{{ site.baseurl }}{% link how-it-works.md %})">Discover More</a>
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
<li>To get started, add an open data tick-box to your system so your customers can begin publishing open data.</li>
<li>Build in simple data tools to allow your customers to publish activity listings, and use OpenActive data standards to improve existing datasets.
</li>
<li>Datasets will be listed in our directory for anyone to access, use, and share.</li>
<li>Now, your customers’ activities will be available everywhere, from high-traffic online platforms,, to local community services. </li>
</ol>
<p>Publish your activity listing and join the open data revolution.</p>
<a class="button-primary" href="{{ site.baseurl }}{% link getting-started.md %}">Start Now</a>

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
<li>List your activity details on your existing website or booking system.</li>
<li>Publish your activity information using our OpenActive data standards. 
</li>
<li>Your dataset will be listed in our directory for anyone to access, use, and share.</li>
<li>Now, your activities will be available everywhere, from high-traffic online platforms, to local community services.
</li>
</ol>
<p>Publish your activity listing and join the open data revolution</p>
<a class="button-primary" href="{{ site.baseurl }}{% link getting-started.md %}">Start Now</a>
</div>


<h4 class="tablink" role="presentation" aria-selected="false">
<a href="#use-data">Use Data</a>
<i class="icon_wrap_accordian">
<i class="icon"></i>
</i>
</h4>

<div role="tabpanel" id="use-data" class="tabPanel" aria-hidden="true" aria-labelledby="use-data">

<h3>Use Data</h3>
<ol>
<li>Pick a data source from the list available on OpenActive.</li>
<li>Join their mailing list and review the documentation.</li>
<li>Pull in the data to your website or app. If you need help reach out to the OpenActive Community.</li>
</ol>
<a class="button-primary" href="{{ site.baseurl }}{% link getting-started.md %}">Getting Started</a>

</div>

<!-- <div class="slider"></div> -->

</div>

</div>

<i class="line-graphic">{% include line-graphic-side.svg %}</i>


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
<div class="three blue-gradient-bc">

#### Getting Started
Take the first step enabling open data in your system.

[Getting Started]( {{ site.baseurl }}{% link getting-started.md %}){: .button-primary}


</div>
<div class="three purple-gradient-bc">


#### Developer
Get stuck into the docs and start using or publishing data today!

[Developer]( {{ site.baseurl }}{% link developer.md %}){: .button-primary}


</div>
<div class="three red-gradient-bc ">

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
<div class="one">
<h3>Corporis sint</h3>
<p class="reset-style">Molestiae similique numquam quia dolore quod ut temporibus sit. Maiores vel nostrum ut est. Voluptas assumenda qui veritatis quisquam. Qui adipisci dolores perferendis mollitia eligendi error aut laboriosam. Consequatur sequi sequi facilis reiciendis in rerum enim.</p>
<p></p>
</div>
<div class="one">

{% include blank.svg %}



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
<div style="background: url({{ site.url }}/openactive/assets/images/sideplank.jpg)center center / cover no-repeat;"></div>
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


<article class="post-list title-row">
<h2 class="sub-heading-two"> Latest News</h2>
{% for post in site.posts %}
{% if post.is_featured %}
<div class="two" id="post-{{ forloop.index }}">
<figure>
<img src="{{post.thumbnail_image | relative_url}}">
</figure>
<h3>{{ post.title | escape }}</h3>
<div class="subgrid brand-one-b">
<div class="two twoleft">
{{ post.content | strip_html | truncatewords:75 }}

<a class="button-primary" href="{{ post.url | relative_url }}">Read More</a>
</div>

<div class="two twoleft">
{% include share-page.html %}
{{post.date}}
</div>
</div>
</div>
{% endif %}
{% endfor %}
</article>







