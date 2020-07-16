<script>

    $("#sunBtn").on("click", function () {

        let bldArray = [3, 2, 4, 7, 6, 9];
            let tallest = 0;
            let currentBld = 0;
            let output = new Array();

            for (let loop = 0; loop < 6; loop++) {

                currentBld = bldArray[loop];

                if (currentBld > tallest) {
                    output.push(currentBld);
                    tallest = currentBld
                }

                $("#sunOut").html(`${output.length} buildings can see the sunset. <br />
                The buildings that can see the sunset are [${output.toString()}].`)


            }


        });
    </script>