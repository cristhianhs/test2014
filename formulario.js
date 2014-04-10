var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$post = $(".item").first();

function mostrarFormulario()
{
	$form.slideToggle();
	return false;
}
function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

}

//eventos
$button.click(mostrarFormulario);