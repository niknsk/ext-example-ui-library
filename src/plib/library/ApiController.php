<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

namespace PleskExt\ExtExampleUILibrary;

/**
 * Class ApiController
 *
 * @package PleskExt\ExampleUiLibrary
 */
class ApiController extends \pm_Controller_Action
{
    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);

        parent::init();
    }

    /**
     * Send json data
     *
     * @param $data
     */
    protected function sendJsonResponse($data)
    {
        $this->getResponse()
            ->setHeader('Content-Type', 'application/json')
            ->setBody($this->_helper->json($data))
            ->sendResponse();
    }

    /**
     * Send exception
     *
     * @param \Exception $exception
     */
    protected function sendException(\Exception $exception)
    {
        $this->getResponse()
            ->setHeader('Content-Type', 'application/json')
            ->setException($exception)
            ->setHttpResponseCode($exception->getCode() ?: 500)
            ->renderExceptions(false)
            ->setBody($this->_helper->json([
                'message' => $exception->getMessage()
            ]))
            ->sendResponse();
    }
}
