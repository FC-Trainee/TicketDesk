function Forum() {
    var j = 0;
    var ticket = core.Access_lib("exportTicket");
    var user_details = core.Access_lib("user_details");

    function createElement(tagName, parentElement, attList, style, events, label) {
        var element = document.createElement(tagName);
        var attrName, styleName, eventName;
        for (attrName in attList) {
            element[attrName] = attList[attrName];
        }
        for (styleName in style) {
            element.style[styleName] = style[styleName];
        }
        if (label !== null) {
            element.appendChild(document.createTextNode(label));
        }
        for (eventName in events) {
            element.addEventListener(eventName, events[eventName]);
        }
        parentElement.appendChild(element);
        return element;
    }
    createElement("div", document.body, {id:"maindiv"}, { boxShadow:"0px 0px 50px deepskyblue", position:"relative", margin:"auto", height:"auto", width:"60%"}, null, "");
    this.login = function() {
        createElement("div", maindiv, {id:"insertDiv"}, {position:"relative", height:"20%", width:"100%", backgroundColor:"AliceBlue", borderBottom:"2px solid black"}, null, "");
        createElement("h1", insertDiv, {id:"heading"}, {position:"absolute", width:"100%", textAlign:"center"}, null, "Online Forum");
        createElement("input", insertDiv, {id:"userId", placeholder:"Please Enter Your ID"}, {position:"absolute", left:"5%", top:"60%", height:"20%", width:"50%"}, null, "");
        createElement("button", insertDiv, {id:"go1"}, {position:"absolute", right:"30%", top:"60%", height:"20%", width:"10%", cursor:"pointer", backgroundColor:"white"}, null, "GO");
        createElement("span", insertDiv, {id:"rol"}, {position:"absolute", right:"2%", top:"10%", color: "#008B8B"}, null, "");
        return {
                "login_id" : "userId",
                "go1" : "go1",
                "user_type" : "rol"
               };
    };
    this.addUser = function() {
        if (document.getElementById("addUserDiv") === null) {
            createElement("div", maindiv, {id:"addUserDiv"}, {position:"relative", height:"15%", width:"100%", backgroundColor:"AliceBlue", borderBottom: "2px solid black"}, null, "");
            createElement("input", addUserDiv, {id:"name", placeholder:"Name"}, {position:"absolute", left:"5%", top:"30%", height:"30%", width:"20%"}, null, "");
            createElement("input", addUserDiv, {id:"id", placeholder:"ID"}, {position:"absolute", left:"30%", top:"30%", height:"30%", width:"20%"},null, "");
            createElement("select", addUserDiv, {id:"role", value:"ROLE"}, {position:"absolute", left:"55%", top:"30%", height:"30%",width:"20%"}, null, "");
            createElement("option", role, {value:""}, {}, null, "Select A Role");
            createElement("option", role, {id:"roleAdmin", value:"admin"}, {}, null, "Admin");
            createElement("option", role, {id:"roleMaster", value:"master"}, {}, null, "Master");
            createElement("option", role, {id:"roleReporter", value:"reporter"}, {}, null, "Reporter");
            createElement("option", role, {id:"roleAssignee", value:"assignee"}, {}, null, "Assignee");
            createElement("button", addUserDiv, {id:"add"}, {position:"absolute", left:"80%", top:"30%", height:"30%",width:"10%", cursor:"pointer", backgroundColor:"white"}, null, "ADD");
        }
        if(document.getElementById("viewDiv") === null){
            createElement("div", maindiv, {id:"viewDiv"}, {position:"relative", width:"100%", display:"block"}, null, "");
        }
        return {
                "name" : "name",
                "login_id" : "id",
                "role" : "role",
                "add_user" : "add",
                "roleAdmin" : "roleAdmin",
                "roleMaster" : "roleMaster",
                "roleReporter" : "roleReporter",
                "roleAssignee" : "roleAssignee"
               };
    };
    this.showTicket = function (id, header, name, description) {   
        var tick = createElement("div", viewDiv, {id:"ticketDiv"+j}, {position:"relative", height:"30%", width:"100%", backgroundColor:"AliceBlue" , border:"1px solid #40E0D0"}, null, "");
        var head = createElement("div", tick, {id:"divHeader"+j}, {position:"absolute", top:"6%", height:"50%", width:"100%"}, null, "");
        createElement("input", head, {id:"ticket"+j, value:id, readOnly:"true"}, {position:"absolute", left:"5%", top:"5%", height:"30%", width:"20%"}, null, "");
        createElement("input", head, {id:"header"+j, value:header, readOnly:"true"}, {position:"absolute", left:"30%", top:"5%", height:"30%", width:"30%"}, null, "");
        createElement("input", head, {id:"user"+j, value:name, readOnly:"true"}, {position:"absolute", right:"7%", top:"5%", height:"30%", width:"20%"}, null, "");
        createElement("button", tick, {id:"cancel"+j}, {position:"absolute", right:"2%", top:"10%", height:"10%", width:"3%", cursor: "pointer", backgroundColor:"white"}, {click:function(){deleteTicket(this);}},  "X"); 
        var statusDiv = createElement("div", tick, {id:"statusDiv"+j}, {position:"absolute", right:"2%", bottom:"55%"}, null, "");
        createElement("a", statusDiv, {id:"confirm"+j}, {position:"relative", cursor:"pointer"}, { click:(function(){var k=j;return function(){colourRed(k);};})()}, "Confirm");
        createElement("a", statusDiv, {id:"reject"+j}, {position:"relative", cursor:"pointer"}, { click:(function(){var k=j;return function(){colourGreen(k);};})()}, " / Reject");
        createElement("a", statusDiv, {id:"reset"+j}, {position:"relative", cursor:"pointer"}, { click:(function(){var k=j;return function(){resetColor(k);};})()}, " / Reset");
        createElement("button", head, {id:"toggle"+j}, {position:"absolute", left:"48%", bottom:"0%", height:"20%",width:"5%", cursor: "pointer"}, { click:(function(){var k=j;return function(){showdes(k);};})()}, "-");
        var desc = createElement("div", tick, {id:"divDescription"+j}, {position:"absolute", bottom:"10%", height:"40%", width:"100%", display:"none"}, null, "");
        createElement("textarea", desc, {id:"textarea"+j, value:description, readOnly:"true"}, {position:"absolute", top:"10%", height:"80%", width:"80%", margin:"2%"}, null, "");
        createElement("button", tick, {id:"export1" + j, name:"export"}, {position:"absolute", right:"2%", top:"82%", height:"12%", width:"10%", cursor: "pointer", backgroundColor:"white"},{click:function(){ticket.exportTicket(this,false);}}, "Export");
        j++;
        return {
                "ticket_id" : "ticket" + j,
                "header" : "header" + j,
                "user_name" : "user" + j,
                "delete" : "cancel" + j,
                "toggle" : "toggle" + j,
                "textarea" : "textarea" + j,
                "export_single" : "export1" + j
               };
    };
    function deleteTicket(element) {
        if(user_details.getRole(document.getElementById("userId").value) == "master") {
            var p1 = element.parentNode;
            var p2 = p1.parentNode;
            p2.removeChild(p1);
        }
        else
            alert("permission denied");
    }
    function showdes(i) {
        if(document.getElementById("divDescription" + i).style.display == "none")
            document.getElementById("divDescription" + i).style.display = "block";
        else
            document.getElementById("divDescription" + i).style.display = "none";
    }
    function colourRed(i) {
        if(document.getElementById("confirm" + i))
            document.getElementById("ticketDiv" + i).style.background = "IndianRed";
    }
    function colourGreen(i) {
        if(document.getElementById("reject" + i))
            document.getElementById("ticketDiv" + i).style.background = "DarkSeaGreen";
    }
    function resetColor(i) {
        if(document.getElementById("reset" + i))
            document.getElementById("ticketDiv" + i).style.background = "none";
    }
    this.createTicket = function() {
        createElement("div", maindiv, {id:"insertionDiv"}, {position:"relative", height:"30%", width:"100%", display:"block", backgroundColor:"AliceBlue" , border:"1px solid #40E0D0"}, null,  "");
        createElement("h4", insertionDiv, {id:"thread"}, {position:"absolute", width:"100%", textAlign:"center"}, null, "Insert A Thread");
        createElement("input", insertionDiv, {id:"threadHeader", placeholder:"Header"}, {position:"absolute", left:"5%", top:"30%", height:"15%", width:"40%"}, null,  "");
        createElement("textarea", insertionDiv, {id:"description", placeholder:"Description"}, {position:"absolute", left:"5%", top:"50%", height:"35%", width:"70%"}, null,  "");
        createElement("button", insertionDiv, {id:"go2"}, {position:"absolute", left:"78%", top:"65%", height:"20%", width:"5%", cursor: "pointer", backgroundColor:"white"}, null,  "GO");
        createElement("button", insertionDiv, {id:"export2"}, {position:"absolute", right:"2%", top:"69%", height:"15%", width:"10%", cursor: "pointer", backgroundColor:"white"}, null, "Export");
        return {
                "insert_header" : "threadHeader",
                "insert_description" : "description",
                "insert_button" : "go2",
                "export_all" : "export2"
               };
    };
}
var pw = core.getAuthentication();
core.register(new Forum(),"draw",pw);