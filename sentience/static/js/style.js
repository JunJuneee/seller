


  function drawChart() {
    
    var data1 = google.visualization.arrayToDataTable(data_list1);
    var data2 = google.visualization.arrayToDataTable(data_list2);
    var data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Related_Query');
    data3.addColumn('number', 'Populartiy');
    data3.addRows(data_list3)


    var options1 = {
      title: '수출 그래프',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: { width: "70%"}

      

    };
    var options2 = {
      title: '구글 트랜드 관련 검색어',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: {width: "90%"},
      titleTextStyle :{fontSize:20}

      

      
    };
    var options3 = {
    title: '연관검색어 ',
    sliceVisibilityThreshold: .01,
    chartArea: { width: "100%"},
    titleTextStyle :{fontSize:20}

    };

    var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart1'));
    var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart2'));
    var chart3 = new google.visualization.PieChart(document.getElementById('chart_div'));

    chart1.draw(data1, options1);
    chart2.draw(data2, options2);
    chart3.draw(data3, options3);
    window.addEventListener('resize', drawChart, false);
  }

  function drawChart() {
    
    var data1 = google.visualization.arrayToDataTable(data_list1);
    var data2 = google.visualization.arrayToDataTable(data_list2);
    var data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Related_Query');
    data3.addColumn('number', 'Populartiy');
    data3.addRows(data_list3)


    var options1 = {
      title: '품목별 수출 그래프',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: { width: "70%"}

      

    };
    var options2 = {
      title: '구글 트랜드 검색어 트랜드',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: {width: "90%"}

      
    };
    var options3 = {
    title: '구글 트랜드 연관검색어 ',
    sliceVisibilityThreshold: .01,
    chartArea: { width: "100%"}

    };

    var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart1'));
    var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart2'));
    var chart3 = new google.visualization.PieChart(document.getElementById('chart_div'));

    chart1.draw(data1, options1);
    chart2.draw(data2, options2);
    chart3.draw(data3, options3);
    window.addEventListener('resize', drawChart, false);
  }


  