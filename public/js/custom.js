$(document).ready(function(){
	
	$("#callPanelOpener").click(function(){
       $(".call-panel-wrapper").toggleClass("hide-call-wrapper");
		
    });
             $(".button-collapse").sideNav();
			 /*right sidebar height*/
			 var window_height = $(window).height();
			 var header_height = $(".navbar-fixed").height();
			 var header_height_main = $("header").height();
			 var main_panel = window_height - header_height;
	 		var manage_height = window_height - header_height_main;
	
			var filterheight = $(".filter-section").height();
			 var tabheight = $(".sub-heading-row").height();
			 var main_panel_tab = window_height - header_height - tabheight;
			 var ticketheight = main_panel_tab - filterheight - tabheight - 10;
			 var tabcontentheight = main_panel_tab - tabheight - 40;
	
			// alert(window_height);
			//  alert($(".navbar-fixed").height());
			// alert(right_sidebar_hgt);
			$(".sidebar").height(main_panel);
			$(".login-wrapper").height(window_height); 
			$(".manage-height").height(manage_height);
				$(".ticket-listing").css('max-height', ticketheight);
			//$(".tab-content-scroll").css('height', tabcontentheight);
	
			
			/*side nav height*/
			var adjust_nav_height = header_height + 62;
			var side_nav_height = window_height - adjust_nav_height;
			$(".top-row .side-nav").height(side_nav_height);
			/*side nav height*/
	
	
			//drop down code
			$('select').material_select();
			
		/*Dialer js start*/	
			var phoneScreen = $("#phone_number #phone_number1");
			 var phoneNumber = phoneScreen.val();
				var delBtn = $("button#delete_number"); 
				var clrBtn = $("button#clr, button#clr1");
				var numBtn = $("button.number"); 
				var dialBtn = $("button#dial button#dial1");
				
				numBtn.click(function() {
					var number = $(this).val();
				  updatePhoneNumber(number);
				  printPhoneNumber();
				});
				delBtn.click(function() {
					deleteNumber();
				  printPhoneNumber();
				});
				clrBtn.click(function() {
					clearNumber();
				  printPhoneNumber();
				});
				dialBtn.click(function() {
				  dialNumber();
				  clearNumber();
				  printPhoneNumber();
				});
				
				function updatePhoneNumber(newNumber) {
					phoneNumber = phoneNumber + newNumber;
				}
				function deleteNumber() {
					phoneNumber = phoneNumber.slice(0,-1);
				}
				function clearNumber() {
					phoneNumber = "";
				}
				function printPhoneNumber() {
					phoneScreen.val(phoneNumber);
				}
				function dialNumber() {
					
				}
/*Dialer js ends*/		

 $("#dial_opener, #dial_opener1").click(function(){
        $(".dial-pad").slideToggle();
    });

$("#callback-disposition").click(function(){
        $("#disposition").slideToggle();
    });
	
$("#call-transfer-btn").click(function(){
        $("#call-transfer").slideToggle();
    });

	$("#call-confer-btn").click(function(){
        $("#call-confer").slideToggle();
    });
	
	$("#filter-btn").click(function(){
        $("#filter-dropdown").slideToggle();
    });	
	$("#filter-btn88").click(function(){
        $("#filter-dropdown88").slideToggle();
    });		
	
	
	$("#cc-btn").click(function(){	
		$(this).hide();
        $("#cc-Section").slideToggle();
    });
	$("#Bcc-btn").click(function(){
        $(this).hide();
		$("#bcc-Section").slideToggle();
    });
	$("#new-cc-btn").click(function(){	
		$(this).hide();
        $("#new-cc-Section").slideToggle();
    });
	$("#new-Bcc-btn").click(function(){
        $(this).hide();
		$("#new-bcc-Section").slideToggle();
    });
	$(".mail-btn").click(function(){		
        $("#mail-section").slideToggle();
    });
	$(".fb-btn").click(function(){
        $("#fb-section").slideToggle();
    });
	$(".twitter-btn").click(function(){		
        $("#twitter-section").slideToggle();
    });
	$("#note-btn").click(function(){
        $("#note-section").slideToggle();
    });
	$("#queueFilterBtn").click(function(){
        $("#queueFilterContent").slideToggle();
    });
	/*Chart js start here*/

	// JavaScript Document
$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
			allowDecimals: false,
            categories: ['Agent']			
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Agents',
               
            }      
        },
        legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Unavailable',
            data: [10 ] 
        }, {
            name: 'Available',
            data: [5]        
        }]
    });
});

