<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

use PleskExt\ExampleUiLibrary\ApiController;

class SettingsController extends ApiController
{
    /**
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     * @throws pm_Exception_InvalidArgumentException
     */
    public function saveAction()
    {
        $settings= $this->_request->getParam('settings');
        
        \pm_Settings::set('settings', $settings);
    }

    public function loadAction()
    {
        $settings = json_decode(\pm_Settings::get('settings'));

        $this->sendJsonResponse($settings);
    }

    public function indexAction()
    {
        $this->forward('index', 'index');
    }
}
