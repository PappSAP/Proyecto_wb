sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 
(Controller, MessageToast) => {
    "use strict";

    return Controller.extend("proyectowb.controller.View00", {
        onInit() {
        },

        OnPress : function (oEvent) {
            let oinput01 = oEvent.getParameter("input0");
            let oinput0 = oEvent.getParameter()
            //MessageToast.show(oItem.Name);
            MessageToast.show( 'ingreso ' + oinput0.name );
    }
    });
});