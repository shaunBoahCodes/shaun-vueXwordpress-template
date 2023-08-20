<?php 

function theme_js() {
    //To avoid caching I use time, remove it in production.    
    wp_enqueue_script('vue', get_template_directory_uri() . '/dist/bundle.js', '', '1.0.0', true);
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

function theme_styles() {
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/src/assets/main.css' );
    
    wp_enqueue_style( 'tailwind_css', get_template_directory_uri() . '/src/assets/tailwind.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );