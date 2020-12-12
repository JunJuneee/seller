

  function sendLink() {
    Kakao.Link.sendDefault({
      objectType: 'text',
      text:
        '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.',
      link: {
        mobileWebUrl:
          'https://developers.kakao.com/docs/js/kakaotalklink#텍스트-템플릿-보내기',
        webUrl:
          'https://developers.kakao.com/docs/js/kakaotalklink#텍스트-템플릿-보내기',
      },
    })
  }

  function drawChart() {
    
    var data1 = google.visualization.arrayToDataTable(data_list1);
    var data2 = google.visualization.arrayToDataTable(data_list2);
    var data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Related_Query');
    data3.addColumn('number', 'Populartiy');
    data3.addRows(data_list3)


    var options1 = {
      title: '수출액',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: { width: "70%"}

      

    };
    var options2 = {
      title: '구글 트랜드 관련 검색어',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: {width: "90%"}

      
    };
    var options3 = {
    title: '연관검색어 ',
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

  function drawChart() {
    
    var data1 = google.visualization.arrayToDataTable(data_list1);
    var data2 = google.visualization.arrayToDataTable(data_list2);
    var data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'Related_Query');
    data3.addColumn('number', 'Populartiy');
    data3.addRows(data_list3)


    var options1 = {
      title: '수출액',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: { width: "70%"}

      

    };
    var options2 = {
      title: '구글 트랜드 관련 검색어',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: {width: "90%"}

      
    };
    var options3 = {
    title: '연관검색어 ',
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


  Kakao.init('b08b26aba26f5e4e75dfcc1d61ead14f');