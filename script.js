
var MenuItems = document.getElementById('MenuItems');
    MenuItems.style.maxHeight = '0px';
  
    function menutoggle() {
      if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
      } else {
        MenuItems.style.maxHeight = '0px';
      }
    }
    $(document).ready(function () {
      $("a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              window.location.hash = hash;
            }
          );
        }
      });
    });
    
    $(".menu-items a").click(function () {
      $("#checkbox").prop("checked", false);
    });
    var overlay = document.getElementById("overlay");

    
    