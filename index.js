"use strict";
var isActive = "home";
var selectedYear = "2017";
document.getElementsByClassName("nav-button")[0].setAttribute("id", "active-nav");

// Reset the page to the "Home" default
var home = function(){
	if (isActive !== "home"){
		document.getElementById("header-img").removeChild(document.getElementById("nav-pop"));
		removeNavSelect(isActive);
		document.getElementsByClassName("nav-button")[0].setAttribute("id", "active-nav");
		isActive = "home";
	}
	else{
		return;
	}
}

// Fire the About Us pop-up with content
var aboutUs = function(){
	if (isActive !== "about us") {
		createPop();

		var aboutUsInner = document.createDocumentFragment();
		var aboutUsHeader = document.createElement("h1");
		aboutUsHeader.innerText = "About Us";
		aboutUsInner.appendChild(aboutUsHeader);
		var aboutUsImg = document.createElement("img");
		aboutUsImg.setAttribute("src", "/img/team_photo.png");
		aboutUsInner.appendChild(aboutUsImg);
		var text = document.createElement("p");
		text.innerText = "The Chico State Water Ski Team has been part of Chico State since 1978. We are a recreational sport that competes in the western region and on the national level. The collegiate water ski tournaments include three categories: slalom, trick, and jump.";
		aboutUsInner.appendChild(text);
		var text = document.createElement("p");
		text.innerText = "In slalom, the skier skis around as many buoys in a row as possible. More points are gained as the speed increases and the rope length decreases. The trick event invites people to do as many tricks as they can in 40 seconds without falling. It can be done on a trick ski or wakeboard. The ramp for the jump event at the collegiate level is 5 feet tall. More points are earned the further you jump and land.";
		aboutUsInner.appendChild(text);
		var text = document.createElement("p");
		text.innerText = "All levels of skiers are welcome, from beginner to advanced. We have a great bond as a team with many life-long friendships. We look for new people to join us at the beginning of each semester. If you are interested, please do not hesitate to ask us questions or to check us out on campus! Please see more details below about our schedule, merchandise, and contact information.";
		aboutUsInner.appendChild(text);

		document.getElementById("nav-pop-content").appendChild(aboutUsInner);
		isActive = "about us";
	}
	else {
		return;
	}
}

// Fire the Event Schedule pop-up with content
var eventSchedule = function(){
	if (isActive !== "event schedule"){
		createPop();

		var eventScheduleInner = document.createDocumentFragment();
		var esHeader = document.createElement("h1");
		esHeader.innerText = "Event Schedule";
		eventScheduleInner.appendChild(esHeader);

		var dropDownContainer = document.createElement("div");
		dropDownContainer.setAttribute("id", "drop-down-container");
		eventScheduleInner.appendChild(dropDownContainer);
		document.getElementById("nav-pop-content").appendChild(eventScheduleInner);

		var dropDown = document.createDocumentFragment();
		var dropDownSelected = document.createElement("div");
		dropDownSelected.setAttribute("id", "styled-select");
		dropDownSelected.setAttribute("onclick", "openDropDown()");
		dropDown.appendChild(dropDownSelected);
		var dropDownContent = document.createElement("div");
		dropDownContent.setAttribute("id", "drop-down-content");
		dropDownContent.setAttribute("style", "visibility: hidden");
		dropDown.appendChild(dropDownContent);
		document.getElementById("drop-down-container").appendChild(dropDown);

		// Create using a loop? Array of years...
		document.getElementById("styled-select").innerHTML = "<a id='option-selected'><span>" + selectedYear + "</a></span>";
		var optionsContainer = document.createElement("div");
		optionsContainer.setAttribute("id", "options-container");
		document.getElementById("drop-down-content").appendChild(optionsContainer);
		var options = document.createDocumentFragment();
		var optionBlock = document.createElement("a");
		optionBlock.setAttribute("class", "option");
		optionBlock.setAttribute("onclick", "selectOption(this)");
		optionBlock.innerHTML = "<span>2017</span>";
		options.appendChild(optionBlock);
		optionBlock = document.createElement("a");
		optionBlock.setAttribute("class", "option");
		optionBlock.setAttribute("onclick", "selectOption(this)");
		optionBlock.innerHTML = "<span>2016</span>";
		options.appendChild(optionBlock);
		optionBlock = document.createElement("a");
		optionBlock.setAttribute("class", "option");
		optionBlock.setAttribute("onclick", "selectOption(this)");
		optionBlock.innerHTML = "<span>2015</span>";
		options.appendChild(optionBlock);
		optionBlock = document.createElement("a");
		optionBlock.setAttribute("class", "option");
		optionBlock.setAttribute("onclick", "selectOption(this)");
		optionBlock.innerHTML = "<span>2014</span>";
		options.appendChild(optionBlock);
		optionBlock = document.createElement("a");
		optionBlock.setAttribute("class", "option");
		optionBlock.setAttribute("onclick", "selectOption(this)");
		optionBlock.innerHTML = "<span>2013</span>";
		options.appendChild(optionBlock);
		document.getElementById("options-container").appendChild(options);

		var eventList = document.createElement("div");
		eventList.setAttribute("id", "event-container");
		document.getElementById("nav-pop-content").appendChild(eventList);
		document.getElementById("event-container").appendChild((fillEvents()));

		document.getElementsByClassName("option")[0].setAttribute("id", "set-option");
		isActive = "event schedule";
	}
	else {
		return;
	}
}

