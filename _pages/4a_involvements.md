---
layout: page
title: Involvements
permalink: /involvements/
description: An explanation of what I am currently involved in and what I've done in the past
nav: false
display_categories: [Work Experience, Education, Current Activities, Past Activities]
horizontal: false
---

<!-- pages/involvements.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized involvement items -->
  {% for category in page.display_categories %}
  <a id="{{ category | slugify }}" href=".#{{ category | slugify }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_items = site.involvements | where: "category", category %}
  {% assign sorted_items = categorized_items | sort: "importance" | reverse %}
  <!-- Generate cards for each involvement -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_items %}
      {% include projects_horizontal.liquid project=item %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_items %}
      {% include projects.liquid project=item %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
<!-- Display all involvement items without categories -->
{% assign sorted_items = site.involvements | sort: "importance" | reverse %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_items %}
      {% include projects_horizontal.liquid project=item %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_items %}
      {% include projects.liquid project=item %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
