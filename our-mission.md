---
title: Our Mission
permalink: "/our-misson/"
position: 1
is_main_navigation: true
layout: page
---

{::options parse_block_html="true" /}

Content for this page is detailed in the
[Google Doc](https://drive.google.com/open?id=1cOIWKH_yIbYhG7pzKTe31shjfqSgBU5JlKRZrqUazug){:target="_blank"}


***

<div class="notes">

##### Section Notes ~ Hero Block
**Purpose**:  
**Functionality**:  
**Design**:     
**Copy-writing Notes**: 

</div>

<section class="hero">
<div class="block two">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kfVCRaMJarE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<div class="block two">
<h3>{{ page.title | escape }}</h3>
<p>OpenActive is an ambitious, community-led initiative for change across the sport and physical activity sector, which promotes the use of opportunity data to help people get active. It is being coordinated by the Open Data Institute (ODI), an independent, non-profit, non-partisan organisation. Our goal is to make data on what, where and when physical activity sessions happen, openly available. This “opportunity data” includes details of a yoga class (“how much will it cost?”) through to badminton court availability (“where and when is a court available?”).</p> 
[Read More]( {{ site.baseurl }}{% link our-mission-full.md %}){: .primary_cta} 
</div>
</section>


***
<div class="notes">

##### Section Notes
**Purpose**:  
**Functionality**:  
**Design**:     
**Copy-writing Notes**: 

</div>

<section>
<div class="block two tworight">


### What Is Open Active?
We are bringing together sports and physical activity organisations from across the sector to open up their opportunity data, from leisure operators to National Governing Bodies, local sports clubs to event providers, walking groups to fitness instructors. We are also helping other organisations to use this opportunity data to build interesting tools and experiences for consumers.

</div>


<div class="block two tworight">

### We support organisations to:

+ **Open up data** – helping them to share and publish data with an open licence.
+ **Innovate with data** – helping them to use opportunity data to engage their audience.
+ **Learn about data** – providing ODI-certified training to ensure organisations understand what open data is and how publishing data can benefit them.
+ **Create data standards** – collaborating to create common standards for consistent, reliable data, which fuels innovation.
+ **Build momentum – spreading** the message within the sector, and contributing to supporting materials that anyone can use.
+ The OpenActive community was started by a group of enthusiastic sports and physical activity organisations who wanted to reach new audiences with better opportunities to get active, using data and smart technology. The ODI is calling on all organisations interested in using opportunity data to get more people active, to join the community.

</div>
</section>

***
<div class="notes">

##### Section Notes
**Purpose**:  
**Functionality**:  
**Design**:     
**Copy-writing Notes**: 

</div>


### Benefits
<section>
<div class="block three">

**SPORTS & PHYSICAL ACTIVITY PROVIDERS**
+ Make physical activity sessions and facilities easier to find: get more people through the door!
+ Promote quiet sessions to new audiences
+ Improve data skills and understanding by attending training sessions
+ Collaborate on the future of OpenActive, and the data standards

</div>
<div class="block three">
    
**DATA USERS AND DEVELOPERS**
+ Access open and usable data from across the sector
+ Develop new products to get people more active, and enhance existing ones
+ Shape the development of the standards and engage with data publishers
    
</div>
<div class="block three">

**INFLUENTIAL ORGANISATIONS**
+ Build participation in sport by improving the reach and visibility of opportunities
+ Provide additional support to members by showing how publishing their data can help them improve efficiency
+ Improve data skills and understanding by attending training sessions
+ Give members the opportunity to join the OpenActive community and shape the initiative

</div>
</section>

***

<div class="notes">

##### Section Notes
**Purpose**:  
**Functionality**:  
**Design**:     
**Copy-writing Notes**: 

</div>

<section>
<div class="block one call_to_action">

### How It Works
How it works call to action section  

[How it Works]( {{ site.baseurl }}{% link how-it-works.md %}){: .primary_cta} 

</div>
</section>

***


***
### Meet The Community
+ Community Section
    + Snippet
    + Thumbnail
    + [Community]( {{ site.baseurl }}{% link community.md %})  

<section class="post_list">

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




***
