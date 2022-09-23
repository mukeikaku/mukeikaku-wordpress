<?php
$dirname = dirname(__FILE__);
$manifest = json_decode(file_get_contents("{$dirname}/asset-manifest.json"), true);
$_ = function ($path = '') use ($manifest) { return $manifest[$path]; };
$spriteSvg = file_get_contents("{$dirname}/assets/sprites/index.svg");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link href="<?= $_('assets/styles/index.css') ?>" rel="stylesheet" />
  <link href="<?= $_('assets/images/favicon.ico') ?>" rel="icon" />
  <title>MPA Boilerplate</title>
</head>
<body>
  <?= $spriteSvg ?>

  <h1 class="text-5xl font-bold" data-target>MPA Boilerplate</h1>

  <img src="<?= $_('assets/images/logo.png') ?>" class="block" />

  <ul class="flex items-center">
    <li>
      <button class="align-top" data-trigger>
        <svg class="w-8 h-8 align-top">
          <use xlink:href="#sprite-flask"></use>
        </svg>
      </button>
    </li>
    <li class="ml-2.5">
      <a
        href="https://github.com/dsktschy/mpa-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
        class="align-top"
      >
        <svg class="w-8 h-8 align-top">
          <use xlink:href="#sprite-github"></use>
        </svg>
      </a>
    </li>
  </ul>

  <script src="<?= $_('assets/scripts/index.js') ?>"></script>
</body>
</html>
