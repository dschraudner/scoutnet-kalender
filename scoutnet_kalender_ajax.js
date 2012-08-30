// Man k�nnte den Aufruf auch per DOM-ready machen, davon ausgehend,
// dass Wordpress unser JS jedoch ans Ende des Dokumentes packt, ist das DOM
// schon fertig, wenn dieses Skript geladen und ausgef�hrt wird
//
//jQuery(document).ready(function()
//{
	// nur AJAX-Request ausf�hren, wenn das Zieldiv im DOM vorhanden ist
	// da der Name der Klasse in der Adminoberfl�che beliebig einstellbar ist,
	// m�ssen wir den hier nat�rlich kennen
	// kommt aus SNK_ajax.wrapclassname
	// wir verwenden eine Klasse statt einer ID, da wir den Content so auch in mehrere
	// Elemente reinladen k�nnten (wenn das gew�nscht ist)
	if(jQuery('.' + SNK_ajax.wrapclassname).length >= 1) {
		jQuery.post(
			SNK_ajax.ajaxurl,
			{
				action : 'SNK_ajax-submit',
				snk_args : SNK_ajax.args,
				snk_data : SNK_ajax.data,
				snk_nonce: SNK_ajax.nonce
			},
			function(daten) {
				// wenn Daten rauskommen
				if(daten.length > 0 && daten != '-1') {
					// abgefragte Daten unver�ndert ins DOM einf�gen
					jQuery('.' + SNK_ajax.wrapclassname).html(daten);
				} else {
					// ansonsten tun wir sicherheitshalber mal nix und returnen
					return false;
				}
			}
		);
	}
//});