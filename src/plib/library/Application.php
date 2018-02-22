<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

namespace PleskExt\ExtExampleUILibrary;

use PleskExt\ExtExampleUILibrary\Plugin\Route;

/**
 * Class Application
 *
 * @package PleskExt\ExtExampleUILibrary
 */
class Application extends \pm_Application
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        \Zend_Controller_Front::getInstance()->registerPlugin(new Route());

        parent::init();
    }
}
