<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

class IndexController extends \pm_Controller_Action
{
    public function init()
    {
        parent::init();

        $this->view->baseUrl = \pm_Context::getBaseUrl();
    }

    public function indexAction()
    {
        $this->view->props = json_encode([]);
    }
}
