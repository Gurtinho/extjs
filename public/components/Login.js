Ext.define('Desktop.components.Login', {
	extend: 'Ext.window.Window',
	title: 'Login',
	width: 300,
	layout: 'fit',
	modal: true,
	items: [
		{
			xtype: 'form',
			bodyPadding: 10,
			items: [
				{
					xtype: 'textfield',
					name: 'name',
					id: 'name_login',
					fieldLabel: 'Nome',
					allowBlank: false,
				},
				{
					xtype: 'textfield',
					name: 'email',
					id: 'email_login',
					fieldLabel: 'Email',
					inputType: 'email',
					allowBlank: false,
				},
			],
			buttons: [
				{
					text: 'Login',
					handler: function (btn) {
						const form = btn.up('form').getForm();
						if (form.isValid()) {
							console.log('Usuário e senha válidos.');
						}
            Ext.Ajax.request({
              url: getURL('products/create'),
              method: 'POST',
              params: {
                name: Ext.getCmp('name_login').getValue(),
                email: Ext.getCmp('email_login').getValue()
              },
              success: function(response) {
                  var responseData = Ext.decode(response.responseText);
                  console.log('Resposta do servidor:', responseData);
              },
              failure: function(response) {
                  console.error('Erro ao fazer a requisição:', response.status);
              }
            });
					},
				},
			],
		},
	],
});
