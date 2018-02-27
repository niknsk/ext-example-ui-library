<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

use PleskExt\ExtExampleUILibrary\ApiController;

class SettingsController extends ApiController
{
    /**
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     * @throws pm_Exception_InvalidArgumentException
     */
    public function saveAction()
    {
        $backgroundImage = $this->_request->getParam('backgroundImage');
        
        \pm_Settings::set('backgroundImage', $backgroundImage);
    }

    public function loadAction()
    {
        $data = ['backgroundImage' => \pm_Settings::get('backgroundImage')];

        $this->sendJsonResponse($data);
    }

    public function indexAction()
    {
        $this->forward('index', 'index');
    }
}
