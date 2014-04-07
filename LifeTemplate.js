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
<<<<<<< HEAD
        if($(" [if-data-loop]",containerObject).length !=0 ) {
            this.renderLoop();    
=======
       this.renderLoop(templateString);
        this.outputHTML = $("#" + this.containerDivId).html();alert(this.outputHTML)
        this.deleteOtherContainerDiv();
        return this.outputHTML;
    },
    /**
    * This function executes the loop ( the repeting data )
    */
    renderLoop : function(templateString) {
        var containerObject = $("#" + this.containerDivId)[0];
         if($(" [if-data-loop]",containerObject).length !=0 ) {
            var selfObject = this;
            $(" [if-data-loop]",containerObject).each(function() {
                var templateString = $(this).html();
                var dataString     = $(this).attr('if-data-loop');
                selfObject.renderLoopIndividual(templateString, dataString, this);
            });
         }
        else {
            return true;
>>>>>>> 4e57a83c3051bdc95b598b1f69b74de8c859c6d3
        }
    },
    renderLoopIndividual : function(templateString, dataString, element) {
        var data = this.getDataFromDataString(dataString);
        var outputString = "";
        for(var index in data) {
            outputString += templateString;
        }
<<<<<<< HEAD
        if($(" [print-data]",containerObject).length) {
            var selfObject = this;
            $(" [print-data]",containerObject).each(function(){
                var dataStringArray = $(this).attr('print-data').split(",");console.log(dataStringArray);
                selfObject.outputHTML += selfObject.renderPrintData($(this).html(),dataStringArray);
            });
        }
        return selfObject.outputHTML;
    },
    renderPrintData : function(templateString, dataStringArray) {
        var dataArray = new Array();
        for(var index in dataStringArray) {
            var dataString = dataStringArray[index];
            var data = this.fetchData(dataString, this.mainData);
            dataArray.push(data);
        }
        var templateStringArray = templateString.split("##");
        var outputString = "";
        for(var index in templateStringArray) {
            if(templateStringArray[index]!="") {
                outputString += templateStringArray[index]+dataArray[index];
            }
        }
        return outputString;
    },
    /**
    * This function executes the loop ( the repeting data )
    */
    renderLoop : function() {
        if($(" [if-data-loop]",containerObject).length != 0) {
            $(" [if-data-loop]",containerObject).first().html(this.renderLoopIndividual($(" [if-data-loop]",containerObject).first().html(), $(" [if-data-loop]",containerObject).first().attr('if-data-loop')));
        }
        else {
            return false;
        }
        
    },

    renderLoopIndividual : function(templateString, dataString) {
        
    },
    /**
    * This function retrieves data the dataString from data1.data2.data3 to [data1,data2,data3];
    */
    fetchData : function(dataString, mainData) {
        if((dataString == "") || (dataString == null) || (dataString.length == 0) || ($.trim(dataString).indexOf(" ") != -1)) {
            this.logError("Invalid data string");
        }
        else if(dataString.indexOf(".") == -1) {
            return dataString;
        }
        else {
            var dataStringArray = $.trim(dataString).split(".");
            var data;
            for(var index in dataStringArray) {
                if(index == 0) {
                    data = mainData[dataStringArray[index]];
                }
                else {
                    data = data[dataStringArray[index]];
                }
            }
            return data;
        }
    },
=======
        $(element).html(outputString);
        $(element).removeAttr('if-data-loop');
        this.renderLoop($("#" + this.containerDivId).html());
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
    
>>>>>>> 4e57a83c3051bdc95b598b1f69b74de8c859c6d3
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
