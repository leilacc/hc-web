function showSection(sectionName) {
    var sectionList = ["home", "projects", "meetings", "events", "sponsors"]
    
    // Remove given section from list
    var index = sectionList.indexOf(sectionName);
    if (index > -1) {
        sectionList.splice(index, 1);
    }

    // Set class for given section
    var section = document.getElementsByClassName(sectionName);
    console.log(section);
    section[0].className = 'row-fluid content visible ' + sectionName;

    // Set classes for other sections
    for (var i = 0; i < sectionList.length; i++) {
        var currSectionName = sectionList[i];
        var currSection = document.getElementsByClassName(currSectionName);
        currSection[0].className = 'row-fluid content hidden ' + currSectionName;
    }
};