$(function () {
    Highcharts.setOptions({
         		colors: ['#29abe2', '#0771bc', '#8b71dc','#d97ddc', '#e89dbb','#22b573','#00a99d']
    });
    $(document).ready(function () {
        // Build the chart
        $('#chat_pie_chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
			legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
              fontWeight: 'normal',
              fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Status',
                colorByPoint: true,
                data: [{
                    name: 'New ',
                    y: 312
                }, {
                    name: 'Open',
                    y: 104,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Closed ',
                    y: 13                
                },
				{
                    name: 'Expired ',
                    y: 100
                },
				{
                    name: 'Merged ',
                    y: 20
                },
				
				{
                    name: 'Splitted ',
                    y: 10
                },
				{
                    name: 'Pending ',
                    y: 23
                }
				
				]
            }]
        });
    });
});
$(function () {
    Highcharts.setOptions({
         		colors: ['#29abe2', '#0771bc', '#8b71dc','#d97ddc', '#e89dbb','#22b573','#00a99d']
    });
    $(document).ready(function () {

        // Build the chart
        $('#chat_pie_chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
          
			legend: {
                 layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Status',
                colorByPoint: true,
                data: [{
                    name: 'Viber ',
                    y: 312
                }, {
                    name: 'Facebook Messenger',
                    y: 104,
                    sliced: true,
                    selected: true
                }, {
                    name: 'In app chat ',
                    y: 13                
                },
				{
                    name: 'Web Chat ',
                    y: 100
                }
				
				]
            }]
        });
    });
});

$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#containerSla').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              hour: '%H:%M',
			  day: '%A:%b',
			  week: '%e:%b',
            }
         
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
            headerFormat: '{point.x:%A , %b %e , %H:%M}<br>',
            pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Assigned',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'First Response',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Resolve',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        }]
    });
});
$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
	 $('#csat_score').highcharts({
  		
        title: {
            text: ''
        },
       
        xAxis: {
            categories: ['0', '1', '2', '3', '4', '5',
                '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        },
        yAxis: {
            title: {
                 text: 'Number of Interaction'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
         
        },
       
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
		},
        series: [{
           name: 'Received',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
           name: 'Resolved',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});
$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
	 $('#media_channel').highcharts({
    chart: {
        type: 'bar'
    },
	 title: {
            text: ''
        },	 
    xAxis: {
        categories: ['One ', 'Two', 'Three', 'Four'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'One',
        data: [107, 31, 635]
    }, {
        name: 'Two',
        data: [133, 156, 947]
    }, ]
});
	});
/*line chart*/
$(function () {
	Highcharts.setOptions({
         		colors: ['#35b55a', '#f7923c', '#c12431', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.5)']
    });
	 $('#containerPeriod').highcharts({
  		
       chart: {
        type: 'bar',
        marginLeft: 130
    },
    title: {
        text: ''
    },
    xAxis: {
		categories: ['Agent Name', 'Agent Name1', 'Agent Name2', 'Agent Name3', 'Agent Name4', 'Agent Name5', 'Agent Name6', 'Agent Name7', 'Agent Name8', 'Agent Name9', 'Agent Name10'],
        min: 0,
        max: 4,
        scrollbar: {
            enabled: true
        },
        tickLength: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tickets',
            align: 'high'
        }
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    legend: {
        enabled: true,
		reversed: true,
        verticalAlign: 'top',
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Low',
        data: [5, 3, 4, 7, 2, 10, 3, 4, 8, 11], 
		index:4
    }, {
        name: 'Medium',
        data: [2, 2, 3, 2, 1, 8, 9, 32, 4, 5], 
		index:3
    }, {
        name: 'High',
        data: [3, 4, 4, 2, 5, 6, 8, 13, 15, 18], 
		index:2
    }, {
        name: 'Available Instance',
        data: [2, 2, 3, 2, 1, 8, 9, 32, 4, 5], 
		index:0
    }, {
        name: 'Allocated in other queue',
        data: [2, 2, 3, 2, 0, 8, 9, 0, 4, 0], 
		index:1
    }]
    });
});
	
$(function () {
    Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $(document).ready(function () {

        // Build the chart
        $('#containerPie_2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
          
			legend: {
                 layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Status',
                colorByPoint: true,
                data: [{
                    name: 'New ',
                    y: 312
                }, {
                    name: 'Open',
                    y: 104,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Closed ',
                    y: 13                
                },
				{
                    name: 'Expired ',
                    y: 100
                },
				{
                    name: 'Merged ',
                    y: 20
                },
				
				{
                    name: 'Splitted ',
                    y: 10
                },
				{
                    name: 'Pending ',
                    y: 23
                }
				
				]
            }]
        });
    });
});	
	
