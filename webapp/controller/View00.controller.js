sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Messaging",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    (Controller, Messaging, JSONModel, SimpleType, ValidateException, MessageBox, MessageToast) => {
        "use strict";

		return Controller.extend("sap.m.sample.InputChecked.C", {

			onInit: function () {
				var oView = this.getView(),
					oMM = Messaging;
	
				oView.setModel(new JSONModel({ valor1: "", email: "" }));
	
		},

		_validateInput: function (oInput) {
			var sValueState = "None";
			var bValidationError = false;
			var oBinding = oInput.getBinding("value");

			try {
				oBinding.getType().validateValue(oInput.getValue());
			} catch (oException) {
				sValueState = "Error";
				bValidationError = true;
			}

			oInput.setValueState(sValueState);

			return bValidationError;
		},

		onValorChange: function(oEvent) {
			var oInput = oEvent.getSource();
			this._validateInput(oInput);
		},

		onCalcular: function () {
			// collect input controls
			var oView = this.getView(),
				aInputs = [
				oView.byId("valor1Input"),
				oView.byId("emailInput")
			],
				bValidationError = false;

			// Check that inputs are not empty.
			// Validation does not happen during data binding as this is only triggered by user actions.
			aInputs.forEach(function (oInput) {
				bValidationError = this._validateInput(oInput) || bValidationError;
			}, this);

			if (!bValidationError) {
				MessageToast.show("The input is validated. Your form has been submitted.");
			} else {
				MessageBox.alert("A validation error has occurred. Complete your input first.");
			}
		},

		/**
		 * Custom model type for validating an E-Mail address
		 * @class
		 * @extends sap.ui.model.SimpleType
		 */
		customEMailType: SimpleType.extend("email", {
			formatValue: function (oValue) {
				return oValue;
			},

			parseValue: function (oValue) {
				//parsing step takes place before validating step, value could be altered here
				return oValue;
			},

			validateValue: function (oValue) {
				// The following Regex is only used for demonstration purposes and does not cover all variations of email addresses.
				// It's always better to validate an address by simply sending an e-mail to it.
				var rexMail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
				if (!oValue.match(rexMail)) {
					throw new ValidateException("'" + oValue + "' is not a valid e-mail address");
				}
			}
		})

	});
});