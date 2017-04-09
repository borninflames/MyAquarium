Ext.define('MyAquarium.view.Devices', {
    extend: 'Ext.List',
    xtype: 'deviceslist',
    requires: [
        'MyAquarium.store.Devices',
        'MyAquarium.view.DeviceListItem'
    ],    
    config: {
        store: 'DevicesStore',
        useComponents: true,
        defaultType: 'devicelistitem',
        selectedCls: ''
    }
});