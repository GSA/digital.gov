---
layout: docs
title: People
subtitle: A list of all the people in the digital.gov system
dek: Oh hai.
---

# {{ page.title }}
## {{ page.subtitle }}


{% for person in site.people %}
  - {{ person.name.first }} {{ person.name.last }} / {{ person.name.id }}
{% endfor %}

Add a new person in the  `/_people` directory.
