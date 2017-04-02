Ext.define('MyAquarium.store.Settings', {
    extend: 'Ext.data.Store',
    config: {        
        model: 'MyAquarium.model.Settings',
        autoLoad: true,
        autoSync: true
    }
});