

$("h1").addClass("text-center");

// Code the following user stories, using jQuery where possible:

// As a User (AAU), I don't want to see any developer skills when the page first loads so that I can start with a fresh slate.






$(document).ready(function(){
    alert('everything is ready, lets do this')
})

const $newList = $('<li>').addClass('newList')

// adding the element to the DOM

$('.newList').append($newList);

$('.newList').on("click", function(evt){
    console.log(evt)
})

// AAU, I want to be able to type in a skill and have it added to my list of skills by clicking a button.

// $('#btn1').click(function(evt){
//     console.log(evt,this)

$("#btn1").click(function(evt){
    let $text = $("#txt");
     console.log($text.val())
    $("ul").append( $("<li> " + $text.val() +  "</li>"))
    console.log(evt,$text)
})



// AAU, I want to be able to remove an individual skill one at a time in case I make a mistake.

$('#btn2').click(function(evt){
    $('#skills').children().last().remove();
})