// Fire the Merchandise pop-up with content
var merch = function(){
	if (isActive !== "merchandise"){
		createPop();

		var merchInner = document.createDocumentFragment();
		var merchHeader = document.createElement("h1");
		merchHeader.innerText = "Merchandise";
		merchInner.appendChild(merchHeader);
		var merchImg = document.createElement("img");
		merchImg.setAttribute("src", "/img/merch_img.png");
		merchInner.appendChild(merchImg);
		var merchBody = document.createElement("div");
		merchBody.setAttribute("class", "vertical-body");
		merchInner.appendChild(merchBody);
		document.getElementById('nav-pop-content').appendChild(merchInner);

		merchInner = document.getElementsByClassName("vertical-body")[0];
		merchInner.innerHTML =  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium, totam rem consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipsisci velit, dolore magnam aliquam quaerat voluptatem.</p>";

		isActive = "merchandise";
	}
	else {
		return;
	}
}

// Fire the Contact Us pop-up with content
var contactUs = function(){
	if (isActive !== "contact us"){
		createPop();

		var contactUsInner = document.createDocumentFragment();
		var contactUsHeader = document.createElement("h1");
		contactUsHeader.innerText = "Contact Us";
		contactUsInner.appendChild(contactUsHeader);
		var contactUsText = document.createElement("p");
		contactUsText.innerText = "Interested in joining the team or have any specific questions? If so, please contact us at csucwaterski@gmail.com or fill out the form below.";
		contactUsInner.appendChild(contactUsText);
		var contactUsForm = document.createElement("form");
		contactUsForm.setAttribute("id", "contact-us");
		contactUsInner.appendChild(contactUsForm);
		document.getElementById("nav-pop-content").appendChild(contactUsInner);

		var formContent = document.createDocumentFragment();
		var contactUsEmail = document.createElement("h2");
		contactUsEmail.innerText = "Your Email Address:";
		formContent.appendChild(contactUsEmail);
		var contactUsEmailForm = document.createElement("input");
		contactUsEmailForm.setAttribute("type", "text");
		formContent.appendChild(contactUsEmailForm);
		var contactUsSubject = document.createElement("h2");
		contactUsSubject.innerText = "Subject:";
		formContent.appendChild(contactUsSubject);
		var contactUsSubjectForm = document.createElement("input");
		contactUsSubjectForm.setAttribute("type", "text");
		formContent.appendChild(contactUsSubjectForm);
		var contactUsMessage = document.createElement("h2");
		contactUsMessage.innerText = "Message:";
		formContent.appendChild(contactUsMessage);
		var contactUsMessageForm = document.createElement("textarea");
		contactUsMessageForm.setAttribute("type", "text");
		formContent.appendChild(contactUsMessageForm);
		document.getElementById("contact-us").appendChild(formContent);

		var buttonContainer = document.createElement("div");
		buttonContainer.setAttribute("id", "button-container")
		document.getElementById("nav-pop-content").appendChild(buttonContainer);
		var buttons = document.createDocumentFragment();
		var cancel = document.createElement("button");
		cancel.innerText = "Cancel";
		cancel.setAttribute("style", "background-color: rgba(140, 132, 122, 0.9)");
		buttons.appendChild(cancel);
		var submit = document.createElement("button");
		submit.innerText = "Submit";
		submit.setAttribute("style", "background-color: rgba(213, 43, 43, 0.9); border-color: #950000");
		buttons.appendChild(submit);
		document.getElementById("button-container").appendChild(buttons);

		isActive = "contact us";
	}
	else {
		return;
	}
}

