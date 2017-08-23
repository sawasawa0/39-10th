<script>
$(function () {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear(), 7, 31);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
});
</script>