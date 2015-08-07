var pw = core.getAuthentication();
core.register(new ticketExport(), "exportTicket", pw);

function ticketExport() {
    this.exportTicket = function(element) {
        var i;
        var textArray = [];
        var parent = element.parentNode;
        var divchildren = parent.children;
        var back = divchildren[0].style.background;
        var children = divchildren[0].children;
        var content;

        if (children.length === 0) {
            children = divchildren;
            back = parent.style.background;
        }
        for (i = 0; i < children.length; i++) {

            var childid = children[i].id;
            var childtype = children[i].type;
            if (childid.substr(0, 6) === "ticket" && childtype === "text") {
                content = "ID: " + children[i].value;
                textArray.push(content);
            } else {
                if (childid.substr(0, 4) === "user" && childtype === "text") {
                    content = "Header: " + children[i].value;
                    textArray.push(content);
                } else if (childid.substr(0, 6) === "header" && childtype === "text") {
                    content = "Ticket Reporter: " + children[i].value;
                    textArray.push(content);
                }
            }
        }
        var status = back;
        if (status === "red") {
            content = "Staus: confirmed";
            textArray.push(content);

        } else {
            if (status === "green") {
                content = "Staus:rejected";
                textArray.push(content);
            } else {
                content = "Staus: none";
                textArray.push(content);

            }
        }
        children = divchildren[4].children;
        content = "description: " + children[0].value;
        textArray.push(content);
        var myJsonString = JSON.stringify(textArray);
        console.log(myJsonString);
    }
    this.exportAllTicket = function() {
        var j;
        var children = document.getElementsByName("export");
        for (j = 0; j < children.length; j++)


            this.exportTicket(children[j]);


    }
}