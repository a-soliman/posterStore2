    $(document.head).append('<link rel="stylesheet" href="plugin-tabs/plugin_tabs_1.0.css"/>')
    $.fn.tabbify = function() {
        var $tabs = this.find('h3'),
         $contents = this.find('ul');

         
    		// PRODUCTION READY CODE..
    		$tabs.each(function(i, tab) {
    			var $tab = $(tab),
    				$content = $($contents[i]);
    			$tab.click(function() {
    				$tabs.removeClass('active');
    				$tab.addClass('active');
    				$contents.removeClass('active');
    				$content.addClass('active');
    			});
    		});

    		// set initial state.
    		$tabs.first().addClass('active first');
    		$tabs.last().addClass('last')
    		$contents.first().addClass('active');

    };