<?php
	$con=mysqli_connect("localhost","root","","yd_task");
    // 检测连接
    if (mysqli_connect_errno())
    {
        echo "连接失败: " . mysqli_connect_error();
    }
    
    mysqli_query($con,"UPDATE praise SET count=count+1 WHERE id=1");
    
    mysqli_close($con);
?>
