---
layout: default
gallery:
  - src: /assets/img/s-1.jpg
    alt: #
  - src: /assets/img/s-2.jpg
    alt: #
  - src: /assets/img/s-3.jpg
    alt: #
  - src: /assets/img/s-4.jpg
    alt: #
  - src: /assets/img/s-5.jpg
    alt: #
---
<div class="sh-info" />
> Vizyon sahibi bir medya kuruluşu olarak, çalişkan ekibimizle yenilikçi bir bakiş açisiyla başladiğimiz yolda, gündemi takip eden ,günlük yaşantimizda gereken bilgilerle sentezlenmiş ve kültür çeşitliliğine saygi duyan bir yapidayiz..

<div class="sh-gallery">
{% for pic in page.gallery %}
 <img src="{{ pic.src}}" alt="{{ pic.image_alt }}">
{% endfor %}
</div>
