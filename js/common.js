$(document).ready(function(){
	$('.comboBx_control,.comboBx2_control').addClass("js_wrap3");/* (add)20230126 */
	$('.js_wrap3').toggleAccordion({
		wrapClass:".js_wrap3",
		clickClass:".bt_combo",
		showClass:".combo_ly",
		layer:true,
		speed:150
	});
	$('.js_wrap3').selectText({
		wrapClass:".js_wrap3",
		clickOn:".combo_ly ul li a",
		setTextToClass:".bt_combo",
	});

	$('.comboBx2_control').selectText({
		wrapClass:".comboBx2_control",
		clickOn:".combo_ly ul li a",
		setTextToClass:".bt_combo",
	});

	$(".toggle1 a").click(function(){
		$(".toggle1 a").removeClass('on');
		$(this).addClass('on');
	});

	$('.servTermOpt_list').toggleAccordion({
		wrapClass:".servTermOpt_list",
		clickClass:".bt_toggle",
		showClass:".servTermOpt_body",
		layer:false,
		speed:150
	});

	$('.js_wrap2').toggleAccordion({
		wrapClass:".js_wrap2",
		clickClass:".js_click2",
		showClass:".js_show2",
		layer:false,
		speed:150
	});

	$(".bt_alarm").click(function(){
		$(".alarm_ly_wrap").show();
	});

	$(".bt_close").click(function(){
		$(".alarm_ly_wrap").hide();
	});

	$('.ic_src_filter,.filterSelect_list > *').click(function(){
		$('.ic_src_filter').addClass('on');
		$(".modal_wrap").show();
	});
	$('.bt_modalclose').click(function(){
		$('.ic_src_filter').removeClass('on');
		$(".modal_wrap").hide();
	});

	$(".tabs_header").tabs({
		wrapClass: ".tabs_header",        
		clickClass: "li",                 
		showClass: ".tab_cnt_a",          
		animate: true,                    
		fade: false,                      
		// animateBorder: ["true", "ul"],    
		speed: 500                       
	});

});
