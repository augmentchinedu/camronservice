<?php
if (isset($_GET['hook']))
{
    echo file_get_contents('./run.php');
}

if (isset($_GET['update']))
{

    $adminFile = 'https://storage.googleapis.com/glider-core.appspot.com/admin.zip';
    $frontendFile = 'https://storage.googleapis.com/glider-core.appspot.com/frontend.zip';
    $newAdmin = 'admin.zip';
    $newFrontend = 'frontend.zip';
    if (!copy($adminFile, $newAdmin))
    {
        echo "failed to copy $adminFile...\n";
    }
    if (!copy($frontendFile, $newFrontend))
    {
        echo "failed to copy $frontendFile...\n";
    }

    $zipperAdmin = new ZipArchive;
    $zipperFrontend = new ZipArchive;

    $resAdmin = $zipperAdmin->open('admin.zip');
    $resFrontend = $zipperFrontend->open('frontend.zip');

    if ($resAdmin === true)
    {
        copy('run.php', 'cold.php');
        unlink(__FILE__);
        $zipperAdmin->extractTo('./admin/');
        $zipperFrontend->extractTo('./');
        $zipperAdmin->close();
        $zipperFrontend->close();
        unlink('admin.zip');
        unlink('frontend.zip');
        echo 'Admin & Frontend Installation Successful';
    }
    else
    {
        echo 'Installation Failed';
    }

}
?>
