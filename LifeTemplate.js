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
        return this.renderTemplate(templateString, data);
    },
    renderTemplate : function(templateString, data) {
        var containerObject = $("#" + this.containerDivId);
        //finding and executing loop data process
       this.renderLoop(templateString, data);
        this.outputHTML = $("#" + this.containerDivId).html();alert(this.outputHTML)
        this.deleteOtherContainerDiv();
        return this.outputHTML;
    },
    /**
    * This function executes the loop ( the repeting data )
    */
    renderLoop : function(templateString, data) {
        var containerObject = $("#" + this.containerDivId)[0];
         if($(" [if-data-loop]",containerObject).length !=0 ) {
            var selfObject = this;
            $(" [if-data-loop]",containerObject).each(function() {
                var templateString = $(this).html();
                var dataString     = $(this).attr('if-data-loop');
                selfObject.renderLoopIndividual(templateString, dataString, this);
            });
         }
    },
    renderLoopIndividual : function(templateString, dataString, element) {
        var data = this.getDataFromDataString(dataString);
        var outputString = "";
        for(var index in data) {
            outputString += templateString;
        }
        $(element).html(outputString);
        $(element).removeAttr('if-data-loop');
    },
    getDataFromDataString : function(attributeName) {
        var keys = Object.keys(this.mainData);
        if(keys.indexOf(attributeName)!= -1) {
         return (this.mainData[attributeName]);
        }    
        else {
           for(var index in keys) {
             prevData = mainData;
             return getValue(attributeName, this.mainData[keys[index]]);
           }
        }
    
    },    
    
    logError : function(errorMessage) {
        console.log("Error : "+errorMessage);
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
