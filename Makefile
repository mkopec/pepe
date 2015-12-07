all:
	cd firefox && jpm xpi && mv *.xpi ../bin/

clean:
	rm bin/*.xpi
