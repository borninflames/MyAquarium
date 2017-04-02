Ext.define('MyAquarium.model.Device', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['firstName', 'middleInitial', 'lastName'],
        proxy: {
            type: 'localstorage',
            id  : 'my-aquarium-devices'
        }
    }
});