new Vue({
    el: '#app',
    data: {
      person: {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Tu Nombre",
        "email": "tu-email@dominio.com",
        "telephone": "+1234567890"
      }
    },
    mounted() {
      var script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(this.person);
      document.head.appendChild(script);
    }
  });
  