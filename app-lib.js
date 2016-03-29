//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 0;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "managemypcs";				// This app's name / folder name which must be unique
var apptitle = "Manage My PCs";				// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/manage-my-pcs/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 4;                            // This is the number of buttons on the App Home tab in main.html

//Setup for Button0 (The First Button)
var btn0_Title = "Pick Your Shared Folder";		// This is what is displayed on the button.
var btn0_MouseOver = "The first step involves selecting which shared folder you would like your job list written to.  Click this button to select that folder.";	// This is what appears upon mouseover for the button.
var btn0_Description = "<strong>Step 1:</strong> Pick the shared folder you'd like to use.  This can be any shared folder including Dropbox, Google Drive, SugarSync, Box, OneDrive, and any Windows Networks.";		// This is what is displayed as the description of the button.
var btn0_Why = "This is an example explanation of why someone would want to run this button.  For example, you would want to run this specific button to see how our apps are demonstrated. You can even include links such as <a href='http://www.google.com/' id='btn0-link' title='This is a link to Google'>this</a> to help provide greater context for a user.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "btn0func.js";	// This is the actual script the button will be calling.
var btn0_Source = "btn0func.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname0 ="";

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button





//Setup for Button1 (The Second Button)
var btn1_Title = "Create a Personalized Installer";		// This is what is displayed on the button.
var btn1_MouseOver = "The second step includes creating a customized installer with the details of your shared environment already stored.";	// This is what appears upon mouseover for the button.
var btn1_Description = "<strong>Step 2:</strong> Create a custom installable version of SnapBack, which contains the credentials stored on this PC for you as an Administrator.  Simply run this installer on all the PCs you intend to manage.";		// This is what is displayed as the description of the button.
var btn1_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "btn1func.js";	// This is the actual script the button will be calling.
var btn1_Source = "btn1func.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button1"; 				// Key value name for the registry
var btn1_DefaultEnableButton=1;
var btn1_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn1_DefaultAllowUser=1;
var btn1_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn1_DefaultCaution=1;
var btn1_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname1 ="";

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn1_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button





//Setup for Button2 (The Third Button)
var btn2_Title = "Edit Your Job List";		// This is what is displayed on the button.
var btn2_MouseOver = "The third step includes editing your job list and ensuring that everything matches with what you want to run.";	// This is what appears upon mouseover for the button.
var btn2_Description = "<strong>Step 3:</strong> Now that you are set up to manage your PCs, you can add eligible jobs and tasks to be executed on your PC from any SnapBack App.  We have already added a few eligible app jobs for you.  Edit your current Task-list in any Excel compatible Spreadsheet or modify the XML file directly.";		// This is what is displayed as the description of the button.
var btn2_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn2_Command = "btn2func.js";	// This is the actual script the button will be calling.
var btn2_Source = "btn2func.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn2_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn2_id="btn2";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button2 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn2_KeyValue="button2"; 				// Key value name for the registry
var btn2_DefaultEnableButton=1;
var btn2_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn2_DefaultAllowUser=1;
var btn2_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn2_DefaultCaution=1;
var btn2_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname2 ="";

// Service Information for Button2
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn2_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn2_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn2_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button





//Setup for Button3 (The Fourth Button)
var btn3_Title = "Sign & Push Your Jobs";		// This is what is displayed on the button.
var btn3_MouseOver = "The fourth step includes signing your jobs and pushing them to your selected shared folder.  This then allows other PCs to run your job list.";	// This is what appears upon mouseover for the button.
var btn3_Description = "<strong>Step 4:</strong> Sign & push your job list.  This ensures that your PCs will listen to and run only the jobs you have approved.";		// This is what is displayed as the description of the button.
var btn3_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn3_Command = "btn3func.js";	// This is the actual script the button will be calling.
var btn3_Source = "btn3func.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn3_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn3_id="btn3";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button3 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn3_KeyValue="button3"; 				// Key value name for the registry
var btn3_DefaultEnableButton=1;
var btn3_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn3_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn3_DefaultAllowUser=1;
var btn3_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn3_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn3_DefaultCaution=1;
var btn3_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn3_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname3 ="";

// Service Information for Button3
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn3_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn3_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn3_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button



	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****


