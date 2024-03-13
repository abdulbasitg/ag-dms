sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("comagagdms.controller.Main", {
            onInit: function () {
                var destinationPath = sap.ui.loader._.getResourcePath("comagagdms") + "/api";
                this.getView().byId("documentTable").setSettings({
                    "destinationPath": destinationPath,
                    "repositoryId": "b3c14583-17ce-4ae3-8575-c23d4c653ae8",
                    "objectId": "bdcb938000310e7b2b4fee56",
                    "forceLoad": false
                  });
            }     
        });
    });
