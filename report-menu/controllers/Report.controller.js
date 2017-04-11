sap.ui.define([
	"./AbstractController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(AbstractController, JSONModel, MessageToast) {
	"use strict";
	
	return AbstractController.extend("report-menu.controllers.Report", {

		onInit: function() {

			this.getRouter().getRoute("Report").attachPatternMatched(this._routeMatched, this);

			// Bind the JSON object.
			let reports = new JSONModel("report-menu/models/reports.json");
			this.getView().setModel(reports, "ReportModel");

		},

		onSectionPress: function(event) {
			let path = event.getSource().getBindingContext("ReportModel").getPath();
			let value = this.getView().getModel("ReportModel").getProperty(path);
			MessageToast.show(value.href);
			// window.open(value.href, "_blank");
		},

		_routeMatched: function(event) {
			this.getView().bindElement({
				path: "/reports/" + event.getParameter("arguments").id,
				model: "ReportModel"
			});
		}

	});

});