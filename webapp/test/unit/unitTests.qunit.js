/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comag/ag-dms/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
