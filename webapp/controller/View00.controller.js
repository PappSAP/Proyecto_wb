sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Messaging",
    "sap/m/MessageToast"
], 
(Controller, Messaging, MessageToast) => {
    "use strict";

    return Controller.extend("proyectowb.controller.View00", {
        onInit() {
            let oView = this.getView(),
                oMM = Messaging;

            oView = setModel( new JSModel({Input0:"", Input1:""}));
            		// attach handlers for validation errors
			oMM.registerObject(oView.byId("ValInput0"), true);
			oMM.registerObject(oView.byId("ValInput1"), true);

        },

/*         OnPress : function (oEvent) {
            let oInput0 = this.getView().byId("Input0");
            let oInput1 = this.getView().byId("Input1");
            //let oinput0 = oEvent.getParameter()
            //MessageToast.show(oItem.Name);
            MessageToast.show( 'ingreso ' + oInput0.name ); 
    } */
    });
});