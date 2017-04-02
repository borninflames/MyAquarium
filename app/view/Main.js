Ext.define('MyAquarium.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
        'MyAquarium.view.Home',
        'MyAquarium.view.Settings',
        'MyAquarium.view.Actions'
    ],
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {             
                pack: 'center'
            }
        },
        items: [
            { xtype: 'homecard' },
            { xtype: 'settingscard' },
            { xtype: 'actionscard' }
        ]
    }
});