Ext.define('MyAquarium.controller.Devices', {
    extend: 'Ext.app.Controller',
    requires: [
        'MyAquarium.model.Device',
        'MyAquarium.store.Devices'
    ],
    launch: function () {
        var devicesStore = Ext.getStore('DevicesStore');
        if (!devicesStore.getAllCount()) {
            var defaultData = [
                {
                    name: 'Device1',
                    deviceType: 'DeviceType1',
                    isOn: false,
                    order: 1,
                    relayId: 1
                },
                {
                    name: 'Device2',
                    deviceType: 'DeviceType1',
                    isOn: false,
                    order: 2,
                    relayId: 2
                },
                {
                    name: 'Device3',
                    deviceType: 'DeviceType3',
                    isOn: false,
                    order: 3,
                    relayId: 3
                },
                {
                    name: 'Device4',
                    deviceType: 'DeviceType3',
                    isOn: false,
                    order: 4,
                    relayId: 4
                },
                {
                    name: 'Device5',
                    deviceType: 'DeviceType5',
                    isOn: false,
                    order: 5,
                    relayId: 5
                },
                {
                    name: 'Device6',
                    deviceType: 'DeviceType1',
                    isOn: false,
                    order: 6,
                    relayId: 6
                },
                {
                    name: 'Device7',
                    deviceType: 'DeviceType1',
                    isOn: false,
                    order: 7,
                    relayId: 7
                },
                {
                    name: 'Device8',
                    deviceType: 'DeviceType1',
                    isOn: false,
                    order: 8,
                    relayId: 8
                }
            ];
            devicesStore.setData(defaultData);
        }
    }
});