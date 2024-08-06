// you should not apply javascript untill the 
// document is ready . for example : you can not 
// hide something until it has not appeared.
// write all the jquery code inside the document.ready
$(document).ready(function () {
    // your jquery code goes here
    // $ represents jQuery
    console.log($);
    console.log("we are using jQuery");
    // syntay of jquery: $('selector').action()

    // events in jQuery
    // dblclick,mouseenter,hover,form events etc.
    $('p').click(function () {
        console.log('you clicked on p', this);
        // we can hide something using "hide" keyword
        // $('p').hide();   //this is will everthing
        // we can use "this" keyword to hide only that we have clicked on
        // $(this).hide();

    });  //do this when clicked on p

    // other slectors
    $('*').click() //clicks on all the elements

    $('p.odd').click()  //select paragraph which has class odd
    $('p:first').click()  //select the first paragraph


    // demoig "on method": can handle multiple events
    $('p').on('click', function () {
        console.log('Thanks for clicking', this);
    });  //on clicking do this
    //  multiple event handler can also be applied on "on method"
    $('p').on({
        click: function () {
            console.log('Thanks for clicking', this);
        },
        mouseleave: function () {
            console.log('mouseleave', this);
        },
    });

    // Hide and show: they can or cannot take arguments
    // that argument define the amount of time element would 
    // take to be shown or hide.
    // $('#wiki').hide(1000,function(){  //function is the callback function
    //     console.log("hidden")  
    // })  //will take 1000 mili second to hide
    // $('#wiki').show(1000,function(){  //function is the callback function
    //     console.log("shown")  
    // }) 

    // toggle on clicking button 
    // $('#but').click(function(){
    //     $('#wiki').toggle(1000);
    // })

    $('#but').click(function () {
        $('#wiki').fadeToggle(1000);
    });
    // fadeOut
    // fadeIn
    // fadeTo
    // fadeToggle

    // Slidding : has three methods
    // $('#wiki').slideToggle(1000, function () {
    //     console.log('done')
    // });
    // slideUp
    // slideDown
    // slideToggle

    // Animate: function in jquery
    //     $('#wiki').animate({
    //         opacity:0.3,
    //         height:'150px',
    //         width:'350px'
    //     }, "slow");

    // });  //end document.ready
    $('#wiki').animate({ opacity: 0.3 }, 4000);
    $('#wiki').animate({ opacity: 0.9 }, 4000);
    $('#wiki').animate({ width: '350px' }, 1000);

    // stop() method can be used to stop the animation

    // JQUERY helps in DOM manipulation of html
    $('#wiki').text('this is harry');  //this is will change the text
    $('#wiki').text();   //this will return the text of the element 
    $('body').html();   //this will return the whole html of the body 

    // use val() for form field
    $("#ta").val();      //use val() function to get the value.
    $('#wiki').empty();   //this will empty the div
    // so we can get and set something of any tag and element with any selector. 
   


});
// there are three main types of selectors.
// 1.tag/element selectors
// 2.Id selector
// 3.Class Selector.