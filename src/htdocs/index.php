<?php
// Copyright 1999-2017. Plesk International GmbH. All rights reserved.

$moduleId = basename(__DIR__);
pm_Context::init($moduleId);
(new \PleskExt\ExtExampleUILibrary\Application())->run();
