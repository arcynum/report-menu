sap.ui.define([
	"./AbstractController",
	"sap/ui/model/json/JSONModel"
], function(AbstractController, JSONModel) {
	"use strict";
	
	return AbstractController.extend("librarian.controllers.Home", {

		onInit: function() {
			// Bind the JSON object.
			let roles = new JSONModel("librarian/models/roles.json");
			this.getView().setModel(roles, "RoleModel");
		},

		onTilePress: function(event) {
			let path = event.getSource().getBindingContext("RoleModel").getPath();
			let value = this.getView().getModel("RoleModel").getProperty(path);
			this.getRouter().navTo(value.href);
		},

	});

});