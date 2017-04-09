Ext.define('MyAquarium.model.Device', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'name', 
            'deviceType',                         
            { name: 'isOn', type: 'bool' },
            { name: 'order', type: 'int' },
            { name: 'relayId', type: 'int' }
            ],
        proxy: {
            type: 'localstorage',
            id  : 'my-aquarium-devices'
        }
    }
});