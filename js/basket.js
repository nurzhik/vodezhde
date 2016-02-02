
$(document).ready(function(){ 

	$('#productbuy').on('click', function(){
		var productId = $(this).attr('data-id');
		
		$('.basket_container ').append('<li class="productId' + productId + '"></li>');
		$('.basket_container li:last ').append('<div class="basket_item"></div>');
		$('.basket_container li .basket_item:last ').append('<div class="img_basket"></div>');
		$('.basket_container li .basket_item:last .img_basket').append($('.slider-smallimg').html());
		$('.basket_container li .basket_item:last ').append('<div class="title_basket"></div>');
		$('.basket_container li .basket_item:last .title_basket').append($('.product_title').text());
		$('.basket_container li .basket_item:last ').append('<div class="price_basket"></div>');
		$('.basket_container li .basket_item:last .price_basket').append($('.price').text());
		$('.basket_container li .basket_item:last ').append('<div class="counts"></div>');
		$('.basket_container li .basket_item:last ').append(' <a href="basket.html" class="button" id="go_busket">В корзину</a>');
		$('.basket_container li:last .counts').append('Количество:  <input name="product1" type="number" min="0" value="1"> ');
		$('.count').html('Кол:' + ' ' +($('.basket_container li').length)  );
		
		var product_count = $('.count').html();
		localStorage.setItem("product_count", product_count);
		var test = $('.basket_container').html()

		localStorage.setItem("lastname", test);

		localStorage.lastname
		localStorage.product_count
		
		var gii = localStorage.getItem("lastname")
		console.log(gii);
		console.log($('productdata'));
	});
	
	$('.count').html(localStorage.getItem("product_count"));
	$('.basket_container ').append(localStorage.getItem("lastname"));
	if($('.basket_container li ').length == 0){$('#go_busket').hide() }else{$('#go_busket').show()};
	$('#del').on('click', function(){
		
		localStorage.removeItem('lastname');
		localStorage.removeItem('product_count');
		location.reload();
		
	})	
});	
function foo(){
		var sss = $('.basket_container li').attr('class');
		console.log(sss)
	}