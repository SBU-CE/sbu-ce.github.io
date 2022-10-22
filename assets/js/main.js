(function ($) {
  ("use strict");
  $(window).on("load", function () {
    $('[data-loader="circle-side"]').fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350);
    $("#hero_in h1,#hero_in form").addClass("animated");
    $(".hero_single, #hero_in").addClass("start_bg_zoom");
    $(window).scroll();
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
  $('a[href^="#"].btn_explore').on("click", function (chata) {
    chata.preventDefault();
    var kentavius = this.hash;
    var isalena = $(kentavius);
    $("html, body").stop().animate({scrollTop: isalena.offset().top}, 100, "linear", function () {
      window.location.hash = kentavius;
    });
  });
  function aiman(element) {
    $(element.target).prev(".card-header").find("i.indicator").toggleClass("fa-minus fa-plus");
  }
  $("#accordion_lessons").on("hidden.bs.collapse shown.bs.collapse", aiman);
  function _0x25dcxb(nary) {
    $(nary.target).prev(".panel-heading").find(".indicator").toggleClass("fa-minus fa-plus");
  }
  $(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", aiman);
  function marrisa(pegan) {
    $(pegan.target).prev(".panel-heading").find(".indicator").toggleClass("fa-minus fa-plus");
  }
  $(".panel-group").on("hidden.bs.collapse", marrisa);
  $(".panel-group").on("shown.bs.collapse", marrisa);
  (function () {
    if (!String.prototype.trim) {
      (function () {
        var si = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function () {
          return this.replace(si, "");
        };
      }());
    }
    ;
    [].slice.call(document.querySelectorAll("input.input_field, textarea.input_field")).forEach(function (virginie) {
      if (virginie.value.trim() !== "") {
        classie.add(virginie.parentNode, "input--filled");
      }
      ;
      virginie.addEventListener("focus", caidynce);
      virginie.addEventListener("blur", jaco);
    });
    function caidynce(avareign) {
      classie.add(avareign.target.parentNode, "input--filled");
    }
    function jaco(lamani) {
      if (lamani.target.value.trim() === "") {
        classie.remove(lamani.target.parentNode, "input--filled");
      }
    }
  }());
  var timira = $(".secondary_nav");
  timira.find("a").on("click", function (ayzlin) {
    ayzlin.preventDefault();
    var ndey = this.hash;
    var ilo = $(ndey);
    $("html, body").animate({scrollTop: ilo.offset().top - 150}, 200, "linear");
  });
  timira.find("ul li a").on("click", function () {
    timira.find("ul li a.active").removeClass("active");
    $(this).addClass("active");
  });
  $('#faq_box a[href^="#"]').on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
      var waldena = $(this.hash);
      waldena = waldena.length ? waldena : $("[name=" + this.hash.slice(1) + "]");
      if (waldena.length) {
        $("html,body").animate({scrollTop: waldena.offset().top - 185}, 200);
        return false;
      }
    }
  });
  $("ul#cat_nav li a").on("click", function () {
    $("ul#cat_nav li a.active").removeClass("active");
    $(this).addClass("active");
  });
}(window.jQuery));
