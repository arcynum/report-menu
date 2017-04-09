sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("library.controllers.BaseController", {

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			let history;
			let previousHash;
			history = History.getInstance();
			previousHash = history.getPreviousHash();
			if (previousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true);
			}
		}

	});
	
});