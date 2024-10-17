Ext.define('Desktop.views.Principal', {
	extend: 'Ext.container.Viewport',
	layout: 'border',

	initComponent: function () {
		let me = this;

		let testandoRequests = function () {
			Ext.Ajax.request({
				url: getURL('products'),
				method: 'GET',
				// params: {
				// 		userId: 123,
				// 		name: 'João'
				// },
				success: function(response) {
						var responseData = Ext.decode(response.responseText);
						console.log('Resposta do servidor:', responseData);
				},
				failure: function(response) {
						console.error('Erro ao fazer a requisição:', response.status);
				}
			});
		};

		Ext.apply(me, {
			items: [
				{
					region: 'south',
					xtype: 'toolbar',
					items: [
						{
							text: '<b>Menu</b>',
							handler: function () {
								testandoRequests();
							},
						},
						{
							text: 'Salvar',
							xtype: 'button',
							width: 100,
							style: {
								marginLeft: '125px'
							},
							iconCls: 'salvar',
							handler: function () {
								const loginWindow = Ext.create('Desktop.components.Login');
								if (loginWindow) {
        					loginWindow.show();
								}
							}
						},
					],
				},
				{
					region: 'center',
					xtype: 'panel',
					title: 'Área de Trabalho',
					html: '<h1>Bem-vindo ao Desktop</h1>',
					bodyStyle: 'padding: 10px;',
				},
			],
		});
		me.callParent(arguments);
	},
});
