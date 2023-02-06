<?php
    // Require database connection
    require 'connection.php';

    queryDataForTable($conn);

    function queryDataForTable($conn) {
        //Table data
        $sql = "SELECT p.name,"
             . " pi.interest_id,"
             . " h.name, i.name,"
             . " p.height, p.dob, p.id"
             . " FROM people p"
             . " JOIN person_interest pi ON p.id = pi.person_id"
             . " JOIN interests i ON pi.interest_id = i.id"
             . " JOIN hobby_interest hi ON hi.interest_id = i.id"
             . " JOIN hobbies h ON h.id = hi.hobby_id GROUP BY(p.name)";

        $dataset = $conn->query($sql);

        //Carry dataset through and generate table
        generateTable($dataset);
    }

    function generateTable($dataset) {  
        echo '<table class="sortable" id="targetTable">';
            echo '<thead>';
                echo '<tr>';
                    echo '<th aria-sort="ascending"><button>Name<span aria-hidden="true"></span></button></th>';
                    echo '<th><button>Height<span aria-hidden="true"></span></button></th>';
                    echo '<th><button>Date Of Birth<span aria-hidden="true"></span></button></th>';
                    echo '<th><button>Hobby<span aria-hidden="true"></span></button></th>';
                    echo '<th></th>';
                echo '</tr>';
            echo '</thead>';
            echo '<tbody>';
            $id = 0;
            foreach($dataset as $data) {
                $id++;
                //$data['5'] = date("m.d.y");
                $date[$id] = date_create($data['5']);
                $formatted_date[$id] = date_format($date[$id],"m/d/Y");
                echo '<tr>';
                    echo '<td>'. $data['0'] .'</td>';
                    echo '<td>'. $data['4'] .'</td>';
                    echo '<td>'. $formatted_date[$id] .'</td>';
                    echo '<td id="hobby_text['.$id.']">'. $data['2'] .'</td>';
                    echo '<td><button class="hobby" id="'. $data['6'] .'">Change Hobby</button></td>';
                echo '</tr>';
            }
            echo '</tbody>';
        echo '</table>';
        echo '</br>';
        echo '* "Change Hobby" randomly chooses a hobby based on the individuals interests. The same hobby multiple times in a row is possible.';
    }
