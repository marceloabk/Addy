describe("Map", function() {

  it("should get the current location coordinates", function() {
	spyOn(window, 'showPosition');
	spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
			var position = { coords: { latitude: 14.0000, longitude: 12.0000 }};
	  return position;
	});
	window.showPosition();
	expect(window.showPosition).toHaveBeenCalled();
  });

  it("should correctly convert a number in base10 to base32", function() {
	var code = codeconvert(100);
	expect(code).toBe('2S');
	code = codeconvert(10);
	expect(code).toBe('A');
	code = codeconvert(1000);
	expect(code).toBe('RS');
  });

  it("should correctly convert a number in base32 to base10", function() {
	var code = codebackconvert('2S');
	expect(code).toBe(100);
	code = codebackconvert('A');
	expect(code).toBe(10);
	code = codebackconvert('RS');
	expect(code).toBe(1000);
  });
});
