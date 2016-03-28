// The script which pulls in XML data of managed PCs and generates a table

$(document).ready(function()
 {
   $.ajax({
     type: "GET",
     url: "managepclist.xml",     
     dataType: "xml",
     success: retrive_xml_data2
   });
 });

function retrive_xml_data2(xml) {

	var temp_table1 = "";
	var temp_table2 = "";

	temp_table1 = "<table class='managedpcstable'><tr><th>PC Name</th><th>Date Added</th><th>Group Name</th><th>OS</th><th>Public Key</th><th>Shared Folder Location</th><tr>";

	$(xml).find('pc').each(function(){
		var Name = $(this).find('name').text();
		var DateAdded = $(this).find('dateadded').text();
		var GroupName = $(this).find('groupname').text();
		var OS = $(this).find('os').text();
		var PublicKey = $(this).find('publickey').text();
		var SharedFolder = $(this).find('sharedfolder').text();
		
		temp_table2 = temp_table2 + '<tr><td>' + Name + '</td><td>' + DateAdded + '</td><td>' + GroupName + '</td><td>' + OS + '</td><td>' + PublicKey + '</td><td>' + SharedFolder + '</td></tr>';
		
	});
	
	$("#managed_list_xml_div").append(temp_table1 + temp_table2 + "</table>");
}

