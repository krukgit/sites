//= require_tree .
//= require "jquery.js"

var m_ = "mai";
var t_ = "lto:";
var s_ = "onet.pl";

function poczta(n)
{
    document.write('<a href="'+m_+t_+n+"@pro."+s_+'">'+n+'@pro.'+s_+'</a>');
};

$(document).ready(function() {
    $('tr.parent').click( function(e) {
	var node = $(this).closest(".parent");
	var height = 0;
	node.toggleClass('active');
	do {
	    node = node.next('tr');

	    if (!node.hasClass('child')) {
		if (node.hasClass('spacer')) {
			node.toggleClass('bump');
		}
		return;
	    }

	    if (node.is(':visible')) {
		node.fadeOut('slow', function(){});	    
	    } else {
		node.fadeIn('slow', function(){});	    
	    }

//	    node.toggleClass('hidden');

	} while (node != null);
    });

    
    $("#offer").click(function() {
	$("#box.blue").animate({top: "-80px"}, function() {
	    $("table.offer").removeClass('hidden');
	    $("table.experience").addClass('hidden');
	    $("table.contact").addClass('hidden');
	});
    });

    $(".experience").click(function() {
	$("#box.blue").animate({top: "-55px"}, function() {
	    $("table.offer").addClass('hidden');
	    $("table.experience").removeClass('hidden');
	    $("table.contact").addClass('hidden');
	});
    });
    
    $(".contact").click(function() {
	$("#box.blue").animate({top: "-30px"}, function() {
	    $("table.offer").addClass('hidden');
	    $("table.experience").addClass('hidden');
	    $("table.contact").removeClass('hidden');
	});
    });


});

