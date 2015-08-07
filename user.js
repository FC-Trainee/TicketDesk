var pwd=core.getAuthentication();
core.register(new User(),"user_details",pwd);
core.Access_lib("user_details");
function User(){
	this.getName=function (id){
		var name=core.Access_lib("forum_json");
		return name.getUser(id,"name");
	};
	this.getRole=function (id){
		var role=core.Access_lib("forum_json");
		return role.getUser(id,"role");
	};
	this.isPrivilege=function (id){
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
		return user;
	};
}
