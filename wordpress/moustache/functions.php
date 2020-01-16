<?php

//========================
/*--- NOVO CAMPO TYPE --*/
//========================

//CRIA O TIPO DO POST NO MENU ADMIN
add_action( 'init', 'create_post_type_cadastro' );
function create_post_type_cadastro() {
	$labels = array(
		'name' 					=> 'Cadastros',
		'singular_name' 		=> 'Cadastro',
		'add_new' 				=> 'Adicionar Cadastro',
		'add_new_item' 			=> 'Criar Cadastro',
		'edit_item' 			=> 'Editar Cadastro',
		'new_item' 				=> 'Novo Cadastro',
		'all_items' 			=> 'Todos os Cadastros',
		'view_item' 			=> 'Ver Cadastro',
		'search_items' 			=> 'Buscar Cadastro',
		'not_found' 			=> 'Nenhum Cadastro Encontrado',
		'not_found_in_trash' 	=> 'Nenhum Cadastro na Lixeira',
		'parent_item_colon' 	=> '',
		'menu_name' 			=> 'Cadastro'
	);
	$args = array(
		'labels' 				=> $labels,
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu' 			=> true,
		'menu_icon' 			=> 'dashicons-media-document',
		'rewrite' 				=> array(
									'slug' => 'cadastro',
									'with_front' => false,
								),
		'capability_type' 		=> 'post',
		'has_archive' 			=> true,
		'hierarchical' 			=> false,
		'menu_position' 		=> null,
		'supports' 				=> array('title','custom-fields','revisions')
	  );
    register_post_type( 'cadastro', $args );
    //flush_rewrite_rules();
}

add_action('init','create_cadastro_head');
function create_cadastro_head(){
	if ( 'POST' == $_SERVER['REQUEST_METHOD'] && !empty( $_POST['action'] ) && $_POST['action'] == "sending_data") {
		/* ==== ESSAY ==== */
		$new = array(
			'post_title'    => $_POST['name'],
			'post_status'   => 'publish',          
			'post_type'     => 'cadastro' 
		);

		$post_id = wp_insert_post($new);

		update_post_meta($post_id, 'name', $_POST['name']);
		update_post_meta($post_id, 'zipcode', $_POST['zipcode']);
		update_post_meta($post_id, 'email', $_POST['email']);
		update_post_meta($post_id, 'address', $_POST['address']);
		update_post_meta($post_id, 'number', $_POST['number']);
		update_post_meta($post_id, 'phone', $_POST['phone']);
		update_post_meta($post_id, 'neighbourhood', $_POST['neighbourhood']);
		update_post_meta($post_id, 'birthday', $_POST['birthday']);
		update_post_meta($post_id, 'city', $_POST['city']);
		update_post_meta($post_id, 'state', $_POST['state']);
	}
}