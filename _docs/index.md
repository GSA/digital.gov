---
layout: docs
title: Documentation
subtitle: How to build digital.gov
dek:
permalink: /docs/index.html
---

# {{ page.title }}
## {{ page.subtitle }}


Testing an include:

{% include card/news.html promo='test-promo' %}

<h3>Tags</h3>

{% comment %}
=======================
The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.
=======================
{% endcomment %}
{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign ttags = post.tags | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% comment %}
=======================
The following part removes duplicated tags and invalid tags like blank tag.
=======================
{% endcomment %}
{% assign tags = "" %}
{% for tag in rawtags %}
	{% if tag != "" %}
		{% if tags == "" %}
			{% assign tags = tag | split:'|' %}
		{% endif %}
		{% unless tags contains tag %}
			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}

<ul>
	{% for tag in tags %}
		<li>{{ tag }}</li>
	{% endfor %}
</ul>

<div>
	<select name="tags">
		{% for tag in tags %}
			<option value="{{ tag | downcase }}">{{ tag }}</option>
		{% endfor %}
	</select>
</div>

<fieldset>
  <legend>Select tags</legend>
	{% for tag in tags %}
  <div>
    <input type="checkbox" id="{{ tag | downcase }}" name="{{ tag | downcase }}" value="{{ tag | downcase }}">
    <label for="{{ tag | downcase }}">{{ tag }}</label>
  </div>
	{% endfor %}
</fieldset>
