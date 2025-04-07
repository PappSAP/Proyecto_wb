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
            let oInput0 = this.getView().byId("Input0");
            let oInput1 = this.getView().byId("Input1");
            //let oinput0 = oEvent.getParameter()
            //MessageToast.show(oItem.Name);
            MessageToast.show( 'ingreso ' + oInput0.name );
    }
    });
});