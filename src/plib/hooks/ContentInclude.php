<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

/**
 * Class Modules_Advisor_ContentInclude
 */
class Modules_ExtExampleUILibrary_ContentInclude extends pm_Hook_ContentInclude
{
    /**
     * @inheritdoc
     */
    public function getHeadContent()
    {
        $cssFiles = ['css/main.css'];

        return
            implode("\n", array_map(function ($file) {
                return '<link rel="stylesheet" href="' . pm_Context::getBaseUrl() . $file . '">';
            }, $cssFiles));
    }
}
