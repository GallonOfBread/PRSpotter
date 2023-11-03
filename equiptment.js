// TODO:
// Load weight from object
// Load plates from string
// Load plates from object
// Add Dumbbell/kettlebell/freeweights type
// Rename Equiptment
// Update time
// Sort by time
// Make changed values blue
// Make referenced values gray
// Prevent references to refereces
// Prevent deleting equiptment that is referenced

let system_name = '';

function lock_main() {
    let main_elements = document.getElementsByClassName('main-screen');
    for (i = 0; i < main_elements.length; i++) {
        element = main_elements[i];
        element.disabled = true;
    }
}

function free_main() {
    let main_elements = document.getElementsByClassName('main-screen');
    for (i = 0; i < main_elements.length; i++) {
        element = main_elements[i];
        element.disabled = false;
    }
}

function save_equiptment() {
    free_main();
    bar_value = document.getElementById('system-bar-weight').value;
    if (!isNaN(bar_value)) {
        if (system_name != null) {
            contents["weight-systems"][system_name]["bar"]["weight"] = bar_value;
            refresh_dropdown();
        }
    }
    console.log(system_name, document.getElementById("system-name").value)
    if (system_name != null && system_name != document.getElementById("system-name").value) {
        new_name = document.getElementById("system-name").value;
        if (new_name != null && new_name != "" && !(new_name in Object.keys(contents["weight-systems"]))) {
            contents["weight-systems"][new_name] = contents["weight-systems"][system_name];
            delete contents["weight-systems"][system_name];
            refresh_dropdown();
        }
    }
    document.getElementsByClassName("alert")[0].remove();
}

function cancel_equiptment() {
    free_main();
    document.getElementsByClassName("alert")[0].remove();
}

function delete_equiptment() {
    if (system_name != null) {
        if (Object.keys(contents["weight-systems"]).length > 1) {
            let certain = confirm("Are you sure you want to delete " + Object.keys(contents["weight-systems"])[active_indexes["weight-systems"]] +"?");
            if (certain) {
                delete contents["weight-systems"][Object.keys(contents["weight-systems"])[active_indexes["weight-systems"]]];
                active_indexes["weight-systems"] = 0;
                refresh_dropdown();
            }
        }
        else {
            alert("You can't delete your only " + dropdown + ".")
        }
    }
    cancel_equiptment();
}

function add_option(dropdown) {
    // OLD VERSION
    let response = prompt("Enter name of new " + dropdown, dropdown);
    if (response != null && response != "" && response != dropdown && !(response in Object.keys(contents[dropdown]))) {
        contents[dropdown][response] = ["45 lbs", ["45 lbs", "25 lbs", "10 lbs", "5 lbs", "2.5 lbs"]][["bar","plates"].indexOf(dropdown)];
        active_indexes[dropdown] = Object.keys(contents[dropdown]).length-1;
        [bar_dropdown, plates_dropdown][["bar","plates"].indexOf(dropdown)].selectedIndex = active_indexes[dropdown];
        refresh_dropdown();
    }
    revalue_option(dropdown);
}

function edit_option(dropdown) {
    // OLD VERSION
    let response = prompt("Enter new name of this " + dropdown, Object.keys(contents[dropdown])[active_indexes[dropdown]]);
    if (response != null && response != "" && response != Object.keys(contents[dropdown])[active_indexes[dropdown]] && !(response in Object.keys(contents[dropdown]))) {
        contents[dropdown][response] = contents[dropdown][Object.keys(contents[dropdown])[active_indexes[dropdown]]];
        delete contents[dropdown][Object.keys(contents[dropdown])[active_indexes[dropdown]]];
        refresh_dropdown();
    }
    revalue_option(dropdown);
}

function revalue_option(dropdown) {
    // OLD VERSION
    let active_key = Object.keys(contents[dropdown])[active_indexes[dropdown]];
    let response;
    if (dropdown == "bar") {
        response = prompt("Enter weight of " + active_key + ".", Object.values(contents[dropdown])[active_indexes[dropdown]]);
    }
    else {
        response = prompt("Enter weights for " + active_key + ". Separate values by commas.", Object.values(contents[dropdown])[active_indexes[dropdown]].join(", "));
    }
    
    // fix this if thingy
    if (response != null && response != "" && response != Object.values(contents[dropdown])[active_indexes[dropdown]] && !(response in Object.values(contents[dropdown]))) {
        if (dropdown == "bar") {
            contents[dropdown][active_key] = response;
        }
        else {
            contents[dropdown][active_key] = response.replaceAll(", ",",").split(",");
        }
        refresh_dropdown();
    }
}

