<?php

add_action('init', function () {
    if (file_exists(ABSPATH . "asset-manifest.json")) {
        define('ASSETS_MANIFEST', json_decode(file_get_contents(ABSPATH . "/asset-manifest.json"), true));
    }
});

function asset($path = '')
{
    if (defined('ASSETS_MANIFEST') && !empty(ASSETS_MANIFEST['assets/' . $path])) {
        return get_home_url() . ASSETS_MANIFEST['assets/' . $path];
    }
};
