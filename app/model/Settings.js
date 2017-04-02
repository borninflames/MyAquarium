Ext.define('MyAquarium.model.Settings', {
    extend: 'Ext.data.Model',
    config: {        
        fields: [ 'ipAddress', 'name', 'email', 'password',],
        proxy: {
            type: 'localstorage',
            id  : 'my-aquarium-settings'
        }        
    }
});