Ext.define('MyAquarium.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',
    requires: [
        'MyAquarium.view.Devices',
    ],
    config: {
        title: "Home",
        iconCls: 'home',
        layout: 'vbox',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Home',
            },
            { 
                xtype: 'deviceslist',
                flex: 1
            }
        ],
    }    
});