/*line chart*/

/*overview graph*/
$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#assignedSla_first').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'First Assignded SLA'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              hour: '%H:%M',
			  day: '%A:%b',
			  week: '%e:%b',
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
           
             pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});

$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#responseSla_first').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'First Response SLA'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              hour: '%H:%M',
			  day: '%A:%b',
			  week: '%e:%b',
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
           
           pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

       series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});


$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#resolveSla_first').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'First Resolve SLA'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                hour: '%I %p',
        		minute: '%I:%M %p'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
             pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

         series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});


/*overview graph*/
$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#assignedSla_second').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                hour: '%I %p',
        		minute: '%I:%M %p'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
              pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

         series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});

$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#responseSla_second').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                hour: '%I %p',
        		minute: '%I:%M %p'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
          
              pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

         series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});


$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#resolveSla_second').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                hour: '%I %p',
        		minute: '%I:%M %p'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
              pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

         series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});


/*Chart msg data*/
$(function () {
 Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $(document).ready(function () {

        // Build the chart
        $('#container_msg_data').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
            },
			legend: {
                 layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Data',
                colorByPoint: true,
                data: [{
                    name: 'Voice ',
                    y: 56
                }, {
                    name: 'Non Voice',
                    y: 24,
                    sliced: true,
                    selected: true
                }]
            }]
        });
    });
});

/*Chart interaction data*/
$(function () {
  Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $(document).ready(function () {

        // Build the chart
        $('#container_iteraction_data').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                 pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
            },
			legend: {
                 layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Data',
                colorByPoint: true,
                data: [{
                    name: 'Inbound Call ',
                    y: 56
                }, {
                    name: 'Outbound Call',
                    y: 24,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Incoming Mail',
                    y: 10
                }, {
                    name: 'Outgoing Mail',
                    y: 4                
                }]
            }]
        });
    });
});



//chat history graph
$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#first').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'First Response Time'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              hour: '%H:%M',
			  day: '%A:%b',
			  week: '%e:%b',
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
           
             pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});


