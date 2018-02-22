<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

use PleskExt\ExtExampleUILibrary\ApiController;

class HomePageController extends ApiController
{
    public function hideVersionAction()
    {
        $hideVersion = filter_var($this->_request->getParam('hideVersion'), FILTER_VALIDATE_BOOLEAN);

        \pm_Settings::set('hideVersion', $hideVersion);
    }

    public function dataAction()
    {
        $hideVersion = \pm_Settings::get('hideVersion');

        $data = ["hideVersion" => isset($hideVersion)
            ? $hideVersion
            : false
        ];

        $this->sendJsonResponse($data);
    }
}
