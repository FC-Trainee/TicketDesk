var pwd=core.getAuthentication(); //accepting the password for authentication
core.register(new User(),"user_details",pwd);   //registering User class with key bvalue "user_details"
function User(){
	this.getName=function (id){		
		var name=core.Access_lib("forum_json"); 
		return name.getUser(id,"name");	//returns the name of the matching id
	};
	this.getRole=function (id){
		var role=core.Access_lib("forum_json"); 
		return role.getUser(id,"role");		//returns the role of the matching id
	};
	this.isPrivilege=function (id){				//returns the privilege of the matching id
		var privilege=[],role;
		
		role=this.getRole(id);
		
		if( role=="master"||role=="reporter"){
			privilege.push("add");
		}
		if( role=="master"){
			privilege.push("delete");
		}
		if( role=="master"||role=="reporter" || role=="assignee"){
			privilege.push("show");
		}
		if(role=="assignee"){
			privilege.push("view");
		}
		if( role=="admin"){
			privilege.push("insertUser");
		}
		if(role=="Id not Matching!!!"){
            privilege.push(role);
        }
		return privilege;
	};
	this.users=function (id){				
		var user={};
		user[id]=core.Access_lib("forum_json");
		return user;							//returns an object containing complete details of the matching id
	};
}
