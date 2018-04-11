---
title: Simple Publish
permalink: "/simple-publish/"
position: 20
is_main_navigation: false
thumbnail_image: "/uploads/sideplank.jpg"
strapline: Explanation of how to begin publishing data.
layout: page-hero
---

{::options parse_block_html="true" /}


<article>
<div class="two twoleft">

### Why should I open my data?
We believe the most useful data for consumers is opportunity data.  This is data that describes a physical activity including what it is, where and when it's taking place. Opportunity data includes enough information for a participant to decide whether an activity is right for them.

We are encouraging organisations to openly publish their data, in the same way they currently publish web pages on the internet. Opening up opportunity data according to a commonly agreed standard can make it easier to find and use by others.  Attaching an open licence means that it can be accessed, used, and shared by anyone.

While we cannot predict what new services will be created once opportunity data is opened, we will support and encourage new and existing organisations to innovate in response to the needs of consumers.

In the long-term, open opportunity data will help activity providers deliver a better experience and attract and retain customers. This will help the sector as a whole to get people more active. Joining OpenActive now means you can work with the Open Data Institute to shape how we get there.

</div>
<div class="two twoleft">

### Benefits
* With open data publishing, your services and events can be shared everywhere, from high-traffic apps to community-driven pages.
* Improve data skills and understanding within your organisation and harness technology to benefit your business.
* Drive innovation, and collaborate with OpenActive to revolutionise the sector.

</div>
</article>


<article class="invert publish-steps">
<h2 class="sub-heading-two">How to publish your data</h2>

<div class="one">

### 5 Steps to publishing your data
The steps below are designed for organisations who already have a booking system or website that lists opportunities to be active. If you do not have either of these, but would like to learn more about how to open up your data, please go to our Learn about data page, or contact us.

<!--  ---------------->
<!-- STEP ONE -->
<!--  ---------------->
##### 1) Build your OpenActive API
Send the [specification](https://github.com/openactive/realtime-paged-data-exchange/blob/master/README.md){:target="_blank"} details to your technical team, and ask them to open up your session data according to the OpenActive specification. Note this is usually an additional API to any that you may already have, and should be simple to implement.

[See more](#){:.show_hide-content}
<div class="extra-content">

A sentence for your tech team: “Please create a new JSON endpoint that conforms to the OpenActive RTPE specification. The specification is designed to be simple to implement, take a look at the examples in the [Activation Issue Tracker](https://github.com/openactive/activation){:target="_blank"} to get an idea.”
###### (estimated time to complete: 2-3 developer days)
</div>


<!--  ---------------->
<!-- STEP TWO -->
<!--  ---------------->
##### 2) Choose a license
License your data for anyone to access, use, and share. The Open Data Institute recommends the [Creative Commons Attribution Licence (cc-by) version 4](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}. Inform your tech team. See more
Using the recommended licence is low risk and represents no commitment. The cc-by licence is the most common in use for publishing open data, and importantly, version 4 includes specific provision for database rights. Generic open data licensing guidance is also available.


[See more](#){:.show_hide-content}
<div class="extra-content">

Once you have selected a licence, inform your developer of your decision so that they can make the appropriate changes to the API.

If your legal department needs to be consulted, reassure them that this is the same licence that Wikipedia uses for its content, and is the most common licence in use for open data published on the internet. The licence can also be replaced or revoked at any time and represents no commitment from you.
###### (estimated time to complete: 5 minutes)
</div>

<!--  ---------------->
<!-- STEP THREE -->
<!--  ---------------->
##### 3) Amend terms and build an opt-out
If you do not own the data (e.g. in the case of a booking system provider), then you need to ensure that you obtain permission to publish the data. See more

You need to amend your terms and conditions to indicate that your users' sessions will be published openly. You may also give your users an option to opt-out of session publishing, while sending them an e-mail notifying them that you are turning data sharing on.

[See more](#){:.show_hide-content}
<div class="extra-content">

A simple addition to your Terms and Conditions similar to the following:

###### Publishing sessions openly
Information about your session that is already available publicly (e.g. title, location, description, date/time, price, images) will be published as open data for anyone to access, use and share, licensed under the Creative Commons Attribution License (cc-by) version 4. This gives your sessions more visibility by publishing them openly to apps and websites that will help you promote your sessions, including but not limited to, those listed here. This will help more people find your sessions, and will not incur any additional cost to you. [You may opt-out of this free service in your settings page.]
A simple opt-out checkbox visible in your application as below:

###### Publish sessions openly
Information about your sessions that is already available publicly (e.g. title, location, description, date/time, price, images) is published for anyone to access, use, and share. This helps more people find your sessions, by making them visible on other apps and websites such as the ones listed here. This does not incur any additional cost to you.

A simple e-mail alert similar to the following:

###### Publishing sessions openly
We are now giving your sessions more visibility by publishing information about them that is already available publicly (e.g. title, location, description, date/time, price, images) openly to apps and websites that will help you promote your sessions, such as the ones listed here. This will help more people find your sessions, and will not incur any additional cost to you. If you want to opt-out of this free service, go to your settings page.

###### (booking systems only - estimated time to complete: 30 minutes / 1 developer day)

</div>

<!--  ---------------->
<!-- STEP FOUR -->
<!--  ---------------->
##### 4) Create a dataset homepage
To publish open data for anyone to freely access, use, and share, you must create a webpage that describes the data you are publishing.
You must also include relevant human and machine readable licensing information, documentation, a mailing list, and ideally an issue tracker. You must specify how dataset users (innovators who want to build on top of/use your data) should attribute your data.

[See more](#){:.show_hide-content}
<div class="extra-content">

The [Dataset Site Generator](https://github.com/openactive/dataset-site-generator/wiki){:target="_blank"} includes a template site, and complete step-by-step guides designed for non-technical users, to quickly and easily create a sub-site that contains all of the above. Although it is possible to do this without the generator, by following the ODI guides for [metadata](https://theodi.org/knowledge-opinion/guides/){:target="_blank"} and rights statements, we recommend using the Dataset Site Generator to save you time and to benefit from additional updates - it's a free and open source!

As with all of OpenActive, your feedback would be hugely appreciated. Please create an issue on this [issue tracker](https://github.com/openactive/dataset-site-generator/issues){:target="_blank"} with any feedback, or comment on the guides directly.

###### (estimated time to complete: 1.5 hours)

</div>

<!--  ---------------->
<!-- STEP FIVE -->
<!--  ---------------->
##### 5) Create an open data certificate
The Open Data Institute encourages all publishers to create an [Open Data Certificate](https://certificates.theodi.org/en/){:target="_blank"} for any open data published. If your dataset site has been set up correctly, it should automatically populate much of the Open Data Certificate form.
###### (estimated time to complete: 30 minutes)

</div>
</article>

<article class="call_to_action">
<div class="two">

### Find out more
If you are interested in opening up your opportunity data or finding out more about it, the Open Data Institute is offering free consultations to discuss the benefits and help you to do this. Please contact us to find out more.

<a class="button-primary" href="mailto:hello@openactive.io">Contact</a>


</div>
<div class="two">


### Help us shape this
This guidance is evolving, and everyone is welcome to contribute. Shape the direction of this specification by joining our W3C Community Group, or get involved more broadly with OpenActive by getting in touch.

[W3C Community]( {{ site.baseurl }}{% link w3c-community.md %}){: .button-primary}


</div>
</article>


<!--  ---------------->
<!-- ACCELERATOR BLOCKS -->
<!--  ---------------->
<article class="call_to_action--full-width global">
<h2 class="sub-heading-two">Start ups</h2>
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
