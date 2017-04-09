Ext.define('MyAquarium.store.Settings', {
    extend: 'Ext.data.Store',
    config: {        
        model: 'MyAquarium.model.Settings',
        storeId: 'SettingsStore',
        autoLoad: true,
        autoSync: true
    }
});