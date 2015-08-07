//FUNCTION TO ADD EVENT EVENT LISTENER
var pw = core.getAuthentication();
core.register(new event(), "event", pw);

function event() {
    var user = core.Access_lib("user_details");
    var draw = core.Access_lib("draw");
    console.log(draw);
    var userjson = core.Access_lib("forum_json");
    var ticket = core.Access_lib("exportTicket");
    var role, div1, div2, div3, div4;

    function addEvent(id, events) {
        var eventName, element;
        if (document.getElementById(id) !== null) {
            element = document.getElementById(id);
            for (eventName in events) {
                element.addEventListener(eventName, events[eventName]);
            }
        }
    } //END OF addEvent
    div1 = draw.login();
    addEvent(div1.go1, {
        click: function() {
            getPriviledgeById();
        }
    });
    addEvent(div1.login_id, {
        keyup: function(e) {
            if (e.keyCode === 13) {
                getPriviledgeById();
            }
        }
    });
    div2 = draw.addUser();
    document.getElementById('addUserDiv').style.display = 'none';
    addEvent(div2.add_user, {
        click: function() {
            if (document.getElementById(div2.login_id).value === '' || document.getElementById(div2.name).value === '' || document.getElementById(div2.role).value === '') {

                alert('provide all detailes');
            } else {
                var sucmsg = userjson.setUser(document.getElementById(div2.login_id).value, document.getElementById(div2.name).value, document.getElementById(div2.role).value);
                alert(sucmsg);
            }
        }
    });

    //GET PRIVILEDGE BY ID AND DRAW TEMPLATE ACCORDINGLY
    function getPriviledgeById() {
        var pri = [];

        //isPriviledge will return the priviledges of the passed ID
        pri = user.isPrivilege(document.getElementById(div1.login_id).value);
        for (var i = 0; i < pri.length; i++) {

            if (pri[i] === "add") { //add = master & reporter can add ticket
                if (document.getElementById('insertionDiv') === null) {
                    div4 = draw.createTicket();
                    addEvent(div4.export_all, {
                        click: function() {
                            ticket.exportAllTicket();
                        }
                    });
                    addEvent(div4.insert_button, {
                        click: function() {
                            //insertion of new ticket
                            ticketId = Math.floor((Math.random() * 999999) + 100000);
                            var name = user.getName(document.getElementById(div1.login_id).value);
                            draw.showTicket(ticketId, name, document.getElementById(div4.insert_header).value, document.getElementById(div4.insert_description).value);
                            document.getElementById(div4.insert_header).value = '';
                            document.getElementById(div4.insert_description).value = '';
                        }
                    });
                }
            }
            if (pri[i] === "view") { //view = Assignee can only view ticket
                if (document.getElementById("viewDiv") !== null)
                    document.getElementById("viewDiv").style.display = "block";
                if (document.getElementById("insertionDiv") !== null)
                    document.getElementById("insertionDiv").style.display = "none";

            } else if (pri[i] === "insertUser") { //insertUser = Admin can only add user
                document.getElementById(div2.add_user).disabled = false;
                document.getElementById("viewDiv").style.display = "none";
                if (document.getElementById("insertionDiv") !== null) {
                    document.getElementById("insertionDiv").style.display = "none";
                }

            } else {
                document.getElementById(div2.add_user).disabled = true;//disable add user button if not Admin

                document.getElementById("viewDiv").style.display = "block";
                if (document.getElementById("insertionDiv") !== null)
                    document.getElementById("insertionDiv").style.display = "block";
            }
            if (pri[i] === "Id not Matching!!!") {
                alert("Id not match");
            } else {

                document.getElementById('addUserDiv').style.display = "block";
            }

        }
    }
}