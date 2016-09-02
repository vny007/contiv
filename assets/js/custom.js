jQuery(document).ready(function($){

    $(document).click(function (e) {
                    //TODO: add flag condition to exec only if the flag is true
                    if (!$(e.target).is('#wgtSelector')) {
                         $( "#draggable").hide();
                    }
    });

});