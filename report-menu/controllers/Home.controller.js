sap.ui.define([
	"./AbstractController",
	"sap/ui/model/json/JSONModel"
], function(AbstractController, JSONModel) {
	"use strict";
	
	return AbstractController.extend("report-menu.controllers.Home", {

		onInit: function() {
			// Bind the JSON object.
			let reports = new JSONModel("report-menu/models/reports.json");
			this.getView().setModel(reports, "ReportModel");
		},

		onTilePress: function(event) {
			let path = event.getSource().getBindingContext("ReportModel").getPath();
			let value = this.getView().getModel("ReportModel").getProperty(path);
			// this.getRouter().navTo(value.href);
			// window.open(value.href, "_blank");
		},

	});

});