$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $('#second').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Inchat Response Time'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              hour: '%H:%M',
			  day: '%A:%b',
			  week: '%e:%b',
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'SLA Percentage'
            },
            min: 0
        },
		legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              itemMarginTop:0,
              itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
           }
        },
        tooltip: {
           
             pointFormat: '{series.name}: <b>{point.y:,.0f}</b>'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Booking',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 80], 
				[Date.UTC(2016, 4, 21, 3, 20), 80], 
				[Date.UTC(2016, 4, 21, 2, 25), 80]
            ]
        }, {
            name: 'Support',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 60], 
				[Date.UTC(2016, 4, 21, 3, 20), 60], 
				[Date.UTC(2016, 4, 21, 2, 25), 60]
            ]
        }, {
            name: 'Feedback',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 40], 
				[Date.UTC(2016, 4, 21, 3, 20), 40], 
				[Date.UTC(2016, 4, 21, 2, 25), 40]
            ]
        },{
            name: 'Interaction campaign',
            data: [
                [Date.UTC(2016, 4, 21, 1, 15), 50], 
				[Date.UTC(2016, 4, 21, 3, 20), 50], 
				[Date.UTC(2016, 4, 21, 2, 25), 50]
            ]
        }]
    });
});
	$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
	 $('#chat-received').highcharts({
    chart: {
        type: 'bar'
    },
	 title: {
            text: ''
        },	 
    xAxis: {
        categories: ['One ', 'Two', 'Three', 'Four'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'One',
        data: [107, 31, 635]
    }, {
        name: 'Two',
        data: [133, 156, 947]
    }, ]
});
	});
	$(function () {
	Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
	 $('#traffic-channel').highcharts({
    chart: {
        type: 'bar'
    },
	 title: {
            text: ''
        },	 
    xAxis: {
        categories: ['One ', 'Two', 'Three', 'Four'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'One',
        data: [107, 31, 635]
    }, {
        name: 'Two',
        data: [133, 156, 947]
    }, ]
});
	});


$(function () {
    Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $(document).ready(function () {
        // Build the chart
        $('#customer_rating').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
			legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
              fontWeight: 'normal',
              fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Status',
                colorByPoint: true,
                data: [{
                    name: 'Rating 1',
                    y: 312
                }, {
                    name: 'Rating 2',
                    y: 104,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Rating 3',
                    y: 13                
                },
				{
                    name: 'Rating 4',
                    y: 100
                },
				{
                    name: 'Rating 5',
                    y: 20
                }
				
				]
            }]
        });
    });
});
$(function () {
    Highcharts.setOptions({
         		colors: [ '#c1272d', '#40a4dc', '#F39C12','#22ae5f', '#f7931e','#1072ba','#808080']
    });
    $(document).ready(function () {
        // Build the chart
        $('#agent-disposition').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
			legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
              fontWeight: 'normal',
              fontSize: '12px'
           }
                 },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Status',
                colorByPoint: true,
                data: [{
                    name: 'Disposition 1',
                    y: 312
                }, {
                    name: 'Disposition 2',
                    y: 104,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Disposition 3',
                    y: 13                
                },
				{
                    name: 'Disposition 4',
                    y: 13                
                }	   
					   
			
				
				]
            }]
        });
    });
});	

		$(function () {
    Highcharts.setOptions({
         		colors: ['#29abe2', '#0771bc', '#8b71dc', '#d97ddc', '#e89dbb', '#22b573', '#00a99d']
    });
    $(document).ready(function () {
        // Build the chart
        $('#IC_pie_chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
			legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0,
              itemMarginTop: 1,
              itemStyle: {
              fontWeight: 'normal',
              fontSize: '12px'
           }
                 },
            plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
     series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33,
            drilldown: 'Microsoft Internet Explorer'
        }, {
            name: 'Chrome',
            y: 24.03,
            drilldown: 'Chrome'
        }, {
            name: 'Firefox',
            y: 10.38,
            drilldown: 'Firefox'
        }, {
            name: 'Safari',
            y: 4.77,
            drilldown: 'Safari'
        }, {
            name: 'Opera',
            y: 0.91,
            drilldown: 'Opera'
        }, {
            name: 'Proprietary or Undetectable',
            y: 0.2,
            drilldown: null
        }]
    }],
    drilldown: {
        series: [{
            name: 'Microsoft Internet Explorer',
            id: 'Microsoft Internet Explorer',
            data: [
                ['v11.0', 24.13],
                ['v8.0', 17.2],
                ['v9.0', 8.11],
                ['v10.0', 5.33],
                ['v6.0', 1.06],
                ['v7.0', 0.5]
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0', 5],
                ['v41.0', 4.32],
                ['v42.0', 3.68],
                ['v39.0', 2.96],
                ['v36.0', 2.53],
                ['v43.0', 1.45],
                ['v31.0', 1.24],
                ['v35.0', 0.85],
                ['v38.0', 0.6],
                ['v32.0', 0.55],
                ['v37.0', 0.38],
                ['v33.0', 0.19],
                ['v34.0', 0.14],
                ['v30.0', 0.14]
            ]
        }, {
            name: 'Firefox',
            id: 'Firefox',
            data: [
                ['v35', 2.76],
                ['v36', 2.32],
                ['v37', 2.31],
                ['v34', 1.27],
                ['v38', 1.02],
                ['v31', 0.33],
                ['v33', 0.22],
                ['v32', 0.15]
            ]
        }, {
            name: 'Safari',
            id: 'Safari',
            data: [
                ['v8.0', 2.56],
                ['v7.1', 0.77],
                ['v5.1', 0.42],
                ['v5.0', 0.3],
                ['v6.1', 0.29],
                ['v7.0', 0.26],
                ['v6.2', 0.17]
            ]
        }, {
            name: 'Opera',
            id: 'Opera',
            data: [
                ['v12.x', 0.34],
                ['v28', 0.24],
                ['v27', 0.17],
                ['v29', 0.16]
            ]
        }]
    }
        });
    });
});
$(function() {
        // Create the chart
	Highcharts.setOptions({
         		colors: ['#00C853', '#D50000', '#00a99d']
    });
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'autoChatChart',
                type: 'pie'
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' Agent';
                }
            },
            series: [{
                name: 'Browsers',
                data: [["Auto Chat ON",47],["Auto Chat OFF",20]],
                size: '100%',
                innerSize: '50%',
                showInLegend:false,
                dataLabels: {
                    enabled: true
                }
            }]
        });
    });

