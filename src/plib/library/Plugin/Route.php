<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

namespace PleskExt\ExampleUiLibrary\Plugin;

/**
 * Class Route
 *
 * @package PleskExt\ExampleUiLibrary\Plugin
 */
class Route extends \Zend_Controller_Plugin_Abstract
{
    /**
     * @inheritdoc
     */
    public function preDispatch(\Zend_Controller_Request_Abstract $request)
    {
        $dispatcher = \Zend_Controller_Front::getInstance()->getDispatcher();

        if (!$dispatcher->isDispatchable($request)) {
            $request->setControllerName('index')->setActionName('index');
        }
    }
}
