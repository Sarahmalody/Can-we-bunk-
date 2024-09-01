class IntersectionObserverList {
	mapping;
	observer;
	constructor() {
		this.mapping = new Map();
		this.observer = new IntersectionObserver(
			(entries) => {
				for (var entry of entries) {
					var callback = this.mapping.get(entry.target);

					callback && callback(entry.isIntersecting);
				}
			},
			{
				rootMargin: "300px 0px 300px 0px"
			}
		);
	}
	add(element, callback) {
		this.mapping.set(element, callback);
		this.observer.observe(element);
	}
	ngOnDestroy() {
		this.mapping.clear();
		this.observer.disconnect();
	}
	remove(element) {
		this.mapping.delete(element);
		this.observer.unobserve(element);
	}
}
const observer = new IntersectionObserverList();

$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});

$('[data-animate="true"]').each(function (i) {
	console.log("$(this)", $(this))
	var element = $(this)[0];
	observer.add(element, (isIntersecting) => {
		if (isIntersecting) {
			$(this).addClass("animate-slide-down")
		} else {
			$(this).removeClass("animate-slide-down")
		}
	});
});
class IntersectionObserverList {
	mapping;
	observer;
	constructor() {
		this.mapping = new Map();
		this.observer = new IntersectionObserver(
			(entries) => {
				for (var entry of entries) {
					var callback = this.mapping.get(entry.target);

					console.log("entry", entry);
					console.log("callback", callback);

					callback && callback(entry.isIntersecting);
				}
			},
			{
				rootMargin: "300px 0px 300px 0px"
			}
		);
	}
	add(element, callback) {
		this.mapping.set(element, callback);
		this.observer.observe(element);
	}
	ngOnDestroy() {
		this.mapping.clear();
		this.observer.disconnect();
	}
	remove(element) {
		this.mapping.delete(element);
		this.observer.unobserve(element);
	}
}
const observer = new IntersectionObserverList();

$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});

$('[data-animate="true"]').each(function (i) {
	console.log("$(this)", $(this))
	var element = $(this)[0];
	observer.add(element, (isIntersecting) => {
		console.log("isIntersecting", isIntersecting);
		if (isIntersecting) {
			$(this).addClass("animate-slide-down")
		} else {
			$(this).removeClass("animate-slide-down")
		}
	});
});
class IntersectionObserverList{mapping;observer;constructor()add(e,t)ngOnDestroy()remove(e)}const observer=new IntersectionObserverList;$(window).mousemove(function(e));$('[data-animate="true"]').each(function(e));class IntersectionObserverList{mapping;observer;constructor()add(e,t){this.mapping.set(e,t),this.observer.observe(e)}ngOnDestroy(){this.mapping.clear(),this.observer.disconnect()}remove(e){this.mapping.delete(e),this.observer.unobserve(e)}}const observer=new IntersectionObserverList;$(window).mousemove(function(e){$(".ring").css("transform",`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`)}),$('[data-animate="true"]').each(function(e){console.log("$(this)",$(this));var t=$(this)[0];observer.add(t,e=>{console.log("isIntersecting",e),e?$(this).addClass("animate-slide-down"):$(this).removeClass("animate-slide-down")})});
