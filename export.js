var pw = core.getAuthentication();
core.register(new ticketExport(), "exportTicket", pw);

function ticketExport() {
    var allTicket = [];
    this.exportTicket = function(element, flag) {
        var ticketValue = {};
        var i;
        var parent = element.parentNode;
        var divchildren = parent.children;
        var children = divchildren[0].children;
        var content;
        for (i = 0; i < children.length; i++) {
            var childid = children[i].id;
            var childtype = children[i].type;
            if (childid.substr(0, 6) === "ticket" && childtype === "text") {
                content = children[i].value;
                ticketValue.ID = content;
            } else {
                if (childid.substr(0, 4) === "user" && childtype === "text") {
                   content = children[i].value;

                    ticketValue.header = content;
                } else if (childid.substr(0, 6) === "header" && childtype === "text") {
                    content = children[i].value;

                    ticketValue.reporter = content;
                }
            } 
        }
        var status = parent.style.background;
        if (status.toString() === "rgb(205, 92, 92)") {
           content = "confirmed";

            ticketValue.ticketStatus = content;

        } else {
            if (status.toString() === "rgb(143, 188, 143)") {
               content = "rejected";
                ticketValue.ticketStatus = content;
            } else {
                content = "none";
                ticketValue.ticketStatus = content;
            }
        }
        children = divchildren[3].children;
        content = children[0].value;
        ticketValue.ticketDescription = content;
        if (flag === false)
            console.log(JSON.stringify(ticketValue));
        else
            allTicket.push(ticketValue);
    };
    this.exportAllTicket = function() {
        allTicket = [];
        var j;
        var children = document.getElementsByName("export");
        for (j = 0; j < children.length; j++) {
            this.exportTicket(children[j], true);
        }

        console.log(JSON.stringify(allTicket));
    };
}