$(function() {
	Highcharts.setOptions({
         		colors: ['#95DB3B', '#F76B1C', '#00a99d']
    });
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chatInstances',
                type: 'pie'
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' Instance';
                }
            },
            series: [{
                name: 'Browsers',
                data: [["Total Availabel Instances", 25],["Total Occupied Instances", 23]],
                size: '100%',
                innerSize: '50%',
                showInLegend:false,
                dataLabels: {
                    enabled: true
                }
            }]
        });
    });
	/*Chart js ends here*/
	
      }); 


if (window.location.search.indexOf('local=rtl') > -1) {
   // alert('rtl exist');
  document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");    
    
var head = document.getElementsByTagName('head')[0];
var style_1 = document.createElement('link');
style_1.href = 'rtl/materialize.min.rtl.css';
style_1.rel = 'stylesheet';
style_1.type = 'text/css';
head.appendChild(style_1);


var head = document.getElementsByTagName('head')[0];
var style_2 = document.createElement('link');
style_2.href = 'rtl/materialdesignicons.min.rtl.css';
style_2.rel = 'stylesheet';
style_2.type = 'text/css';
head.appendChild(style_2);

var head = document.getElementsByTagName('head')[0];
var style_3 = document.createElement('link');
style_3.href = 'rtl/leadManagement.rtl.css';
style_3.rel = 'stylesheet';
style_3.type = 'text/css';
head.appendChild(style_3);

var head = document.getElementsByTagName('head')[0];
var style_4 = document.createElement('link');
style_4.href = 'rtl/Login_ExtensionCss.rtl.css';
style_4.rel = 'stylesheet';
style_4.type = 'text/css';
head.appendChild(style_4);

var head = document.getElementsByTagName('head')[0];
var style = document.createElement('link');
style.href = 'rtl/style.rtl.css';
style.rel = 'stylesheet';
style.type = 'text/css';
head.appendChild(style);
    
var head = document.getElementsByTagName('head')[0];
var style5 = document.createElement('link');
style5.href = 'rtl/style-agent.rtl.css';
style5.rel = 'stylesheet';
style5.type = 'text/css';
head.appendChild(style5);    
    
    
} else {
    //alert('rtl do not exist');
}

