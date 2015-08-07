
function forum_json() {

	var forum = {

		users : [ {"id":"chinmoy1","name":"chinmoy","role":"master"} ,
				{ "id":"kishan1","name":"kisan","role":"admin"}
				] ,
		tickets : []
	} ;

	this.forum=function() {

	return forum;
	}

	this.setUser = function ( id, name, role ) {
	   
	   var user = { "id" : id , "name" : name, "role" : role } ;
	   forum.users.push( user ) ;
	   
	   return "New user added successfully..." ;
	 }

	this.setTicket = function( id, header, desc, status, name ) {

	 	var ticket = { "id" : id, "header" : header, "desc" : desc, "status" : status, "name" : name } ;
	 	forum.tickets.push( ticket ) ;
	 }


	this.getUser = function ( id, requirement ) {
		
		for( var i = 0 ; i < forum.users.length ; i++ ) {
			
	        if( forum.users[i].id == id ) {
	          	if( requirement === "name" ) {
	          		return forum.users[i].name ;
	          	}
	          	else if( requirement === "role" ) {
	          		return forum.users[i].role ;
	          	}
	          	else if( requirement === "details" ) {
	          		return forum.users[i] ;
	          	}
	        }
	        else {
	    		return "Id not Matching!!!" ;
			}	
		}
	}

	this.getTicket = function( id, requirement ) {

        for( var i = 0; i<forum.tickets.length; i++ ) {

	        if( forum.tickets[i].id == id ) {
	          	if( requirement === "header" ) {
	          		return forum.tickets[i].header ;
	          	}
	          	else if( requirement === "desc" ) {
	          		return forum.tickets[i].desc ;
	          	}
	          	else if( requirement === "status" ) {
	          		return forum.tickets[i].status ;
	          	}
	          	else if( requirement === "name" ) {
	          		return forum.tickets[i].name ;
	          	}
	          	else if( requirement === "details" ) {
	          		return forum.tickets[i] ;
	          	}
	        }
	        else {
	        	return "Id not matching!!" ;
	        }
		}
	}
}

var pw = core.getAuthentication() ;
core.register( new forum_json(), "forum_json", pw ) ;