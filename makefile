du:
	docker-compose -f docker-compose.dev.yml up

dd:
	docker-compose -f docker-compose.dev.yml down -v

db: 
	docker image rm -f tut-factory-client && docker-compose -f docker-compose.dev.yml up --build

drm: 
	docker image rm -f tut-factory-client