function selected_option(dropdown) {
    console.log(dropdown);
    if (dropdown == "weight-systems") {
        active_indexes[dropdown] = weight_dropdown.selectedIndex;
    }
}

function refresh_dropdown() {
    while (weight_dropdown.options.length > 0) {                
        weight_dropdown.remove(0);
    } 
    for (let n of Object.keys(contents["weight-systems"])) {
        option = document.createElement("option");
        option.text = n;
        weight_dropdown.add(option);
    }
    weight_dropdown.selectedIndex = active_indexes["weight-systems"];
}

function edit_equiptment(TYPE) {
    lock_main();
    if (document.getElementsByClassName("alert").length != 0) {
        document.getElementsByClassName("alert")[0].remove();
    }
    let BODY = document.getElementsByTagName("body")[0];
    form = document.createElement("div");
    form.innerHTML = "<div>\
    <label for='system-name'>Name:</label>\
    <input id='system-name'/>\
    <button><i onclick='pin_system()' class='fa-solid fa-thumbtack'></i></button>\
    <button onclick='delete_equiptment()'><i class='fa-solid fa-trash'></i></button>\
    </div>\
    <div>\
    <label for='system-type-dropdown'>Type:</label>\
    <select name='system-type-dropdown' id='system-type-dropdown' onchange='change_system_type()'>\
    <option>Bar & Plates</option>\
    </select>\
    </div>\
    <div>\
    <h3>Bar</h3>\
    <label for='system-bar-dropdown'>Copy:</label>\
    <select name='system-bar-dropdown' id='system-bar-dropdown' onchange='copy_system_bar()'></select><br/>\
    <label for='system-bar-weight'>Weight:</label>\
    <input type='number' min='1' id='system-bar-weight'/>\
    <select name='bar-unit-selection' id='bar-unit-selection'>\
    <option>lbs</option>\
    <option>kg</option>\
    </select>\
    </div>\
    <div>\
    <h3>Plates</h3>\
    <label for='system-plates-dropdown'>Copy:</label>\
    <select name='system-plates-dropdown' id='system-plates-dropdown' onchange='copy_system_plates()'></select><br/>\
    <label for='system-plates-weight'>Weight:</label>\
    <input type='number' min='1' id='system-plates-weight'/>\
    <select name='plates-unit-selection' id='plates-unit-selection'>\
    <option>lbs</option>\
    <option>kg</option>\
    </select>\
    </div>\
    <div class='bottom r-align'>\
    <button onclick='save_equiptment()'><i class='fa-solid fa-floppy-disk'></i></button>\
    <button onclick='cancel_equiptment()'><i class='fa-solid fa-ban'></i></button>\
    </div>";
    form.classList.add("alert");
    BODY.appendChild(form);
    for (let i = 0; i < 2; i++) {
        dropdown = [document.getElementById("system-bar-dropdown"),document.getElementById("system-plates-dropdown")][i];
        option = document.createElement("option");
        option.text = "";
        dropdown.add(option);
        for (let n of Object.keys(contents["weight-systems"])) {
            option = document.createElement("option");
            option.innerHTML = n;
            dropdown.add(option);
        }
    }
    if (TYPE == 'EDIT') {
        system_name = Object.keys(contents["weight-systems"])[active_indexes["weight-systems"]];
        ws = contents["weight-systems"][system_name];
        document.getElementById("system-name").value = system_name;
        if (typeof ws["bar"] === "string" || ws["bar"] instanceof String) {
            document.getElementById("system-bar-dropdown").selectedIndex = Object.keys(contents["weight-systems"]).indexOf(ws["bar"]) + 1;
        }
        else {
            document.getElementById('system-bar-weight').value = ws["bar"]["weight"];
        }
    }
    else {
        system_name = null;
    }
    if (false) {
        if (response != null && response != "" && response != dropdown && !(response in Object.keys(contents[dropdown]))) {
            contents[dropdown][response] = ["45 lbs", ["45 lbs", "25 lbs", "10 lbs", "5 lbs", "2.5 lbs"]][["bar","plates"].indexOf(dropdown)];
            active_indexes[dropdown] = Object.keys(contents[dropdown]).length-1;
            [bar_dropdown, plates_dropdown][["bar","plates"].indexOf(dropdown)].selectedIndex = active_indexes[dropdown];
            refresh_dropdown();
        }
        revalue_option(dropdown);
    }
}