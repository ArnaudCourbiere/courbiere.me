define([
], function(){
    return {
        cancelEvent: function cancelEvent (event) {
            if(event.stopPropagation) event.stopPropagation();
            if(event.preventDefault) event.preventDefault();
            event.cancelBubble=true;
            event.returnValue=false;
        }
    };
});
