// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
console.log("height,width");
//Colour selection
console.log($("#colorPicker").val());
//dimensions
console.log($("#inputHeight").val());
console.log($("#inputWeight").val());
//Submit response
$("input[type='submit']").on("click",function(event){
  event.preventDefault();
  console.log("LISTEN!");

const height = $("#inputHeight").val();
const width = $("#inputWeight").val();
//Change grid back to empty
$("#pixelCanvas").empty();
makeGrid(height,width);
//height
for (let i = 0; i<height;i++) {
//row created
$("#pixelCanvas").append($("<tr></tr>"));
//width
for (let j = 0; j<width;j++) {
//add td to row
$("tr").last().append($("<td></td>"));
//Colours the square when clicked
$("#pixelCanvas").on("click", "td", function(){
  //Change background
  $(this).css("background-color", $("#colorPicker").val());
});
}
}
});



function makeGrid(height,width) {



}
