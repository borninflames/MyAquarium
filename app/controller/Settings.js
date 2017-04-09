Ext.define('MyAquarium.controller.Settings', {
    extend: 'Ext.app.Controller',
    requires: [
        'MyAquarium.model.Settings',
        'MyAquarium.store.Settings'
    ],
    config: {
        refs: {
            settingsForm: '#settingsForm'
        }           
    },
    launch: function(){

        var settingsStore = Ext.getStore('SettingsStore');
        settingsStore.load();
        
        var defaultSettings = settingsStore.first();
        if (!defaultSettings) {
            defaultSettings = {
                name: 'Boo',
                email: 'borninflames85@gmail.com',
                ipAddress: '192.168.4.1'};
            settingsStore.add(defaultSettings);
            defaultSettings = settingsStore.first();
        }        

        var settingsForm = this.getSettingsForm();
        settingsForm.setValues(defaultSettings.data);
    }
});