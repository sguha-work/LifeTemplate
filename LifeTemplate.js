var LifeTemplate = {
    /**
    * member variables
    */
    containerDivId : "div_lifeTemplateContainer",
    outputHTML   : "",
    mainData       : new Object(),
    /**
    * Requirred methods
    */
    
    render : function(templateString, data){
        this.createAndAppendTemplateContainerInBody();
        $("#" + this.containerDivId).html(templateString);
        this.pasteTemplateInTemplateContainer(templateString);
        this.mainData = data;
        this.renderTemplate(templateString, data);
    },
    renderTemplate : function(templateString, data) {
        var containerObject = $("#" + this.containerDivId);
        //finding and executing loop data process
        if($(" [if-data-loop]",containerObject).length !=0 ) {
            var selfObject = this;
            $(" [if-data-loop]",containerObject).each(function() {
                var templateString = $(this).html();
                var data           = $(this).attr('if-data-loop');
                selfObject.renderLoop(templateString, data);
            });
        }
        if($(" [if-data]",containerObject).length) {
            var index = 0;
            $("#" + this.containerDivId+" > [if-data]").each(function() {
                index+=1;
            });
            alert(index);    
        }
    },
    /**
    * This function executes the loop ( the repeting data )
    */
    renderLoop : function(templateString, data) {
        console.log(templateString);
        console.log(this.mainData[data]);
        for( var index in this.mainData[data]) {
            
        }
    },
    /**
    * This function paste the given template string to template
    * container div
    */
    pasteTemplateInTemplateContainer : function(templateString) {
        $("#" + this.containerDivId).html(templateString);        
    },
    createAndAppendTemplateContainerInBody : function() {
        this.deleteOtherContainerDiv();
        $('body').append("<div id='" + this.containerDivId + "' style='display:none'></div>");
    },
    
    /**
    * This functions delete other template container div
    */
    deleteOtherContainerDiv : function(containerDivId) {
        $("#" + this.containerDivId).remove();
    },
};