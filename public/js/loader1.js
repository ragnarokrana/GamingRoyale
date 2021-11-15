$(document).ready(function () {
  $(".modal").modal();
  $(".sidenav").sidenav();
  $(".slider").slider({
    full_width: true,
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000,
  });
  $(".parallax").parallax();
  $(".myreviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });
  $("input.autocomplete").autocomplete({
    data: {
      "GTAV": null,
      "THE WITCHER": null,
      "WATCH DOGS": null,
      CRYSIS: null,
      "NEED FOR SPEED": null,
      "RED DEAD REDEMPTION 2": null,
      "CALL OF DUTY": null,
      "FAR CRY": null,
      "OUTLAST": null,
      "BATTLEFIELD": null,
      "RESIDENT EVIL": null,
      "PRINCE OF PERSIA": null,
    },
  });
  $(".materialboxed").materialbox();
  $(".scrollspy").scrollSpy();
  $(".parallax").parallax();
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}