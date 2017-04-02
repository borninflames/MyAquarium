Ext.define('MyAquarium.view.Actions', {
    extend: 'Ext.Panel',
    xtype: 'actionscard',
    config: {
        title: "Actions",
        iconCls: 'action',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Actions'
        }, {
            xtype: "image",
            src: "http://placehold.it/200x200",
            width: '100%',
            height: '100%'
        }, {
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: "button",
                text: "Photo Library",
                handler: function(btn) {
                    var panel = btn.up('panel');

                    panel.getPhoto(navigator.camera.PictureSourceType.PHOTOLIBRARY);
                }
            }, {
                xtype: "button",
                text: "Take Photo",
                handler: function(btn) {
                    var panel = btn.up('panel');

                    panel.getPhoto(navigator.camera.PictureSourceType.CAMERA);
                }
            }]
        }]
    },
    getPhoto: function(source) {
        var me = this;

        navigator.camera.getPicture(me.success, me.failure, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: source 
        });

    },

    success: function(image_uri) {
        var img = Ext.ComponentQuery.query("image")[0];
        img.setSrc(image_uri);
    },

    failure: function(message) {
        alert("Failed" + message);
    }
});