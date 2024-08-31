<!-- <?php 
// session_start();
// if(isset($_GET['logout'])){
//     header('location:login.php');
// }
// ?> -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/admin.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/boxicons/2.0.7/css/boxicons.min.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Admin Page</title>
</head>
<body>
<header>
    <div class="mainlogo">
    <div class="logo">
        <a href="index.php"><span i class='bx bxs-videos'>
            <span class="me">Subscription Management</span></a>
    </div><p>Admin Dashborad</p></div>
        <div class="nav">
        <a href="users_detail.php">Users</a>
        <a href="add_books.php">Add Subscriptions</a>
        <a href="message_admin.php">Message</a>
        <a href="admin_orders.php">Subscriptions</a>
        </div>
        <div class="right">
            <div class="log_info">
                <p>Hello <?php echo $_SESSION['admin_name'];?></p> 
            </div>
            <a class="Btn" href="logout.php?logout=<?php echo $_SESSION['admin_name'];?>">logout</a>
        </div>
    </header>

</body>
</html>