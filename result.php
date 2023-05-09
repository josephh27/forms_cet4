<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="result.css">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_POST['submit'])) {
            $firstName = $_POST['first-name'];
            $middleName = $_POST['middle-name'];
            $familyName = $_POST['family-name'];
            $suffix = $_POST['suffix'];
            $phoneNum = $_POST['phone-num'];
            $email = $_POST['email'];
            $birthday = $_POST['birthday'];
            $birthplace = $_POST['birthplace'];
            $gender = empty($_POST['other-gender']) ? $_POST['gender']: $_POST['other-gender'];
            $civilStatus = $_POST['civil-status'];
            $religion = empty($_POST['other-religion']) ? $_POST['religion']: $_POST['other-religion'];
            $citizenship = $_POST['citizenship'];
            $presentHouse = $_POST['present-house-number'];
            $presentStreet = $_POST['present-street'];
            $presentLot = $_POST['present-lot/block'];
            $presentProvince = $_POST['present-province'];
            $presentMunicipality = $_POST['present-municipality'];
            $presentBarangay = $_POST['present-barangay'];
            $presentZip = $_POST['present-zip/postal-code'];
            $presentCountry = $_POST['permanent-country'];
            $permanentHouse = $_POST['permanent-house-number'];
            $permanentStreet = $_POST['permanent-street'];
            $permanentLot = $_POST['permanent-lot/block'];
            $permanentProvince = $_POST['permanent-province'];
            $permanentMunicipality = $_POST['permanent-municipality'];
            $permanentBarangay = $_POST['permanent-barangay'];
            $permanentZip = $_POST['permanent-zip/postal-code'];
            $permanentCountry = $_POST['permanent-country'];
            $applyingPosition = $_POST['applying-position'];
            $workType= empty($_POST['other-work-type']) ? $_POST['work-type']: $_POST['other-work-type'];
        }
    ?>
    <h1></h1>
    <div class="wrapper">
        <h1>Here is what we've received so far.</h1>
        <div class="form">
            <h1>1.) Personal Information</h1>
            <div class='category-container'><span class='category'>First Name:  </span><span class="result"><?= $firstName?></span></div>
            <div class='category-container'><span class='category'>Middle Name:  </span><span class="result"><?= $middleName?></span></div>
            <div class='category-container'><span class='category'>Family Name:  </span><span class="result"><?= $familyName?></span></div>
            <div class='category-container'><span class='category'>Suffix:  </span><span class="result"><?= $suffix?></span></div>
            <div class='category-container'><span class='category'>Phone Number:  </span><span class="result"><?= $phoneNum?></span></div>
            <div class='category-container'><span class='category'>Email:  </span><span class="result"><?= $email?></span></div>
            <div class='category-container'><span class='category'>Birthday:  </span><span class="result"><?= $birthday?></span></div>
            <div class='category-container'><span class='category'>Birthplace:  </span><span class="result"><?= $birthplace?></span></div>
            <div class='category-container'><span class='category'>Gender:  </span><span class="result"><?= $gender?></span></div>
            <div class='category-container'><span class='category'>Civil Status:  </span><span class="result"><?= $civilStatus?></span></div>
            <div class='category-container'><span class='category'>Religion:  </span><span class="result"><?= $religion?></span></div>
            <div class='category-container'><span class='category'>Citizenship:  </span><span class="result"><?= $citizenship?></span></div>
            <h1>2.) Present Address</h1>
            <div class='category-container'><span class='category'>House Number:  </span><span class="result"><?= $presentHouse?></span></div>
            <div class='category-container'><span class='category'>Street:  </span><span class="result"><?=  $presentStreet?></span></div>
            <div class='category-container'><span class='category'>Lot/Block:  </span><span class="result"><?=  $presentLot?></span></div>
            <div class='category-container'><span class='category'>Province:  </span><span class="result"><?= $presentProvince?></span></div>
            <div class='category-container'><span class='category'>Municipality:  </span><span class="result"><?= $presentMunicipality?></span></div>
            <div class='category-container'><span class='category'>Barangay:  </span><span class="result"><?= $presentBarangay?></span></div>
            <div class='category-container'><span class='category'>Postal Code:  </span><span class="result"><?= $presentZip?></span></div>
            <div class='category-container'><span class='category'>Country:  </span><span class="result"><?= $presentCountry?></span></div>
            <h1>3.) Permanent Address</h1>
            <div class='category-container'><span class='category'>House Number:  </span><span class="result"><?= $permanentHouse?></span></div>
            <div class='category-container'><span class='category'>Street:  </span><span class="result"><?=  $permanentStreet?></span></div>
            <div class='category-container'><span class='category'>Lot/Block:  </span><span class="result"><?=  $permanentLot?></span></div>
            <div class='category-container'><span class='category'>Province:  </span><span class="result"><?= $permanentProvince?></span></div>
            <div class='category-container'><span class='category'>Municipality:  </span><span class="result"><?= $permanentMunicipality?></span></div>
            <div class='category-container'><span class='category'>Barangay:  </span><span class="result"><?= $permanentBarangay?></span></div>
            <div class='category-container'><span class='category'>Postal Code: </span> <span class="result"><?= $permanentZip?></span></div>
            <div class='category-container'><span class='category'>Country:  </span><span class="result"><?= $permanentCountry?></span></div>
            <h1>4.) Work Details</h1>   
            <div class='category-container'><span class='category'>Applying Position:  </span><span class="result"><?=  $applyingPosition?></span></div>
            <div class='category-container'><span class='category'>Work Type:  </span><span class="result"><?= $workType?></span></div>
    </div>
</body>
</html>