// Clear previous navigation option selected when selecting a navigation option.
var removeNavSelect = function(activeElement){
	switch (activeElement){
		case "home":
			document.getElementsByClassName("nav-button")[0].removeAttribute("id");
			break;
		case "about us":
			document.getElementsByClassName("nav-button")[1].removeAttribute("id");
			break;
		case "event schedule":
			document.getElementsByClassName("nav-button")[2].removeAttribute("id");
			break;
		case "merchandise":
			document.getElementsByClassName("nav-button")[3].removeAttribute("id");
			break;
		case "contact us":
			document.getElementsByClassName("nav-button")[4].removeAttribute("id");
			break;
	}
}

// Create the basic modal for the features
var createPop = function(){
		if (isActive !== "home"){
			document.getElementById("header-img").removeChild(document.getElementById("nav-pop"));
		};

		var pop = document.createElement("div");
		pop.setAttribute("id", "nav-pop");
		document.getElementById("header-img").appendChild(pop);

		var content = document.createElement("div");
		content.setAttribute("id", "nav-pop-content");
		document.getElementById("nav-pop").appendChild(content);
}

// Open a drop-down by manipulating styles
var openDropDown = function(){
	if ((document.getElementById("drop-down-content").hasAttribute("style")) === true){
		document.getElementById("drop-down-content").removeAttribute("style");
		document.getElementById("styled-select").setAttribute("class", "selected");
	} else {
		document.getElementById("drop-down-content").setAttribute("style","visibility: hidden;");
		document.getElementById("styled-select").removeAttribute("class");
	}
}

// Select options in the dropdown and return expected behavior
var selectOption = function(clicked){
	var setOption = clicked.getElementsByTagName("span")[0].innerText;
	var allOptions = document.getElementsByClassName("option");
	for (var i = 0; i < allOptions.length; i++){
		if (allOptions[i].hasAttribute("id")){
			allOptions[i].removeAttribute("id");
		}
	}
	clicked.setAttribute("id", "set-option");
	selectedYear = setOption;
	document.getElementById("styled-select").getElementsByTagName("span")[0].innerText = setOption;
	document.getElementById("drop-down-content").setAttribute("style","visibility: hidden;");
}

var fillEvents = function(){
	var content = document.createDocumentFragment();
	var addThis = document.createElement("h2");
	addThis.innerText = "April 8-9";
	content.appendChild(addThis);
	addThis = document.createElement("h3");
	addThis.innerText = "Davis Spring Opener";
	content.appendChild(addThis);
	addThis = document.createElement("span");
	addThis.innerText = "Bell Aqua Lakes";
	content.appendChild(addThis);
	addThis  = document.createElement("h2");
	addThis.innerText = "April 15-16";
	content.appendChild(addThis);
	addThis = document.createElement("h3");
	addThis.innerText = "Cal Poly SLO Tournament";
	content.appendChild(addThis);
	addThis = document.createElement("span");
	addThis.innerText = "Jovias Pond";
	content.appendChild(addThis);
	addThis  = document.createElement("h2");
	addThis.innerText = "April 22-23";
	content.appendChild(addThis);
	addThis = document.createElement("h3");
	addThis.innerText = "Alumni Weekend";
	content.appendChild(addThis);
	addThis = document.createElement("span");
	addThis.innerText = "Sky Lake";
	content.appendChild(addThis);
	addThis  = document.createElement("h2");
	addThis.innerText = "May 6-7";
	content.appendChild(addThis);
	addThis = document.createElement("h3");
	addThis.innerText = "UCSD Tournament";
	content.appendChild(addThis);
	addThis = document.createElement("span");
	addThis.innerText = "Mission Bay";
	content.appendChild(addThis);
	addThis  = document.createElement("h2");
	addThis.innerText = "May 13-14";
	content.appendChild(addThis);
	addThis = document.createElement("h3");
	addThis.innerText = "Friends & Family Weekend";
	content.appendChild(addThis);
	addThis = document.createElement("span");
	addThis.innerText = "Sky Lake";
	content.appendChild(addThis);
	addThis  = document.createElement("h2");
	addThis.innerText = "May 20-21";
	content.appendChild(addThis);
	addThis = document.createElement("h3");
	addThis.innerText = "All Stars";
	content.appendChild(addThis);
	addThis = document.createElement("span");
	addThis.innerText = "Hosted By ASU";
	content.appendChild(addThis);
	return content;
}