Ext.define('MyAquarium.view.DeviceListItem', {
    extend: 'Ext.dataview.component.ListItem',
    xtype : 'devicelistitem',
    requires: [
        'Ext.field.Toggle'
    ],
    config: {
        cls: 'device-list-item',
        dataMap: {
            getName: {
                setHtml: 'name'
            },
             getRelayId: {
                 setValue: 'isOn'
             }
        },

        name: {
            flex: 1
        },
        relayId: {
             flex: 1
         },
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },
    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }
        if (oldName) {
            this.remove(oldName);
        }
    },
    applyRelayId: function(config) {
        return Ext.factory(config, Ext.field.Toggle, this.getRelayId());
    },
    updateRelayId: function(newSlider, oldSlider) {
        if (newSlider) {

            newSlider.on('change', this.onRelayChange, this);

            this.add(newSlider);
        }

        if (oldSlider) {
            this.remove(oldSlider);
        }
    },
    onRelayChange: function(field, newValue){
        var record = this.getRecord();
        var devicesStore = Ext.getStore('DevicesStore');
        var id = record.get('id');
        var device = devicesStore.getById(id);
        device.set('isOn', newValue);
    }
});