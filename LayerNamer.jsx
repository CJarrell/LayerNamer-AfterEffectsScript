var currentProject = app.project;
var currentComp = app.project.activeItem;
var layersToName = currentComp.selectedLayers;

function layerNamer() {
	var layerNamerWindow = new Window("palette", "Layer Namer", undefined);

	var inputGroup = layerNamerWindow.add("group", undefined, "Elements", {closeButton: false});
		inputGroup.orientation = "column";

		var nameBox = inputGroup.add("edittext", [10, 10, 500, 30], "Layer Name", {active: true});
			nameBox.active = true;
		inputGroup.add("statictext", undefined, "Only put commas between names. Do NOT use spaces.");

	var buttonGroup = layerNamerWindow.add("group", undefined, "Buttons")
			buttonGroup.orientation = "row";

		var nameButton = buttonGroup.add("button", undefined, "Name Selected Layers");
		var cancelButton = buttonGroup.add("button", undefined, "Cancel", {name: "cancel"});

			nameButton.onClick = function(){
				var names = nameBox.text;
				var nameArray = names.split(',');
				var namesLength = nameArray.length;

				for(i = 0; i < namesLength; i++){
					layersToName[i].name = nameArray[i];
				};
			}
			cancelButton.onClick = function(){
				layerNamerWindow.hide();
			}
	layerNamerWindow.center();
	layerNamerWindow.show();
}

var newLayerNamer = layerNamer();