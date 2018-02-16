<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

class Modules_UiLibraryDemo_ContentInclude extends pm_Hook_ContentInclude
{
    public function getBodyContent()
    {
        $baseUrl = \pm_Context::getBaseUrl();
        $props = json_encode([
            'date' => date('Y-m-d H:i:s'),
        ]);

        return <<<HTML
<script>
    require(["${baseUrl}main.js"], function (main) {
        main(${props});
    })</script>';
HTML;
    }
}
