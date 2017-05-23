---
permalink: /2012/11/21/how-the-department-of-education-automated-publication-of-press-releases/
date: 2012-11-21T15:59:49+00:00
title: How the Department of Education Automated Publication of Press Releases
author: admin
layout: post
categories:
  - Content
tags:
  - CMS
  - Content Management System
  - drupal
  - structured content
  - U.S. Department of Education
---

<div id="attachment_190022" style="width: 260px" class="wp-caption alignright">
  <img class="size-full wp-image-190022" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/250-x-188-Web-design-concept-Gears-on-Html-Code-background-maxkabakov-iStock-Thinkstock-469530729.jpg" alt="Web design concept: Gears on HTML Code background" width="250" height="188" />
  
  <p class="wp-caption-text">
    maxkabakov/iStock/Thinkstock
  </p>
</div>

A case study on how the Department of Education used the Drupal [content management system](https://www.digitalgov.gov/resources/content-management-systems-toolkit/ "Content Management Systems Toolkit") (CMS) to publish press releases as structured content to automatically generate listing pages and reduce errors and posting time.

## The Challenge

The Department of Education was posting press releases using a system that posted them as static HTML files. The site design required press releases to be linked from several different pages, but the system was not designed to create those links automatically. Every time a new press release was posted, content managers had to manually link to multiple locations: the correct monthly archive page, the latest press releases page, the homepage headline area, and the site’s RSS feed.

## The Solution

They moved to a CMS (Drupal) that could store the parts of a press release as data and use database queries to generate the listing pages from that data. Other database-driven CMS will allow you to do this, but may require more development work. Blogging software (like WordPress) can provide this basic functionality, too, if you post your news items as blog posts.

With Drupal, they decided which pieces of information would be useful for sorting and listing (for example, title, press release data, excerpt, keywords), and created a form in the system that would collect each piece in a separate field. They then used the system’s tools (Drupal Views) to build very simple database queries that would generate the listing pages and RSS feeds.

## Results

<div id="attachment_190032" style="width: 260px" class="wp-caption alignright">
  <img class="size-full wp-image-190032" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/250-x-188-Electronic-documents-sharing-Pei-ling-Hoo-Hemera-thinkstock-99708065.jpg" alt="Electronic documents sharing" width="250" height="188" />
  
  <p class="wp-caption-text">
    Pei ling Hoo/Hemera/Thinkstock
  </p>
</div>

They reduced the amount of work associated with posting press releases by about 15 minutes for each one, and removed several opportunities for error. Additionally, the new system allowed easy creation of multiple listings of press releases, such as all press releases tagged with a particular keyword. This would have been impossible with the manual system. Each listing page also has its own RSS feed, which can then be used for further syndication.

## Examples

  * [Automatic press release listing](http://www.ed.gov/news/press-releases) on Department of Education site
  * [Keyword-filtered press release listing](http://www.ed.gov/news/press-releases/tags/esea-flexibility) on Department of Education site