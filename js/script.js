function showSection(sectionName, newLoad) {
    var sectionList = ["home", "projects", "meetings", "events", "sponsors",
                       "join", "contact"]
    
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
    for (var i = 0; i < section.length; i++) {
        section[i].className = 'row-fluid content ' + newState + ' ' + sectionName;
    }
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
    } else if (url.indexOf('join') != -1) {
        showSection('join', newLoad);
    } else {
        showSection('home', newLoad);
    }

};

window.onpopstate = function(event) {
    showInitialSection(false);
};

// Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-28361374-3', 'hackerscoop.com');
        ga('send', 'pageview');

