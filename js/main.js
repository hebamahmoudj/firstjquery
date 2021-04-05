// $(".btn").click(function () {
//   $(".test").slideUp(2000, function () {
//     $(".test2").slideUp(2000, function () {
//       $(".test3").slideUp(2000);
//     });
//   });
// });

$("section").animate({ width: "100%" }, 2000);

$("section").animate({ height: "1650px" }, 2000, function () {
  $("section h1").show(2000, function () {
    $(".item").slideDown(2000, function () {
      $("section p").slideDown(2000);
    });
  });
});
