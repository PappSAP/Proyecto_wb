/*global QUnit*/

sap.ui.define([
	"proyectowb/controller/View00.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View00 Controller");

	QUnit.test("I should test the View00 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
