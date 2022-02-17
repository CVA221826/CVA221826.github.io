const countdown = () => {
	const counDate = new Date("Mar, 2022 06:20:00").getTime();
	const now = new Date().getTime();
	const gap = counDate - now;

	//como mrd funciona la hora
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	//Calcular esta mrd
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);
	const textMensaje = "Alistate, hermanita, nos vamos.";

	document.querySelector('.day').innerText = textDay;
	document.querySelector('.hour').innerText = textHour;
	document.querySelector('.minute').innerText = textMinute;
	document.querySelector('.second').innerText = textSecond;

	console.log(gap)
	if (gap < 0) {
		clearInterval(id);
		alert("GOOOOOOOOO!, ya nos vamooooos");
	    document.querySelector('.mensaje').innerText = textMensaje;
	    document.querySelector('.day').innerText = 0;
	    document.querySelector('.hour').innerText = 0;
	    document.querySelector('.minute').innerText = 0;
	    document.querySelector('.second').innerText = 0;
    }
};

var id = setInterval(countdown, 1000);