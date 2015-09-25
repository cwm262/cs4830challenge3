# cs4830challenge3
CS4830 Improving AJAX Based Navigation

Addendum:
	Allowed pages to refresh to "clean" url (e.g., cdubb.me/historynav/contact) without navigating directly to the end-point nor with a 404 response by adding the following Rewrites to apache:

	RewriteEngine On
	RewriteBase /historynav
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule (.*) index.html?$1 [QSA,L]
