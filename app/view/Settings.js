Ext.define('MyAquarium.view.Settings', {
    extend: 'Ext.form.Panel',
    xtype: 'settingscard',
    id: 'settingsForm',
    config: {
        title: "Settings",
        iconCls: 'settings',
        items: [    
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Settings'
            },
            {
                xtype: 'textfield',
                name : 'ipAddress',
                label: 'ipAddress'
            },
            {
                xtype: 'textfield',
                name : 'name',
                label: 'Name'
            },
            {
                xtype: 'emailfield',
                name : 'email',
                label: 'Email'
            },
            {
                xtype: 'passwordfield',
                name : 'password',
                label: 'Password'
            }                
        ]
    }
});

