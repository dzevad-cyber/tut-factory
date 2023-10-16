dev:
	docker-compose -f docker-compose.dev.yml up

devd:
	docker-compose -f docker-compose.dev.yml down -v

devb: 
	docker image rm -f tut-factory-client && docker-compose -f docker-compose.dev.yml up --build

imgrm: 
	docker image rm -f tut-factory-client