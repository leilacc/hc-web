function showSection(sectionName, newLoad) {
    var sectionList = ["home", "projects", "meetings", "events", "sponsors",
                       "form"]
    
    // Remove given section from list
    var index = sectionList.indexOf(sectionName);
    if (index > -1) {
        sectionList.splice(index, 1);
    }

    // Set class for given section
    showSingleSection(sectionName, 'visible');

    // Set classes for other sections
    for (var i = 0; i < sectionList.length; i++) {
        var currSectionName = sectionList[i];
        showSingleSection(currSectionName, 'hidden');
    }

    if (newLoad) {
        // Change url and state
        var stateObj = { foo: 'bar' };
        history.pushState(stateObj, sectionName, '/' + sectionName);
    }
};

function showSingleSection(sectionName, newState) {
    var section = document.getElementsByClassName(sectionName);
    section[0].className = 'row-fluid content ' + newState + ' ' + sectionName;
}

function showInitialSection(newLoad) {
    var url = document.location.href;
    
    if (url.indexOf('projects') != -1) {
        showSection('projects', newLoad);
    } else if (url.indexOf('meetings') != -1) {
        showSection('meetings', newLoad);
    } else if (url.indexOf('events') != -1) {
        showSection('events', newLoad);
    } else if (url.indexOf('sponsors') != -1) {
        showSection('sponsors', newLoad);
    } else {
        showSection('home', newLoad);
    }

};

window.onpopstate = function(event) {
    showInitialSection(false);
};
