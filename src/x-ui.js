(function($) {
  'use strict';

  var eventList = {
  	docReady: function(event) {
  		var activeTabList = $('.tab > .header > ul > li.selected');
  		activeTabList.each(function(index, tab) {
  			$('#' + $(tab).data('href')).show();
  		});

  	},
    radioBtnSelect: function(event) {
    	var $this = $(this);
    	var input = $this.find('input');
    	$('input[name=' + input.attr('name') + ']').parent().find('input').prop('checked', false).end().find('span').removeClass('checked');
    	$this.find('input').prop('checked', true).end().find('span').addClass('checked');

    	return false;
    },
    radioBlockSelect: function(event) {
    	if($(event.target).parent().hasClass('actions')) {
    		return;
    	}

    	var $this = $(this);
    	var input = $this.find('input');
    	$('input[name=' + input.attr('name') + ']').parent().find('input').prop('checked', false).end().find('.title').removeClass('checked');
    	$this.find('input').prop('checked', true).end().find('.title').addClass('checked');

    	return false;
    },
    checkboxBtnSelect: function(event) {
    	var $this = $(this);
    	var input = $this.find('input');

    	if(input.prop('checked')) {
    		$this.find('input').prop('checked', false).end().find('span').removeClass('checked');
    	} else {
    		$this.find('input').prop('checked', true).end().find('span').addClass('checked');
    	}    	

    	return false;
    },
    tabSelect: function(event) {
    	var $this = $(this);
    	var allTabs = $this.parent().children();

    	allTabs.removeClass('selected');
    	$this.addClass('selected');

    	allTabs.each(function(index, tab) {
  			$('#' + $(tab).data('href')).hide();
  		});

    	$('#' + $this.data('href')).show();

    	return false;
    }
  };

  $(document).on('ready', eventList.docReady)
  	.on('click', '.radio-btn', eventList.radioBtnSelect)
    .on('click', '.radio-block', eventList.radioBlockSelect)
    .on('click', '.check-btn', eventList.checkboxBtnSelect)
    .on('click', '.tab > .header > ul > li', eventList.tabSelect);

})(jQuery);
