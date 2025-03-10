
function toggleFilters() {
  var container = document.getElementById("filter-container");
  container.classList.toggle("filters--active");
}

function toggleMenu() {
  var navTop = document.getElementById("nav-top");
  navTop.classList.toggle("show-menu");
}

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navTop = document.getElementById('nav-top');

  menuIcon.addEventListener('click', function() {
    navTop.classList.toggle('show-menu');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var anzeigenButton = document.getElementById('anzeigenButton');
  var postleitzahlInput = document.getElementById('postleitzahlInput');

  if (anzeigenButton && postleitzahlInput) {
    anzeigenButton.addEventListener('click', function () {
      // Überprüfe, ob die Postleitzahl gültig ist
      if (postleitzahlInput.checkValidity()) {

        // Öffne die andere Seite
        window.location.replace = 'all-fahrschulen.html';
      } else {
        // Zeige eine Fehlermeldung an
        alert('Bitte geben Sie Ihre Postleitzahl ein.');
      }
    });
  }
});



