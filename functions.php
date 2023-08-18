<?php 

function theme_styles() {
    wp_enqueue_style( 'vendor_css', get_template_directory_uri() . '/public/css/vendor.css' );
    //To avoid caching I use time, remove it in production.   
    wp_enqueue_style( 'theme_css', get_template_directory_uri() . '/public/css/app.css?='.time() );
}
//add_action( 'wp_enqueue_scripts', 'theme_styles' );

function theme_js() {
    //To avoid caching I use time, remove it in production.    
    wp_enqueue_script('vue', get_template_directory_uri() . '/dist/bundle.js', '', '1.0.0', true);
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' ); 